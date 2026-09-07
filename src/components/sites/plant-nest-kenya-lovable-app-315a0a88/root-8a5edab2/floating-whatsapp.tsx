import { MessageCircle } from "lucide-react";

import { SITE_NAME, waUrl } from "./site-data";

export function FloatingWhatsapp() {
  return (
    <a
      href={waUrl(`Hello ${SITE_NAME}, I'd like to order seedlings.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-glow transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
