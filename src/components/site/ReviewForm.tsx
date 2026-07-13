import { useState } from "react";
import { Star, Send } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ReviewForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Review for ESANV Motors%0A%0AName: ${name}%0ACity: ${city}%0ARating: ${rating}/5%0AReview: ${text}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-xl font-bold">Write a Review</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Your review will be shared with our team on WhatsApp and shown here.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
      </div>
      <div className="mt-4">
        <span className="text-sm text-muted-foreground">Rating</span>
        <div className="mt-1 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <button type="button" key={i} onClick={() => setRating(i + 1)} aria-label={`${i + 1} stars`}>
              <Star className={cn("h-6 w-6", i < rating ? "fill-primary text-primary" : "text-muted-foreground")} />
            </button>
          ))}
        </div>
      </div>
      <textarea required value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="Share your experience..."
        className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
      <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:scale-[1.03]">
        <Send className="h-4 w-4" /> Submit Review
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Reviews are also sent to {CONTACT.phone} on WhatsApp for verification.
      </p>
    </form>
  );
}