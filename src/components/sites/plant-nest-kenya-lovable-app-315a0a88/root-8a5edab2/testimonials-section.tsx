import { Star } from "lucide-react";

import { testimonials } from "./site-data";

/** Testimonial cards have no hover effect — unlike product cards and category tiles. */
export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-primary">What farmers say</p>
        <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">
          Loved by farmers across Ethiopia
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex gap-0.5 text-yellow-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">&quot;{t.text}&quot;</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
