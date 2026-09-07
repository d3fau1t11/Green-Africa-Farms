import { features } from "./site-data";

export function FeatureStrip() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
