import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";
import { ASSET_BASE, SITE_NAME, waUrl } from "./site-data";

/**
 * Full-bleed hero. The photo and its gradient scrim are two siblings inside a
 * `-z-10` layer — the scrim is not a background on the image, so don't collapse
 * them.
 */
export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={`${ASSET_BASE}/hero-orchard.jpg`}
          alt="Lush Ethiopian fruit orchard at golden hour"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/55 to-primary/40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trusted by 5,000+ Ethiopian farmers
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Premium Grafted Fruit Seedlings Delivered Across Ethiopia
          </h1>
          <p className="mt-5 text-base text-white/85 sm:text-lg">
            Start your profitable fruit farming journey with high-quality certified seedlings from{" "}
            {SITE_NAME} — straight from our nursery to your farm across Ethiopia.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/shop">
              <Button
                size="lg"
                className="gap-2 bg-background text-foreground hover:bg-background/90"
              >
                Shop Seedlings <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href={waUrl(`Hello ${SITE_NAME}, I'd like to order seedlings.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
