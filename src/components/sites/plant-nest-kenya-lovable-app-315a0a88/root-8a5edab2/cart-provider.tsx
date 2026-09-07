"use client";

/**
 * Cart context + localStorage persistence, ported from the target.
 *
 * Only `add` and `count` are exercised by the root page, but the full surface is
 * implemented so the header badge and product cards behave as they do on the
 * target.
 *
 * `localStorage` is the store of record and is read through
 * `useSyncExternalStore` rather than an effect: the server snapshot is an empty
 * cart (matching the target's own first paint, where the cart context also
 * starts empty), and React swaps in the persisted cart on the commit after
 * hydration. No effect, so no cascading render and no hydration mismatch.
 */

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { Toaster, toast } from "sonner";

import type { PlantNestCartItem, PlantNestCartLine } from "@/types/plant-nest-ke";

import { CART_STORAGE_KEY, SITE_NAME, formatPrice, products, waUrl } from "./site-data";

interface CartContextValue {
  items: PlantNestCartItem[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  detailed: PlantNestCartLine[];
  subtotal: number;
  checkoutMessage: () => string;
  checkoutUrl: () => string;
}

const CartContext = createContext<CartContextValue | null>(null);

function isCartItemArray(value: unknown): value is PlantNestCartItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (entry) =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as PlantNestCartItem).slug === "string" &&
        typeof (entry as PlantNestCartItem).qty === "number",
    )
  );
}

/* ------------------------------------------------------------------ *
 * The store
 * ------------------------------------------------------------------ */

const EMPTY: PlantNestCartItem[] = [];

let cartSnapshot: PlantNestCartItem[] | null = null;
const cartListeners = new Set<() => void>();

function readCart(): PlantNestCartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    return isCartItemArray(parsed) ? parsed : EMPTY;
  } catch {
    // Corrupt or unavailable storage — start from an empty cart.
    return EMPTY;
  }
}

/** Memoised so repeated render-phase calls return a stable reference. */
function getCartSnapshot(): PlantNestCartItem[] {
  cartSnapshot ??= readCart();
  return cartSnapshot;
}

function getServerCartSnapshot(): PlantNestCartItem[] {
  return EMPTY;
}

function subscribeCart(onStoreChange: () => void) {
  cartSnapshot ??= readCart();
  cartListeners.add(onStoreChange);
  return () => {
    cartListeners.delete(onStoreChange);
  };
}

function mutateCart(fn: (prev: PlantNestCartItem[]) => PlantNestCartItem[]) {
  const next = fn(getCartSnapshot());
  cartSnapshot = next;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Quota or private-mode failure — the cart just won't persist.
  }
  for (const listener of cartListeners) listener();
}

/* ------------------------------------------------------------------ *
 * Provider
 * ------------------------------------------------------------------ */

export function CartProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const items = useSyncExternalStore(subscribeCart, getCartSnapshot, getServerCartSnapshot);

  const add = useCallback(
    (slug: string, qty = 1) => {
      mutateCart((prev) => {
        const existing = prev.find((entry) => entry.slug === slug);
        if (existing) {
          return prev.map((entry) =>
            entry.slug === slug ? { ...entry, qty: entry.qty + qty } : entry,
          );
        }
        return [...prev, { slug, qty }];
      });

      const product = products.find((p) => p.slug === slug);
      toast.success(`${product?.name ?? "Item"} added to cart`, {
        action: {
          label: "View cart",
          onClick: () => router.push("/cart"),
        },
      });
    },
    [router],
  );

  const remove = useCallback((slug: string) => {
    mutateCart((prev) => prev.filter((entry) => entry.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    mutateCart((prev) =>
      qty <= 0
        ? prev.filter((entry) => entry.slug !== slug)
        : prev.map((entry) => (entry.slug === slug ? { ...entry, qty } : entry)),
    );
  }, []);

  const clear = useCallback(() => mutateCart(() => EMPTY), []);

  const value = useMemo<CartContextValue>(() => {
    const detailed = items.flatMap<PlantNestCartLine>((entry) => {
      const product = products.find((p) => p.slug === entry.slug);
      if (!product) return [];
      return [{ product, qty: entry.qty, lineTotal: product.price * entry.qty }];
    });

    const subtotal = detailed.reduce((sum, line) => sum + line.lineTotal, 0);

    const checkoutMessage = () =>
      [
        `Hello ${SITE_NAME}! I'd like to place an order:`,
        "",
        ...detailed.map(
          (line, index) =>
            `${index + 1}. ${line.product.name} — ${line.qty} × ${formatPrice(line.product.price)} = ${formatPrice(line.lineTotal)}`,
        ),
        "",
        `*Subtotal: ${formatPrice(subtotal)}*`,
        "",
        "Please confirm availability and delivery to:",
        "Name: ",
        "Town / Location: ",
        "Preferred payment: M-Pesa / Cash on delivery",
      ].join("\n");

    const checkoutUrl = () => waUrl(checkoutMessage());

    return {
      items,
      add,
      remove,
      setQty,
      clear,
      count: items.reduce((sum, entry) => sum + entry.qty, 0),
      detailed,
      subtotal,
      checkoutMessage,
      checkoutUrl,
    };
  }, [items, add, remove, setQty, clear]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <Toaster
        className="toaster group"
        toastOptions={{
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
