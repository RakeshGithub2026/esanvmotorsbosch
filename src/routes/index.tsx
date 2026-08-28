import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Phone, ShoppingBag, ShieldCheck, Wrench, Award, Sparkles,
  Users, ScanLine, Truck, FileCheck, Layers, Star, CheckCircle2,
  ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2,
} from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { ReviewForm } from "@/components/site/ReviewForm";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "ESANV Motors",
          url: "https://esanvmotorsbosch.lovable.app",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(REVIEWS.length),
          },
          review: REVIEWS.map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: r.name },
            reviewBody: r.text,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const WHY_ICONS = [Wrench, Award, Sparkles, ScanLine, ShieldCheck, Truck, FileCheck, Layers, Users];

const VIEW_RESET = { rx: 4, ry: -8, scale: 1 };
const clampNum = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function HeroViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState(VIEW_RESET);
  const [dragging, setDragging] = useState(false);
  const [glare, setGlare] = useState({ x: 70, y: 30, on: false });
  const [nativeFs, setNativeFs] = useState(false);
  const [fallbackFs, setFallbackFs] = useState(false);
  const fullscreen = nativeFs || fallbackFs;
  const viewRef = useRef(view);
  viewRef.current = view;
  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const dragRef = useRef<{
    startX: number;
    startY: number;
    startRx: number;
    startRy: number;
    pinchDist: number;
    startScale: number;
  } | null>(null);

  const reset = () => setView(VIEW_RESET);
  const zoomBy = (factor: number) =>
    setView((v) => ({ ...v, scale: clampNum(v.scale * factor, 1, 2.5) }));

  // Native non-passive wheel listener — React's onWheel is passive, so
  // preventDefault() there is ignored and the page would scroll behind the card.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const factor = Math.exp(-dy * 0.002);
      setView((v) => ({ ...v, scale: clampNum(v.scale * factor, 1, 2.5) }));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Track native fullscreen changes (Esc usually exits natively, but also
  // handle it explicitly so Escape-to-exit works in every environment)
  useEffect(() => {
    const onChange = () => setNativeFs(document.fullscreenElement === shellRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!nativeFs) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") void document.exitFullscreen().catch(() => {});
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [nativeFs]);

  // Fallback fullscreen (browsers without element fullscreen, e.g. iOS Safari):
  // Escape-to-exit + lock page scroll behind the overlay.
  useEffect(() => {
    if (!fallbackFs) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFallbackFs(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [fallbackFs]);

  const toggleFullscreen = async () => {
    if (nativeFs) {
      await document.exitFullscreen().catch(() => {});
      return;
    }
    if (fallbackFs) {
      setFallbackFs(false);
      return;
    }
    if (shellRef.current?.requestFullscreen) {
      try {
        await shellRef.current.requestFullscreen();
        return;
      } catch {
        // fall through to overlay mode
      }
    }
    setFallbackFs(true);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointersRef.current.size === 1) {
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startRx: viewRef.current.rx,
        startRy: viewRef.current.ry,
        pinchDist: 0,
        startScale: viewRef.current.scale,
      };
      setDragging(true);
    } else if (pointersRef.current.size === 2 && dragRef.current) {
      const [a, b] = [...pointersRef.current.values()];
      dragRef.current.pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
      dragRef.current.startScale = viewRef.current.scale;
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      setGlare({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
        on: true,
      });
    }
    const d = dragRef.current;
    if (!d || !pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointersRef.current.size === 2 && d.pinchDist > 0) {
      // Two-finger pinch zoom
      const [a, b] = [...pointersRef.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      setView((v) => ({ ...v, scale: clampNum(d.startScale * (dist / d.pinchDist), 1, 2.5) }));
    } else if (pointersRef.current.size === 1) {
      // Drag to rotate
      setView((v) => ({
        ...v,
        ry: clampNum(d.startRy + (e.clientX - d.startX) * 0.25, -45, 45),
        rx: clampNum(d.startRx - (e.clientY - d.startY) * 0.25, -30, 30),
      }));
    }
  };

  const endPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size === 0) {
      dragRef.current = null;
      setDragging(false);
    } else if (pointersRef.current.size === 1) {
      // Re-anchor on the remaining finger so rotation doesn't jump
      const [p] = [...pointersRef.current.values()];
      dragRef.current = {
        startX: p.x,
        startY: p.y,
        startRx: viewRef.current.rx,
        startRy: viewRef.current.ry,
        pinchDist: 0,
        startScale: viewRef.current.scale,
      };
    }
  };

  return (
    <div
      ref={shellRef}
      className={
        fullscreen
          ? "fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background/95 p-4 backdrop-blur-sm sm:p-8"
          : "relative"
      }
    >
    <div
      ref={containerRef}
      role="group"
      aria-label="3D showcase viewer — drag to rotate, scroll or pinch to zoom, fullscreen available"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endPointer}
      onPointerCancel={endPointer}
      onPointerLeave={() => setGlare((g) => ({ ...g, on: false }))}
      onDoubleClick={() => setView((v) => ({ ...v, scale: v.scale > 1 ? 1 : 1.75 }))}
      className={`group/tilt relative select-none [perspective:1400px] [touch-action:none] ${
        fullscreen ? "w-[min(94vw,calc((100dvh-9rem)*(4/3)))]" : ""
      }`}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <div
        className="relative overflow-hidden rounded-3xl glow-red will-change-transform"
        style={{
          transform: `rotateX(${view.rx}deg) rotateY(${view.ry}deg) scale(${view.scale})`,
          transition: dragging ? "none" : "transform 250ms ease-out",
          transformStyle: "preserve-3d",
        }}
      >
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
          draggable={false}
          className="h-full w-full object-cover"
        />
        {/* Glare */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: glare.on ? 1 : 0,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.35), transparent 45%)`,
          }}
        />
      </div>
      <div
        className="absolute left-4 top-4 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur"
        style={{ transform: "translateZ(40px)" }}
      >
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Diagnostic</p>
        <p className="font-display text-lg font-bold text-primary">ONLINE</p>
      </div>
      <div
        className="absolute bottom-4 left-4 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur"
        style={{ transform: "translateZ(40px)" }}
      >
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Brands</p>
        <p className="font-display text-lg font-bold">All Covered</p>
      </div>
      <div
        className="absolute bottom-4 right-4 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur"
        style={{ transform: "translateZ(40px)" }}
      >
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Services</p>
        <p className="font-display text-lg font-bold text-primary">50+</p>
      </div>

      {/* Viewer controls */}
      <div
        className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 backdrop-blur"
        onPointerDown={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => zoomBy(1 / 1.25)}
          aria-label="Zoom out"
          className="rounded-full p-2 text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="min-w-[3rem] text-center text-[10px] font-semibold tabular-nums text-muted-foreground">
          {Math.round(view.scale * 100)}%
        </span>
        <button
          type="button"
          onClick={() => zoomBy(1.25)}
          aria-label="Zoom in"
          className="rounded-full p-2 text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={reset}
          aria-label="Reset view"
          className="rounded-full p-2 text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? "Exit fullscreen (Esc)" : "Enter fullscreen"}
          aria-pressed={fullscreen}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
        >
          {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Hint */}
      {!fullscreen && (
        <div className="pointer-events-none absolute inset-x-0 -bottom-8 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
          Drag to rotate · Scroll / pinch to zoom · ⛶ Fullscreen
        </div>
      )}
    </div>
      {fullscreen && (
        <button
          type="button"
          onClick={toggleFullscreen}
          className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Minimize2 className="h-3.5 w-3.5" /> Exit fullscreen · Esc
        </button>
      )}
    </div>
  );
}

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
                Gobinathampatti Koot Rd, Harur
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
              Your trusted multi-brand car service center on Gobinathampatti Koot Road,
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

          <HeroViewer />
        </div>

        <div className="relative border-y border-primary/40 bg-gradient-to-r from-card via-background to-card">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_120%_at_50%_50%,oklch(0.83_0.25_140/0.10),transparent)]" />
          <div className="container-page relative flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-sm font-bold uppercase tracking-widest text-foreground drop-shadow-[0_0_6px_oklch(0.83_0.25_140/0.35)]">
            {["Partner with Bosch", "50+ Services", "All Car Brands", "Genuine Accessories", "Bodyshop & Coatings"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" /> {t}
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
          desc="ESANV Motors is a professional multi-brand car service center and accessories destination on Gobinathampatti Koot Road, near Harur, Dharmapuri District – 636905. As a trusted Bosch Car Service partner, we deliver high-quality vehicle care with advanced tools, trained technicians and genuine products."
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

      {/* Animated stats — trust & conversion */}
      <section className="border-y border-border bg-card/30 py-12">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatCounter value={50} suffix="+" label="Car Services" />
          <StatCounter value={18} suffix="+" label="Brands Covered" />
          <StatCounter value={7} suffix="" label="Days Open a Week" />
          <StatCounter value={24} suffix="/7" label="Breakdown Support" />
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
              <Link to="/seat-covers" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-semibold text-primary hover:bg-primary/20">
                View Seat Cover Catalogue <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={CONTACT.store} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold hover:bg-secondary/70">
                Visit Online Store
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ACCESSORIES.map((a) => (
              a.name === "Seat Covers" ? (
                <Link key={a.name} to="/seat-covers" className="group overflow-hidden rounded-xl border border-primary/40 bg-card ring-1 ring-primary/20">
                  <div className="aspect-square overflow-hidden">
                    <img decoding="async" src={a.img} alt={a.name} loading="lazy" width={400} height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold">{a.name}</h3>
                    <p className="mt-0.5 text-xs text-primary">View catalogue →</p>
                  </div>
                </Link>
              ) : (
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
              )
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
