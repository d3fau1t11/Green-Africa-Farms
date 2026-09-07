import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const FAQ_ITEMS = [
  {
    q: "Do you deliver across Ethiopia?",
    a: "Yes. We deliver across all regions of Ethiopia via trusted courier and transport services — typically within 2–5 working days.",
  },
  {
    q: "Are your seedlings grafted and certified?",
    a: "Yes. Every seedling is grafted at our specialized nursery and certified for health and authenticity.",
  },
  {
    q: "How do I pay?",
    a: "We accept M-Pesa / Cash on delivery and bank transfer.",
  },
  {
    q: "What is your survival rate guarantee?",
    a: "98% of our seedlings thrive when planting guidelines are followed. We replace verified DOA seedlings free of charge.",
  },
  {
    q: "Can you help me plan my orchard?",
    a: "Absolutely. Our agronomy team offers free advice — just call or WhatsApp us.",
  },
  {
    q: "How long until my trees fruit?",
    a: "Most grafted varieties begin fruiting in 18 months to 3 years depending on the species and conditions.",
  },
] as const;

export function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-primary">FAQ</p>
      <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">
        Frequently asked questions
      </h1>
      <p className="mt-3 text-muted-foreground">
        Quick answers to what farmers ask us most often.
      </p>

      <Accordion type="single" collapsible className="mt-8">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={item.q} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
