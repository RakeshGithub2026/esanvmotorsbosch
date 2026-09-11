import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ShoppingBag, Phone, ZoomIn, ZoomOut, X, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { CONTACT } from "@/lib/site-data";
import pageM01 from "@/assets/seat-covers/catalogue-page-m01-m08.png";
import pageM09 from "@/assets/seat-covers/catalogue-page-m09-m16.png";
import page1 from "@/assets/seat-covers/catalogue-page-1.webp";
import page2 from "@/assets/seat-covers/catalogue-page-2.webp";
import page3 from "@/assets/seat-covers/catalogue-page-3.webp";
import page4 from "@/assets/seat-covers/catalogue-page-4.webp";
import page5 from "@/assets/seat-covers/catalogue-page-5.webp";
import page6 from "@/assets/seat-covers/catalogue-page-6.webp";
import page7 from "@/assets/seat-covers/catalogue-page-7.webp";

const PAGES = [
  { img: pageM01, models: "M-01 to M-08", label: "Models 01 – 08" },
  { img: pageM09, models: "M-09 to M-16", label: "Models 09 – 16" },
  { img: page1, models: "M-17 to M-24", label: "Models 17 – 24" },
  { img: page2, models: "M-25 to M-32", label: "Models 25 – 32" },
  { img: page3, models: "M-33 to M-40", label: "Models 33 – 40" },
  { img: page4, models: "M-49 to M-56", label: "Models 49 – 56" },
  { img: page5, models: "M-57 to M-64", label: "Models 57 – 64" },
  { img: page6, models: "M-65 to M-70", label: "Models 65 – 70" },
  { img: page7, models: "M-71 to M-74", label: "Models 71 – 74" },
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
      { property: "og:image", content: page1 },
    ],
    links: [{ rel: "canonical", href: "https://esanvmotorsbosch.lovable.app/seat-covers" }],
  }),
  component: SeatCovers,
});

function SeatCovers() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const open = lightboxIndex !== null;

  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % PAGES.length)),
    [],
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + PAGES.length) % PAGES.length)),
    [],
  );

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
          {PAGES.map((p, idx) => (
            <figure
              key={p.models}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => openAt(idx)}
                aria-label={`Zoom seat cover designs ${p.models}`}
                className="relative block w-full overflow-hidden bg-white text-left"
              >
                <img
                  src={p.img}
                  alt={`ESANV Motors seat cover designs ${p.models}`}
                  loading="lazy"
                  decoding="async"
                  width={1754}
                  height={1240}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" /> Click to zoom
                </span>
              </button>
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
      {open && (
        <Lightbox
          page={PAGES[lightboxIndex!]}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </SiteLayout>
  );
}

function Lightbox({
  page,
  onClose,
  onNext,
  onPrev,
}: {
  page: { img: string; models: string; label: string };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const dragRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const clampScale = (s: number) => Math.min(5, Math.max(1, s));
  const zoomIn = () => setScale((s) => clampScale(s + 0.5));
  const zoomOut = () =>
    setScale((s) => {
      const n = clampScale(s - 0.5);
      if (n === 1) {
        setTx(0);
        setTy(0);
      }
      return n;
    });

  useEffect(() => {
    reset();
  }, [page.img, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => clampScale(s + (e.deltaY < 0 ? 0.25 : -0.25)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, tx, ty };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    setTx(dragRef.current.tx + (e.clientX - dragRef.current.x));
    setTy(dragRef.current.ty + (e.clientY - dragRef.current.y));
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Seat cover designs ${page.models}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 border-b border-white/10 bg-black/60 px-4 py-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Catalogue</p>
          <p className="font-display text-base font-bold">{page.label}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={zoomOut} aria-label="Zoom out" className="rounded-full border border-white/20 bg-white/5 p-2 hover:bg-white/15">
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="min-w-[3.5rem] text-center text-xs tabular-nums text-white/80">
            {Math.round(scale * 100)}%
          </span>
          <button onClick={zoomIn} aria-label="Zoom in" className="rounded-full border border-white/20 bg-white/5 p-2 hover:bg-white/15">
            <ZoomIn className="h-4 w-4" />
          </button>
          <button onClick={reset} aria-label="Reset zoom" className="rounded-full border border-white/20 bg-white/5 p-2 hover:bg-white/15">
            <RotateCcw className="h-4 w-4" />
          </button>
          <button onClick={onClose} aria-label="Close" className="ml-2 rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white hover:bg-black/80"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white hover:bg-black/80"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Image stage */}
      <div
        className="flex h-full w-full items-center justify-center overflow-hidden px-4 pb-14 pt-20"
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ cursor: scale > 1 ? (dragRef.current ? "grabbing" : "grab") : "zoom-in" }}
      >
        <img
          src={page.img}
          alt={`ESANV Motors seat cover designs ${page.models}`}
          draggable={false}
          onDoubleClick={() => (scale === 1 ? setScale(2) : reset())}
          className="max-h-full max-w-full select-none object-contain transition-transform duration-150 ease-out"
          style={{ transform: `translate(${tx}px, ${ty}px) scale(${scale})` }}
        />
      </div>

      {/* Hint */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[11px] uppercase tracking-widest text-white/60"
      >
        Scroll / pinch to zoom · Drag to pan · Double-click to toggle · Esc to close
      </div>
    </div>
  );
}
