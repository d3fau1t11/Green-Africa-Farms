"use client";

import { Download } from "lucide-react";

import { Button } from "./button";
import { GUIDE_PDF, SITE_NAME, waUrl, whyPoints } from "./site-data";

export function FreeGuideSection() {
  /**
   * Ported from the target: triggers a synthetic download, then opens a
   * prefilled WhatsApp thread and clears the form. `email` is collected and
   * required but never used — the target does the same.
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const a = document.createElement("a");
    a.href = GUIDE_PDF;
    a.download = "Plant-Nest-KE-Fruit-Farming-Starter-Guide.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    const message =
      `Hello ${SITE_NAME}, I just downloaded the Free Fruit Farming Starter Guide.\n\n` +
      `Name: ${name}\nPhone: ${phone}\n\n` +
      "I'd love some advice on what to plant.";
    window.open(waUrl(message), "_blank", "noopener");
    form.reset();
  }

  return (
    <section id="free-guide" className="bg-gradient-soft py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-primary">Why {SITE_NAME}</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">
            Ethiopia&apos;s most trusted nursery for fruit farmers
          </h2>
          <p className="mt-4 text-muted-foreground">
            We grow, graft and deliver — every seedling is hand-selected from our nursery
            so you start farming with confidence across Ethiopia.
          </p>
          <ul className="mt-6 space-y-3">
            {whyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  ✓
                </span>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-soft">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Download className="h-3.5 w-3.5" /> Free Download
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold">
            Free Fruit Farming Starter Guide
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A 25-page PDF with everything you need — site selection, spacing, irrigation, pest
            control &amp; market access. Built for Ethiopian conditions.
          </p>
          <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="WhatsApp number (e.g. +251 912 345 678)"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
            />
            <Button type="submit" className="w-full" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download the guide (PDF)
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Or{" "}
              <a href={GUIDE_PDF} className="underline hover:text-primary" download>
                download directly
              </a>{" "}
              — no signup needed.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
