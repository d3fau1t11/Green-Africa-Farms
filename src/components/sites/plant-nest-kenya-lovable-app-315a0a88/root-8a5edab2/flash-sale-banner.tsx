"use client";

import { Flame, X } from "lucide-react";

import { FLASH_SALE_FREE_DELIVERY_MIN, formatPrice } from "./site-data";
import { useMidnightCountdown, useSessionFlag } from "./use-client-store";

const STORAGE_KEY = "pn_scarcity_closed";

const pad = (n: number) => n.toString().padStart(2, "0");

/** Sticky countdown banner. Counts down to local midnight, dismissable per session. */
export function FlashSaleBanner() {
  const [dismissed, dismiss] = useSessionFlag(STORAGE_KEY);
  const time = useMidnightCountdown();

  if (dismissed) return null;

  return (
    <div className="sticky top-0 z-40 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-3 py-2 text-[12px] font-medium sm:text-sm">
        <Flame className="h-4 w-4 shrink-0 animate-pulse text-yellow-300" />
        <span className="truncate">
          <span className="font-bold">Flash sale:</span> Free delivery on orders over{" "}
          {formatPrice(FLASH_SALE_FREE_DELIVERY_MIN)} —
          ends in{" "}
          <span className="font-bold tabular-nums">
            {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
          </span>
        </span>
        <button
          aria-label="Dismiss"
          onClick={dismiss}
          className="ml-1 rounded p-0.5 hover:bg-white/20"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
