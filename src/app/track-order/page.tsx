import type { Metadata } from "next";

import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";
import { TrackOrderPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/track-order-page";

export const metadata: Metadata = {
  title: `Track Your Order — ${SITE_NAME}`,
  description: `Check the status of your ${SITE_NAME} seedling order.`,
  openGraph: {
    title: `Track Your Order — ${SITE_NAME}`,
    description: "Track your seedling delivery.",
  },
};

export default function TrackOrderRoute() {
  return (
    <SiteShell>
      <TrackOrderPage />
    </SiteShell>
  );
}
