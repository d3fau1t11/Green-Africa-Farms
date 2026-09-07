import type { Metadata } from "next";

import { CartPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/cart-page";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export const metadata: Metadata = {
  title: `Your Cart — ${SITE_NAME}`,
  description: "Review your seedling order and check out instantly via WhatsApp.",
  openGraph: {
    title: `Your Cart — ${SITE_NAME}`,
    description: "Review your seedling order and check out instantly via WhatsApp.",
  },
};

export default function CartRoute() {
  return (
    <SiteShell>
      <CartPage />
    </SiteShell>
  );
}
