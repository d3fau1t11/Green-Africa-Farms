import { Award, Heart, Leaf, Users } from "lucide-react";

import { SITE_NAME } from "./site-data";

const STATS = [
  { icon: Leaf, label: "Seedlings sold", value: "120K+" },
  { icon: Users, label: "Happy farmers", value: "5,000+" },
  { icon: Award, label: "Years experience", value: "10+" },
  { icon: Heart, label: "Regions served", value: "All Regions" },
] as const;

export function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-soft py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium text-primary">About Us</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Growing Ethiopia&apos;s fruit farmers, one seedling at a time
          </h1>
          <p className="mt-5 text-muted-foreground">
            {SITE_NAME} is a dedicated commercial nursery and farm in Ethiopia. We graft, grow,
            and deliver premium fruit seedlings to farmers, investors and beginners building
            profitable fruit farms across Ethiopia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <Icon className="mx-auto h-7 w-7 text-primary" />
              <p className="mt-3 font-display text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6 text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">Our story</h2>
          <p>
            What started with a passion for high-yield agriculture has grown into one of Ethiopia&apos;s
            most trusted suppliers of grafted fruit seedlings. We saw too many farmers losing money
            to weak, ungrafted seedlings — and decided to do something about it.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">Our promise</h2>
          <p>
            Every seedling that leaves our nursery is healthy, properly grafted, and ready to thrive.
            We back every order with free agronomy support so you never feel alone on your farming
            journey.
          </p>
        </div>
      </section>
    </div>
  );
}
