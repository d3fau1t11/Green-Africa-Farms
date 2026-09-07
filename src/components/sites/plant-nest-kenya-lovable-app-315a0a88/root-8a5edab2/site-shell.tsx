import { CartProvider } from "./cart-provider";
import { FlashSaleBanner } from "./flash-sale-banner";
import { FloatingWhatsapp } from "./floating-whatsapp";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/** Shared chrome for plant-nest-kenya.lovable.app routes. */
export function SiteShell({
  children,
  overlays,
}: {
  children: React.ReactNode;
  overlays?: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <FlashSaleBanner />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>

      <FloatingWhatsapp />
      {overlays}
    </CartProvider>
  );
}
