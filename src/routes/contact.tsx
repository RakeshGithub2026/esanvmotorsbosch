import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/Layout";
import { BookingForm } from "@/components/site/BookingForm";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — ESANV Motors | Bosch Car Service, Harur" },
      {
        name: "description",
        content:
          "Book your car service at ESANV Motors, Harur, Dharmapuri. Call +91 99658 11776 or send your details on WhatsApp for instant slot confirmation.",
      },
      { property: "og:title", content: "Contact & Book — ESANV Motors" },
      { property: "og:description", content: "Book a car service in Harur, Dharmapuri. Confirmation on WhatsApp within minutes." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-card/30 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Book / Contact"
            title="Ready to Book Your Service?"
            desc="Send us your details — we'll confirm your slot on WhatsApp instantly."
          />
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 lg:grid-cols-2">
        <BookingForm />

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-xl font-bold">Visit the Workshop</h3>
          <p className="mt-1 text-sm text-muted-foreground">Harur, Dharmapuri</p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" /> Open Now
          </span>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /> {CONTACT.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-primary" /> <a href={CONTACT.phoneHref} className="hover:text-primary">{CONTACT.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-primary" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 text-primary" /> {CONTACT.hours}</li>
          </ul>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:scale-[1.03]">
            <ExternalLink className="h-4 w-4" /> Open Google Maps
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Google Maps opens in a new tab.</p>
        </div>
      </section>
    </SiteLayout>
  );
}