import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { SERVICES, EXTRA_SERVICES } from "@/lib/site-data";

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
    ],
  }),
  component: Services,
});

function Services() {
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.name} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" width={800} height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
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
    </SiteLayout>
  );
}