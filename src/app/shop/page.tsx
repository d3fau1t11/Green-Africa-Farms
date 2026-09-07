import type { Metadata } from "next";

import { ShopPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/shop-page";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export const metadata: Metadata = {
  title: `Shop Fruit Seedlings — ${SITE_NAME}`,
  description:
    "Browse our full range of grafted fruit seedlings: avocado, apple, citrus, mango, passion and exotic varieties.",
  openGraph: {
    title: `Shop Fruit Seedlings — ${SITE_NAME}`,
    description: "Browse our full range of grafted fruit seedlings.",
  },
};

export default function ShopRoute() {
  return (
    <SiteShell>
      <ShopPage />
    </SiteShell>
  );
}
