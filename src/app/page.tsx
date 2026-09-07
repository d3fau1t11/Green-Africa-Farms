import { BestSellersSection } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/best-sellers-section";
import { BundleDealToast } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/bundle-deal-toast";
import { CategoriesSection } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/categories-section";
import { ExitIntentModal } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/exit-intent-modal";
import { FeatureStrip } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/feature-strip";
import { FinalCtaSection } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/final-cta-section";
import { FreeGuideSection } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/free-guide-section";
import { GiftStrip } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/gift-strip";
import { HeroSection } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/hero-section";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";
import { TestimonialsSection } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/testimonials-section";

/**
 * plant-nest-kenya.lovable.app/ — home route.
 *
 * Shell order matches the target's document flow: the flash banner precedes the
 * header, so both being `sticky top-0 z-40` means the banner scrolls away first
 * and the header then pins.
 */
export default function Home() {
  return (
    <SiteShell
      overlays={
        <>
          <BundleDealToast />
          <ExitIntentModal />
        </>
      }
    >
      <HeroSection />
      <GiftStrip />
      <FeatureStrip />
      <CategoriesSection />
      <BestSellersSection />
      <FreeGuideSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </SiteShell>
  );
}
