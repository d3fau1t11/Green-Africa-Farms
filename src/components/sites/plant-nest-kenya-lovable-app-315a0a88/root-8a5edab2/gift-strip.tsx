import Link from "next/link";

import { GUIDE_PROMO_VALUE, formatPrice } from "./site-data";

export function GiftStrip() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 text-center text-xs font-semibold sm:text-sm">
          <span className="text-lg">🎁</span>
          <span>
            Free Fruit Farming Starter Guide Worth {formatPrice(GUIDE_PROMO_VALUE)} Included With
            Every Order
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#free-guide"
            className="rounded-md bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur hover:bg-white/25"
          >
            Get the Free Guide
          </a>
          <Link href="/shop">
            <span className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:bg-white/90">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
