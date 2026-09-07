import Link from "next/link";

import { Button } from "./button";

/** No `py` on the section — the testimonials section's `py-20` supplies the gap above. */
export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground shadow-glow sm:p-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Ready to Start Fruit Farming?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Order quality grafted seedlings today and start building your fruit farm income.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/shop">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Shop Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-foreground"
            >
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
