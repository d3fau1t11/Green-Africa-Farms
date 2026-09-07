"use client";

import { Eye, Flame, MessageCircle, ShoppingBag, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { PlantNestProduct } from "@/types/plant-nest-ke";

import { Button } from "./button";
import { useCart } from "./cart-provider";
import { formatPrice, waUrl } from "./site-data";

/**
 * Stock and viewer counts are derived from the slug rather than randomised at
 * mount, so the server render and the first client render agree. Only the
 * post-hydration drift is random — matching the target's live behaviour.
 */
function hashSlug(s: string) {
  let t = 0;
  for (let i = 0; i < s.length; i++) t = (t * 31 + s.charCodeAt(i)) >>> 0;
  return t;
}

function deriveStock(slug: string) {
  const t = hashSlug(slug);
  return { stock: 3 + (t % 9), baseViewers: 4 + (t % 12) };
}

export function ProductCard({ product }: { product: PlantNestProduct }) {
  const { add } = useCart();
  const { stock, baseViewers } = deriveStock(product.slug);
  const [viewers, setViewers] = useState(baseViewers);

  useEffect(() => {
    const id = window.setInterval(
      () => {
        setViewers((v) => {
          const next = v + (Math.random() < 0.5 ? -1 : 1);
          return next < 3 ? 3 : next > baseViewers + 6 ? baseViewers + 6 : next;
        });
      },
      4000 + Math.random() * 3000,
    );
    return () => window.clearInterval(id);
  }, [baseViewers]);

  const lowStock = stock <= 6;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-secondary/40"
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
            {product.badge}
          </span>
        )}
        {product.badge === "Trending" && (
          <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
            <TrendingUp className="h-3 w-3" /> Hot
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-[10px] font-medium text-white">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3" /> {viewers} viewing
          </span>
          {lowStock && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/90 px-2 py-0.5 font-semibold">
              <Flame className="h-3 w-3" /> Only {stock} left
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-primary">
          {product.category}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-1 font-display text-base font-semibold text-foreground hover:text-primary"
        >
          {product.name}
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.short}</p>
        <p className="mt-3 text-lg font-bold text-foreground">{formatPrice(product.price)}</p>
        <div className="mt-4 flex gap-2">
          <Button size="sm" className="flex-1 gap-1.5" onClick={() => add(product.slug)}>
            <ShoppingBag className="h-4 w-4" /> Buy
          </Button>
          <a
            href={waUrl(`Hello, I'd like to order: ${product.name} (${formatPrice(product.price)}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              size="sm"
              variant="outline"
              className="w-full gap-1.5 border-whatsapp/40 text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
