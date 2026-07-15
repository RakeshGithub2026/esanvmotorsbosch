import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { GALLERY } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ESANV Motors Workshop | Harur, Dharmapuri" },
      {
        name: "description",
        content:
          "Photos of the ESANV Motors workshop, service bays, accessories store, coatings, detailing and customer deliveries in Harur, Dharmapuri.",
      },
      { property: "og:title", content: "Gallery — ESANV Motors" },
      { property: "og:description", content: "Inside the ESANV Motors workshop and accessories store." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://esanvmotorsbosch.lovable.app/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://esanvmotorsbosch.lovable.app/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-card/30 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Gallery"
            title="Our Workshop & Company Photos"
            desc="A look inside our workshop, service bay, accessories store and customer deliveries."
          />
        </div>
      </section>
      <section className="container-page py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <figure key={g.title} className="group relative overflow-hidden rounded-2xl border border-border">
              <img decoding="async" src={g.img} alt={g.title} loading="lazy" width={800} height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4 font-display font-bold">
                {g.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}