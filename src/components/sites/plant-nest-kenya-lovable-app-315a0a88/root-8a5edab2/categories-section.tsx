import Link from "next/link";

import { categories } from "./site-data";

/**
 * 8 tiles in a 6-column grid at `lg`, so the second row holds 2. That's the
 * target's layout — don't "fix" it.
 */
export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary">Browse by category</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Featured Categories</h2>
        </div>
        <Link
          href="/shop"
          className="hidden text-sm font-medium text-primary hover:underline sm:inline"
        >
          View all →
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href="/shop"
            className="group rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card"
          >
            <div className="text-3xl">{c.emoji}</div>
            <p className="mt-2 text-sm font-semibold">{c.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
