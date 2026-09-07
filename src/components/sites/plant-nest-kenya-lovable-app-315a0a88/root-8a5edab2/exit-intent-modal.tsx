"use client";

import { Gift, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./button";
import { Dialog, DialogContent, DialogTitle } from "./dialog";
import { SITE_NAME, waUrl } from "./site-data";

const STORAGE_KEY = "pn_exit_intent_shown";

/**
 * Four triggers behind one latch, ported from the target: cursor leaving the
 * viewport top, a sharp upward scroll after 600px, a 35s dwell timer, and a
 * history pop. Fires at most once per session.
 *
 * `DialogContent` keeps shadcn's `grid gap-4`, so a 16px gap sits between the
 * gradient head and the body — that's the target's rendering, not a bug.
 */
export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    let fired = false;
    const show = () => {
      if (fired) return;
      fired = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) show();
    };

    let prevY = window.scrollY;
    let maxY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      maxY = Math.max(maxY, y);
      if (maxY > 600 && prevY - y > 200) show();
      prevY = y;
    };

    const timer = window.setTimeout(show, 35_000);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", show);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", show);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-md overflow-hidden border-0 p-0 sm:rounded-2xl"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-foreground shadow hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-primary to-primary/80 px-6 pb-6 pt-8 text-primary-foreground">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" /> Wait! Limited offer
          </p>
          <DialogTitle asChild>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
              Get 10% off your first order
            </h2>
          </DialogTitle>
          <p className="mt-2 text-sm text-primary-foreground/90">
            Plus our free <span className="font-semibold">Fruit Farming Starter Guide</span> — only
            available today.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1.5 backdrop-blur">
            <Gift className="h-4 w-4" />
            <span className="font-mono text-sm font-bold tracking-wider">WELCOME10</span>
          </div>
        </div>

        <div className="space-y-3 bg-background px-6 py-5">
          <a
            href={waUrl(
              `Hi ${SITE_NAME}! I'd like to claim the WELCOME10 offer — 10% off + free farming starter guide.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <Button className="w-full gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
              <MessageCircle className="h-4 w-4" /> Claim on WhatsApp
            </Button>
          </a>
          <button
            onClick={() => setOpen(false)}
            className="w-full text-center text-xs text-muted-foreground hover:text-foreground"
          >
            No thanks, I&apos;ll pay full price
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
