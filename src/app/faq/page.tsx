import type { Metadata } from "next";

import { FaqPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/faq-page";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export const metadata: Metadata = {
  title: `FAQ — ${SITE_NAME}`,
  description:
    "Answers to common questions about ordering, delivery, planting, and aftercare of fruit seedlings in Ethiopia.",
  openGraph: {
    title: `FAQ — ${SITE_NAME}`,
    description: "Common questions about fruit seedlings, delivery and planting.",
  },
};

export default function FaqRoute() {
  return (
    <SiteShell>
      <FaqPage />
    </SiteShell>
  );
}
