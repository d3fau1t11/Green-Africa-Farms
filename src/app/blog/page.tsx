import type { Metadata } from "next";

import { BlogPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/blog-page";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export const metadata: Metadata = {
  title: `Fruit Farming Blog — ${SITE_NAME}`,
  description:
    "Practical Ethiopia-specific guides on fruit farming: Hass avocado, Wambugu apple, passion fruit, dragon fruit, strawberries, and more.",
  openGraph: {
    title: `Fruit Farming Blog — ${SITE_NAME}`,
    description: "Tips, guides, and case studies from Ethiopia's most trusted fruit nursery.",
  },
};

export default function BlogRoute() {
  return (
    <SiteShell>
      <BlogPage />
    </SiteShell>
  );
}
