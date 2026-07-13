import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT, SERVICE_OPTIONS } from "@/lib/site-data";

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [car, setCar] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Service Booking — ESANV Motors%0A%0AName: ${name}%0APhone: ${phone}%0ACar: ${car}%0AService: ${service}%0ANotes: ${notes}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-xl font-bold">Book a Service</h3>
      <p className="mt-1 text-sm text-muted-foreground">We'll confirm on WhatsApp within minutes.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
      </div>
      <input value={car} onChange={(e) => setCar(e.target.value)} placeholder="Car brand & model"
        className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
      <select value={service} onChange={(e) => setService(e.target.value)}
        className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
        {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Notes (optional)"
        className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:scale-[1.03]">
          <Send className="h-4 w-4" /> Send Booking
        </button>
        <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-2.5 font-semibold hover:bg-secondary/70">
          Call {CONTACT.phone}
        </a>
      </div>
    </form>
  );
}