"use client";

import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";
import { useCart } from "./cart-provider";
import { CART_FREE_DELIVERY_MIN, formatPrice } from "./site-data";

export function CartPage() {
  const { detailed, subtotal, setQty, remove, clear, checkoutUrl, count } = useCart();
  const amountToFreeDelivery = Math.max(0, CART_FREE_DELIVERY_MIN - subtotal);

  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-secondary">
          <ShoppingBag className="h-7 w-7 text-muted-foreground" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Browse our seedlings and start your orchard today.
        </p>
        <Link href="/shop" className="mt-6 inline-block">
          <Button size="lg" className="gap-2">
            <ShoppingBag className="h-4 w-4" /> Shop seedlings
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Your cart</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {count} item{count === 1 ? "" : "s"}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {detailed.map(({ product, qty, lineTotal }) => (
            <div
              key={product.slug}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <Link
                href={`/products/${product.slug}`}
                className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {product.category}
                    </p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-display text-base font-semibold hover:text-primary"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {formatPrice(product.price)} each
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(product.slug)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="inline-flex items-center rounded-lg border border-border">
                    <button
                      type="button"
                      onClick={() => setQty(product.slug, qty - 1)}
                      className="grid h-9 w-9 place-items-center hover:bg-muted"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(product.slug, qty + 1)}
                      className="grid h-9 w-9 place-items-center hover:bg-muted"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="font-semibold">{formatPrice(lineTotal)}</p>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={clear}
            className="text-sm text-muted-foreground hover:text-destructive"
          >
            Clear cart
          </button>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-bold">Order summary</h2>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-medium">
                {subtotal >= CART_FREE_DELIVERY_MIN ? "FREE" : "Calculated on WhatsApp"}
              </span>
            </div>
          </div>

          {amountToFreeDelivery > 0 && (
            <div className="mt-4 rounded-xl bg-secondary p-3 text-xs text-muted-foreground">
              <Truck className="mr-1 inline h-3.5 w-3.5 text-primary" />
              Add{" "}
              <span className="font-semibold text-foreground">
                {formatPrice(amountToFreeDelivery)}
              </span>{" "}
              more for free nationwide delivery.
            </div>
          )}

          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-display text-xl font-bold">{formatPrice(subtotal)}</span>
          </div>

          <a
            href={checkoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block"
          >
            <Button
              size="lg"
              className="w-full gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <MessageCircle className="h-4 w-4" /> Checkout on WhatsApp
            </Button>
          </a>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            We confirm your order, delivery address &amp; payment (M-Pesa or cash on delivery) on
            WhatsApp.
          </p>

          <Link
            href="/shop"
            className="mt-4 block text-center text-sm text-primary hover:underline"
          >
            ← Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
