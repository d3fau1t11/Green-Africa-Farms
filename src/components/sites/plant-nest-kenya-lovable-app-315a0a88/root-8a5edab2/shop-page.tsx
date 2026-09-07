"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { PlantNestProduct } from "@/types/plant-nest-ke";

import { ProductCard } from "./product-card";
import { categories, products } from "./site-data";

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

/** Matches the target's first-word chip labels (e.g. "Macadamia" from "Macadamia & Nuts"). */
function chipLabel(name: string) {
  return name.split(" ")[0] ?? name;
}

function matchesCategory(product: PlantNestProduct, filter: string) {
  if (filter === "all") return true;
  if (filter === "macadamia") return product.category === "Nuts";
  return product.category.toLowerCase() === filter;
}

export function ShopPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      products.filter((product) => {
        const matchesQuery = query
          ? product.name.toLowerCase().includes(query.toLowerCase())
          : true;
        return matchesQuery && matchesCategory(product, filter);
      }),
    [query, filter],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Our nursery</p>
        <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">Shop Fruit Seedlings</h1>
        <p className="mt-3 text-muted-foreground">
          All seedlings are grafted, certified, and ready to be planted on your farm.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search seedlings…"
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterChip>
          {categories.map((category) => {
            const label = chipLabel(category.name);
            const value = label.toLowerCase();
            return (
              <FilterChip
                key={category.slug}
                active={filter === value}
                onClick={() => setFilter(value)}
              >
                {category.emoji} {label}
              </FilterChip>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">No seedlings match your search.</p>
      )}
    </div>
  );
}
