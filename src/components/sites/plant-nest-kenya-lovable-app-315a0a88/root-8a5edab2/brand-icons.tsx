/**
 * Brand glyphs used by the Plant Nest KE clone's footer.
 *
 * lucide-react v1 dropped its brand icons, and the target never had a TikTok
 * glyph to begin with. These reproduce the exact path data rendered by the
 * target (`lucide-facebook` / `lucide-instagram`) plus the target's
 * hand-written TikTok mark. The `lucide lucide-<name>` classes are carried over
 * too, so the emitted markup matches the target attribute-for-attribute.
 */

import { cn } from "@/lib/utils";

interface BrandIconProps {
  className?: string;
}

const BASE_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function FacebookIcon({ className }: BrandIconProps) {
  return (
    <svg {...BASE_PROPS} className={cn("lucide lucide-facebook", className)}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ className }: BrandIconProps) {
  return (
    <svg {...BASE_PROPS} className={cn("lucide lucide-instagram", className)}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function TiktokIcon({ className }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.3 0 .59.05.87.14v-3.5a6.37 6.37 0 0 0-.87-.06A6.34 6.34 0 0 0 2.5 15.83a6.34 6.34 0 0 0 6.36 6.34 6.37 6.37 0 0 0 6.36-6.34V8.83a8.2 8.2 0 0 0 4.77 1.52v-3.5c-.01-.09-.04-.17-.04-.16z" />
    </svg>
  );
}
