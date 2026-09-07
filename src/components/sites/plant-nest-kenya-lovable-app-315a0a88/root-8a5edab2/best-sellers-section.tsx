import Link from "next/link";

import { ProductCard } from "./product-card";
import { products } from "./site-data";

/** 6 products in a 4-column grid at `lg` → 4 + 2. Faithful to the target. */
export function BestSellersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary">Top picks this season</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">
            Best Selling Seedlings
          </h2>
        </div>
        <Link href="/shop" className="text-sm font-medium text-primary hover:underline">
          View all →
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 6).map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
