import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, Phone } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { CONTACT } from "@/lib/site-data";
import page1 from "@/assets/seat-covers/catalogue-page-1.webp.asset.json";
import page2 from "@/assets/seat-covers/catalogue-page-2.webp.asset.json";
import page3 from "@/assets/seat-covers/catalogue-page-3.webp.asset.json";
import page4 from "@/assets/seat-covers/catalogue-page-4.webp.asset.json";
import page5 from "@/assets/seat-covers/catalogue-page-5.webp.asset.json";
import page6 from "@/assets/seat-covers/catalogue-page-6.webp.asset.json";
import page7 from "@/assets/seat-covers/catalogue-page-7.webp.asset.json";

const PAGES = [
  { img: page1.url, models: "M-17 to M-24", label: "Models 17 – 24" },
  { img: page2.url, models: "M-25 to M-32", label: "Models 25 – 32" },
  { img: page3.url, models: "M-33 to M-40", label: "Models 33 – 40" },
  { img: page4.url, models: "M-49 to M-56", label: "Models 49 – 56" },
  { img: page5.url, models: "M-57 to M-64", label: "Models 57 – 64" },
  { img: page6.url, models: "M-65 to M-70", label: "Models 65 – 70" },
  { img: page7.url, models: "M-71 to M-74", label: "Models 71 – 74" },
];

export const Route = createFileRoute("/seat-covers")({
  head: () => ({
    meta: [
      { title: "Seat Cover Catalogue — ESANV Motors | Custom Leather Look Seat Covers" },
      {
        name: "description",
        content:
          "Browse the complete ESANV Motors seat cover catalogue — 40+ premium leather-look designs (M-17 to M-74) custom-fit for every car brand. Book your fitment in Harur, Dharmapuri.",
      },
      { property: "og:title", content: "Seat Cover Catalogue — ESANV Motors" },
      { property: "og:description", content: "40+ premium leather-look seat cover designs, custom-fit for every car brand." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://esanvmotorsbosch.lovable.app/seat-covers" },
      { property: "og:image", content: page1.url },
    ],
    links: [{ rel: "canonical", href: "https://esanvmotorsbosch.lovable.app/seat-covers" }],
  }),
  component: SeatCovers,
});

function SeatCovers() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-card/30 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Seat Cover Catalogue"
            title="Modern Leather-Look Seat Covers"
            desc="Browse our full catalogue of premium seat cover designs — custom-fit for every make and model. Tap a design and contact us to book your fitment."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi ESANV Motors, I'd like to enquire about seat covers.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:scale-[1.03]"
            >
              <ShoppingBag className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70"
            >
              <Phone className="h-4 w-4" /> Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {PAGES.map((p) => (
            <figure
              key={p.models}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={`ESANV Motors seat cover designs ${p.models}`}
                  loading="lazy"
                  decoding="async"
                  width={1754}
                  height={1240}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="flex items-center justify-between p-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Catalogue
                  </p>
                  <h3 className="font-display text-lg font-bold">{p.label}</h3>
                </div>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi ESANV Motors, I'd like to enquire about seat cover ${p.models}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:scale-[1.03]"
                >
                  Enquire <ArrowRight className="h-4 w-4" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center">
          <h3 className="font-display text-xl font-bold">Can't find the design you like?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Visit our accessories showroom in Harur — we stock more designs, fabrics and custom
            stitching options. Doorstep fitment available across Dharmapuri.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:scale-[1.03]"
            >
              Book a Fitment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
