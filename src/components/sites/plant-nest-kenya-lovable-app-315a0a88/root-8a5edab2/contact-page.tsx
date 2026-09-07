"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "./button";
import { SITE_NAME, WHATSAPP_DISPLAY, waUrl } from "./site-data";

const CONTACT_EMAIL = "info@greenafricafarm.com";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: WHATSAPP_DISPLAY,
    href: "tel:+251932318151",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: waUrl(`Hello ${SITE_NAME}!`),
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Nursery & Farm",
    value: "Addis Ababa & Regional Distribution Centers, Ethiopia",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Open",
    value: "Mon – Sat, 7am – 6pm",
    href: undefined,
  },
] as const;

export function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Contact</p>
        <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">
          Let&apos;s grow together
        </h1>
        <p className="mt-3 text-muted-foreground">
          Whether you need farming advice or want to place an order, we&apos;re a call away.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                {content}
              </div>
            );
          })}

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid h-56 place-items-center bg-secondary/50 text-sm text-muted-foreground">
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 font-semibold text-foreground">Our Locations</p>
                <p>Addis Ababa, Bishoftu, Hawassa &amp; Delivery Across Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft"
        >
          <h2 className="font-display text-xl font-bold">Send us a message</h2>
          <div className="mt-5 space-y-3">
            <input
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
              placeholder="Email"
              type="email"
            />
            <input
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
              placeholder="WhatsApp / phone"
            />
            <textarea
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
              rows={5}
              placeholder="Tell us what you need…"
            />
            <Button size="lg" className="w-full">
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
