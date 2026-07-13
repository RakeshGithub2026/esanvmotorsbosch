import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { CONTACT, LOGOS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={LOGOS.esanv} alt="ESANV Motors logo" width={64} height={64}
              className="h-16 w-16 rounded-xl border border-border bg-black object-contain p-1" />
            <img src={LOGOS.bosch} alt="Bosch Car Service logo" width={64} height={64}
              className="h-16 w-16 rounded-xl border border-border bg-white object-contain p-1" />
            <span className="font-display text-xl font-bold tracking-wide">ESANV MOTORS</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Your trusted multi-brand car service center on Gopinathampatti Koot Road,
            near Harur, Dharmapuri District — proud
            partner with Bosch Car Service. Complete car care, coatings, diagnostics
            and genuine accessories under one roof.
          </p>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-primary text-white"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground">Gallery</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            <li><a href={CONTACT.store} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">Online Store</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {CONTACT.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href={CONTACT.phoneHref} className="hover:text-foreground">{CONTACT.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">{CONTACT.email}</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" /> {CONTACT.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ESANV Motors. All rights reserved.</p>
          <p>Partner with BOSCH CAR SERVICE · Gopinathampatti Koot Rd, Harur, Dharmapuri</p>
        </div>
      </div>
    </footer>
  );
}