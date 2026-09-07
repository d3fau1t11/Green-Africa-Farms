"use client";

/**
 * Client-only stores read through `useSyncExternalStore`.
 *
 * Both values here are unknowable during SSR (a dismissal flag in
 * `sessionStorage`, the wall clock). Reading them in an effect and calling
 * `setState` is what the target does, but under React 19's compiler lint that is
 * a cascading render (`react-hooks/set-state-in-effect`) — and it also risks a
 * hydration text mismatch. `useSyncExternalStore` is the sanctioned primitive:
 * React renders the server snapshot during hydration, then swaps in the live
 * client snapshot on the next commit with no mismatch warning.
 */

import { useCallback, useSyncExternalStore } from "react";

/* ------------------------------------------------------------------ *
 * Session flags — one-shot, per-tab dismissals
 * ------------------------------------------------------------------ */

const flagListeners = new Set<() => void>();

function readFlag(key: string) {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    // Private mode or storage disabled — treat the flag as unset.
    return false;
  }
}

function subscribeFlag(onStoreChange: () => void) {
  flagListeners.add(onStoreChange);
  return () => {
    flagListeners.delete(onStoreChange);
  };
}

/**
 * A fresh visit has nothing dismissed, so the server assumes "unset". That
 * keeps promo chrome in the SSR HTML — matching the target's first paint and
 * avoiding a layout shift — at the cost of one frame of it for the rare
 * visitor who already dismissed it this session.
 */
function getServerFlag() {
  return false;
}

/** `[isSet, set]`. `set` writes the flag and notifies every subscriber. */
export function useSessionFlag(key: string): [boolean, () => void] {
  const getSnapshot = useCallback(() => readFlag(key), [key]);

  const isSet = useSyncExternalStore(subscribeFlag, getSnapshot, getServerFlag);

  const set = useCallback(() => {
    try {
      sessionStorage.setItem(key, "1");
    } catch {
      // Non-persisting dismissal is still a dismissal for this render pass.
    }
    for (const listener of flagListeners) listener();
  }, [key]);

  return [isSet, set];
}

/* ------------------------------------------------------------------ *
 * Countdown to local midnight, ticking once a second
 * ------------------------------------------------------------------ */

/** 23:59:59 — what the banner shows before the real clock is known. */
const FULL_DAY_SECONDS = 86_399;

let cachedRemaining = FULL_DAY_SECONDS;
const clockListeners = new Set<() => void>();
let clockTimer: number | null = null;

function secondsUntilMidnight() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000));
}

function subscribeClock(onStoreChange: () => void) {
  clockListeners.add(onStoreChange);

  if (clockTimer === null) {
    cachedRemaining = secondsUntilMidnight();
    clockTimer = window.setInterval(() => {
      const next = secondsUntilMidnight();
      if (next === cachedRemaining) return;
      cachedRemaining = next;
      for (const listener of clockListeners) listener();
    }, 1000);
  }

  return () => {
    clockListeners.delete(onStoreChange);
    if (clockListeners.size === 0 && clockTimer !== null) {
      window.clearInterval(clockTimer);
      clockTimer = null;
    }
  };
}

function getClockSnapshot() {
  return cachedRemaining;
}

function getServerClockSnapshot() {
  return FULL_DAY_SECONDS;
}

/**
 * Seconds left until local midnight. The interval only runs while at least one
 * component is subscribed, and the returned number is `tabular-nums`-stable in
 * width from the server snapshot onward, so the swap causes no reflow.
 */
export function useMidnightCountdown() {
  const remaining = useSyncExternalStore(
    subscribeClock,
    getClockSnapshot,
    getServerClockSnapshot,
  );

  return {
    h: Math.floor(remaining / 3600),
    m: Math.floor((remaining / 60) % 60),
    s: remaining % 60,
  };
}
