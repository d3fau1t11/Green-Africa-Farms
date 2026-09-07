"use client";

import { MessageCircle, Package, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./button";
import { waUrl } from "./site-data";

const STORAGE_KEY = "pn_bundle_toast";

/** Slides in 18s after mount, once per session. */
export function BundleDealToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const id = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 18_000);
    return () => window.clearTimeout(id);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-3 bottom-24 z-40 mx-auto max-w-sm animate-fade-in rounded-2xl border border-border bg-card p-4 shadow-card sm:bottom-6 sm:left-auto sm:right-6">
      <button
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="absolute right-2 top-2 rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex gap-3">
        <span className="rounded-xl bg-primary/10 p-2 text-primary">
          <Package className="h-5 w-5" />
        </span>
        <div className="flex-1 pr-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Bundle deal</p>
          <p className="mt-0.5 text-sm font-semibold">Buy 3 seedlings, get 1 free</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Mix &amp; match any varieties. Limited to first 50 farmers this week.
          </p>
          <a
            href={waUrl("Hi! I'd like to claim the Buy 3 Get 1 Free bundle offer. Please advise.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            <Button
              size="sm"
              className="gap-1.5 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Claim bundle
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
