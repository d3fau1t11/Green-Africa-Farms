import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const OG_IMAGE = "/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/images/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${SITE_NAME} — Premium Grafted Fruit Seedlings in Ethiopia`,
  description:
    "Buy certified Hass avocado, Wambugu apple, citrus, mango & passion fruit seedlings. Nationwide delivery in Ethiopia. Order via WhatsApp today.",
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Premium Fruit Seedlings`,
    description: "Certified grafted fruit seedlings delivered across Ethiopia.",
    url: "/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Premium Grafted Fruit Seedlings in Ethiopia`,
    description:
      "Green Africa General Trading PLC — premium fruit seedlings for farmers across Ethiopia.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
