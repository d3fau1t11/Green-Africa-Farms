"use client";

import { Menu, Search, ShoppingBag, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { useCart } from "./cart-provider";
import { SITE_NAME, navLinks } from "./site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border shadow-soft">
            <Image
              src="/icon.png"
              alt={SITE_NAME}
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="font-display max-w-[12rem] text-sm font-bold leading-tight tracking-tight sm:max-w-none sm:text-base lg:text-lg">
            Green Africa <span className="text-primary">Farm</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === to ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/shop" className="hidden sm:inline-flex">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/track-order" className="hidden sm:inline-flex">
            <Button variant="outline" size="sm">
              Track Order
            </Button>
          </Link>
          <Link href="/cart" className="relative" aria-label="Cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {count > 0 && (
              <span className="pointer-events-none absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <Link href="/shop" className="hidden sm:inline-flex">
            <Button size="sm" className="gap-1.5">
              <ShoppingBag className="h-4 w-4" /> Shop
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                href={to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
