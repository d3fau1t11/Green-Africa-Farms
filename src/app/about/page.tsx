import type { Metadata } from "next";

import { AboutPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/about-page";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export const metadata: Metadata = {
  title: `About ${SITE_NAME} — Our Story & Mission`,
  description: `${SITE_NAME} is an Ethiopian nursery supplying certified grafted fruit seedlings to farmers across Ethiopia.`,
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: `${SITE_NAME} is an Ethiopian nursery supplying certified grafted fruit seedlings to farmers across Ethiopia.`,
  },
};

export default function AboutRoute() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
