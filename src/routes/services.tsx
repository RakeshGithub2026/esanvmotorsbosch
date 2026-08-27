import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Wrench } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { BeforeAfterGrid } from "@/components/site/BeforeAfter";
import { SERVICE_CATEGORIES, EXTRA_SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Car Services — ESANV Motors | Bosch Car Service, Harur" },
      {
        name: "description",
        content:
          "50+ professional car services at ESANV Motors: general service, diagnostics, mechanical, painting, wheel alignment, coatings, AC service and more for all brands.",
      },
      { property: "og:title", content: "Car Services — ESANV Motors" },
      { property: "og:description", content: "50+ professional multi-brand car services in Harur, Dharmapuri." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://esanvmotorsbosch.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://esanvmotorsbosch.lovable.app/services" }],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);
  const current = SERVICE_CATEGORIES.find((c) => c.id === active) ?? SERVICE_CATEGORIES[0];

  return (
    <SiteLayout>
      <section className="border-b border-border bg-card/30 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="50+ Professional Car Services"
            desc="Complete car care solutions for all major car brands with quality workmanship, modern equipment and customer-focused service."
          />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                aria-pressed={isActive}
                className={cn(
                  "group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all",
                  isActive ? "border-primary glow-primary" : "border-border hover:border-primary/50",
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    decoding="async"
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5">
                  <h2 className="font-display text-lg font-bold">{c.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">{current.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{current.tagline}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {current.items.map((s) => (
              <div key={s.name} className="flex gap-3 rounded-xl border border-border bg-background/60 p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold">{s.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRA_SERVICES.map((s) => (
            <div key={s.name} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:scale-[1.03]">
            Book a Service <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before / After"
            title="Real Transformations"
            desc="Drag the slider on each photo to see the difference our painting, tinkering, headlight restoration, coating and detailing work makes."
          />
          <div className="mt-10">
            <BeforeAfterGrid />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}