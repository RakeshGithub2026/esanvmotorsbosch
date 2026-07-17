import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Phone, ShoppingBag, ShieldCheck, Wrench, Award, Sparkles,
  Users, ScanLine, Truck, FileCheck, Layers, Star, CheckCircle2,
} from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { ReviewForm } from "@/components/site/ReviewForm";
import heroBg3d from "@/assets/hero-bg-3d.webp";
import heroCar640 from "@/assets/hero-car-640.webp";
import heroCar960 from "@/assets/hero-car-960.webp";
import heroCar1280 from "@/assets/hero-car.webp";
import {
  CONTACT, IMAGES, WHY_US, SERVICES, ACCESSORIES, SHOWROOM, BRANDS,
  GALLERY, REVIEWS, COATINGS, LOGOS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESANV Motors — Bosch Car Service Partner in Harur, Dharmapuri" },
      {
        name: "description",
        content:
          "ESANV Motors, a Bosch Car Service partner in Harur, Dharmapuri, offers 50+ multi-brand car services including diagnostics, bodyshop, painting, ceramic coating, PPF and genuine accessories.",
      },
      { property: "og:title", content: "ESANV Motors — Bosch Car Service Partner in Harur, Dharmapuri" },
      { property: "og:description", content: "50+ multi-brand car services, diagnostics, bodyshop, coatings and genuine accessories — trusted Bosch Car Service partner in Dharmapuri." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://esanvmotorsbosch.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://esanvmotorsbosch.lovable.app/" }],
  }),
  component: Index,
});

const WHY_ICONS = [Wrench, Award, Sparkles, ScanLine, ShieldCheck, Truck, FileCheck, Layers, Users];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${heroBg3d})` }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,oklch(0.83_0.25_140/0.16),transparent)]" />
        <div className="container-page relative grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 uppercase tracking-widest text-primary">
                Partner with Bosch Car Service
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" /> Open Now
              </span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1">
                Gopinathampatti Koot Rd, Harur
              </span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img decoding="async" src={LOGOS.esanv} alt="ESANV MOTORS logo" width={160} height={160}
                className="h-28 w-28 rounded-2xl border border-border bg-black object-contain p-1.5 sm:h-36 sm:w-36" />
              <img decoding="async" src={LOGOS.bosch} alt="Bosch Car Service logo" width={140} height={140}
                className="h-24 w-24 rounded-2xl object-contain sm:h-32 sm:w-32" />
            </div>
            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] sm:text-7xl">
              ESANV <span className="text-gradient-red">MOTORS</span>
            </h1>
            <p className="mt-4 text-lg font-semibold">
              Partner with <span className="text-primary">BOSCH CAR SERVICE</span>
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Your trusted multi-brand car service center on Gopinathampatti Koot Road,
              near Harur, Dharmapuri District. Expert
              car service, diagnostics, bodyshop works, wheel alignment, water wash,
              accessories, seat covers, sunfilms and complete car care for all major brands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Book a Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT.store}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70"
              >
                <ShoppingBag className="h-4 w-4" /> Explore Accessories
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl glow-red">
              <img
                src={IMAGES.heroCar}
                srcSet={`${heroCar640} 640w, ${heroCar960} 960w, ${heroCar1280} 1280w`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Premium luxury SUV at the ESANV Motors workshop"
                width={1280}
                height={960}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-4 top-4 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Diagnostic</p>
              <p className="font-display text-lg font-bold text-primary">ONLINE</p>
            </div>
            <div className="absolute bottom-4 left-4 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Brands</p>
              <p className="font-display text-lg font-bold">All Covered</p>
            </div>
            <div className="absolute bottom-4 right-4 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Services</p>
              <p className="font-display text-lg font-bold text-primary">50+</p>
            </div>
          </div>
        </div>

        <div className="border-y border-primary/30 bg-card">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-xs font-semibold uppercase tracking-widest text-foreground">
            {["Partner with Bosch", "50+ Services", "All Car Brands", "Genuine Accessories", "Bodyshop & Coatings"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="About ESANV Motors"
          title="Complete Car Care Under One Roof"
          desc="ESANV Motors is a professional multi-brand car service center and accessories destination on Gopinathampatti Koot Road, near Harur, Dharmapuri District – 636905. As a trusted Bosch Car Service partner, we deliver high-quality vehicle care with advanced tools, trained technicians and genuine products."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "BOSCH Partner", d: "Trusted Bosch Car Service partner." },
            { t: "50+ Services", d: "Complete car care menu." },
            { t: "All Brands", d: "Every make, every model." },
            { t: "Expert Technicians", d: "Trained multi-brand team." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-border bg-card/30 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Engineered for Every Drive"
            desc="Nine reasons drivers across Harur and Dharmapuri trust ESANV Motors with their vehicles."
            center
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <div key={w.title} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="50+ Professional Car Services"
          desc="Complete car care for all major brands with quality workmanship, modern equipment and customer-focused service."
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.name} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img decoding="async" src={s.img} alt={s.name} loading="lazy" width={800} height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
            View all 50+ services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Online store */}
      <section className="border-y border-border bg-card/30 py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Online Store"
              title="Shop Premium Car Accessories Online"
              desc="Seat covers, sunfilms, floor mats, steering covers, car perfumes, infotainment systems, speakers, LED lights, body covers, cleaning products and more. Contact us for purchase or installation."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONTACT.store} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:scale-[1.03]">
                <ShoppingBag className="h-4 w-4" /> Shop Accessories
              </a>
              <a href={CONTACT.store} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70">
                Visit Online Store
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ACCESSORIES.map((a) => (
              <article key={a.name} className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="aspect-square overflow-hidden">
                  <img decoding="async" src={a.img} alt={a.name} loading="lazy" width={400} height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold">{a.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coatings */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Premium Coatings"
          title="Ceramic, Graphene & PPF Protection"
          desc="Long-lasting paint protection and gloss — each solution tailored to your car and budget."
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COATINGS.map((c) => (
            <article key={c.name} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img decoding="async" src={c.img} alt={c.name} loading="lazy" width={800} height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Showroom */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Accessories Showroom"
          title="Premium Accessories & Modifications"
          desc="Seat covers, sunfilm, alloy wheels, facelifts and full car styling — curated for every model."
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWROOM.map((s) => (
            <article key={s.name} className="group relative overflow-hidden rounded-2xl border border-border">
              <img decoding="async" src={s.img} alt={s.name} loading="lazy" width={800} height={600}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">{s.tag}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-y border-border bg-card/30 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Brands Covered"
            title="All Car Brands Covered"
            desc="We service and maintain all major car brands with expert care and proper tools."
            center
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {BRANDS.map((b) => (
              <div key={b.name} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
                <div className="grid h-16 w-16 place-items-center rounded-xl bg-white p-2">
                  <img decoding="async" src={b.logo} alt={`${b.name} logo`} loading="lazy" width={56} height={56}
                    className="max-h-12 max-w-12 object-contain" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Workshop & Company Photos"
          desc="A look inside our workshop, service bay, accessories store and customer deliveries."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.slice(0, 6).map((g) => (
            <figure key={g.title} className="group relative overflow-hidden rounded-2xl border border-border">
              <img decoding="async" src={g.img} alt={g.title} loading="lazy" width={800} height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4 font-display font-bold">
                {g.title}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70">
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border bg-card/30 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Our Drivers Say"
            desc="Share your experience — your review will be sent to us on WhatsApp and shown here."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ReviewForm />
            <div className="space-y-4">
              {REVIEWS.map((r) => (
                <blockquote key={r.name} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-3 text-sm">“{r.text}”</p>
                  <footer className="mt-4 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                      {r.name[0]}
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold">{r.name}</span>
                      <span className="text-muted-foreground">{r.city}</span>
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center glow-red">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.83_0.25_140/0.18),transparent)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to Book Your Service?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Send us your details — we'll confirm your slot on WhatsApp instantly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:scale-[1.03]">
                Book a Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70">
                <Phone className="h-4 w-4" /> Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
