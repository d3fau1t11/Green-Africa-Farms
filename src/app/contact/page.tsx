import type { Metadata } from "next";

import { ContactPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/contact-page";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export const metadata: Metadata = {
  title: `Contact ${SITE_NAME} — Farm & Nursery in Ethiopia`,
  description: `Get in touch with ${SITE_NAME} — call or WhatsApp us. Visit our nurseries in Addis Ababa and Bishoftu or order delivery across Ethiopia.`,
  openGraph: {
    title: `Contact ${SITE_NAME}`,
    description: "We're here to help with your fruit farming journey.",
  },
};

export default function ContactRoute() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
