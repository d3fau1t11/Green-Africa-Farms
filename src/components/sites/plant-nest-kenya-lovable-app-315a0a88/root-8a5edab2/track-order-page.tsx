"use client";

import { Package } from "lucide-react";
import { useState } from "react";

import { Button } from "./button";

export function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(
      orderNumber
        ? `Your order ${orderNumber} is being prepared at our nursery 🌱`
        : null,
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
          <Package className="h-6 w-6" />
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold">Track your order</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the order number we sent on WhatsApp or email.
        </p>

        <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <input
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="e.g. PNK-2026-0042"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
          />
          <Button size="lg" type="submit">
            Track
          </Button>
        </form>

        {status && (
          <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
