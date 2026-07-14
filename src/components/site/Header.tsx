import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { CONTACT, LOGOS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={LOGOS.esanv} alt="ESANV MOTORS logo" width={72} height={72}
            className="h-16 w-16 rounded-lg border border-border bg-black object-contain p-0.5" />
          <img src={LOGOS.bosch} alt="Bosch Car Service logo" width={64} height={64}
            className="hidden h-14 w-14 rounded-lg border border-border bg-white object-contain p-0.5 sm:block" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-wide">ESANV MOTORS</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-primary">
              Bosch Car Service
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" /> OPEN NOW
          </span>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-primary text-white sm:grid"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">Call Now</span>
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-border lg:hidden", open ? "block" : "hidden")}>
        <nav className="container-page flex flex-col py-2">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}