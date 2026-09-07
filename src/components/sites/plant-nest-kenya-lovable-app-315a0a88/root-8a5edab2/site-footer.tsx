"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

import { FacebookIcon, InstagramIcon, TiktokIcon } from "./brand-icons";
import { SITE_NAME, WHATSAPP_DISPLAY } from "./site-data";

const SHOP_LINKS = ["All Seedlings", "Avocado", "Apple", "Citrus", "Mango"];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Farming Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Track Order", href: "/track-order" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1B5Jyuvhjg/?mibextid=wwXIfr",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/plantnestke?igsh=aHVtcXV6bGtuY2Ry&utm_source=qr",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@plantnestke?_r=1&_t=ZS-96rd2OzK6W9",
    Icon: TiktokIcon,
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border shadow-soft">
                <Image
                  src="/icon.png"
                  alt={SITE_NAME}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-display text-base font-bold leading-tight sm:text-lg">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Premium certified grafted fruit seedlings delivered across Ethiopia.
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {SHOP_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/shop" className="hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Addis Ababa &amp; Bishoftu Nurseries — Ethiopia</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <span>{WHATSAPP_DISPLAY}</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <span>info@greenafricafarm.com</span>
              </li>
            </ul>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Made with 🌱 in Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
