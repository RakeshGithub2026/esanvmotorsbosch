import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/site-data";

function Slider({ item }: { item: (typeof BEFORE_AFTER)[number] }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card">
      <div
        ref={ref}
        className="relative aspect-[4/3] cursor-ew-resize select-none touch-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={item.after}
          alt={`${item.title} — after`}
          loading="lazy"
          decoding="async"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={item.before}
            alt={`${item.title} — before`}
            loading="lazy"
            decoding="async"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
            style={{ width: ref.current?.offsetWidth ? `${ref.current.offsetWidth}px` : "100%" }}
            draggable={false}
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
          After
        </span>

        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
      </div>

      <figcaption className="flex items-center justify-between gap-3 p-4">
        <div>
          <h3 className="font-display text-base font-bold">{item.title}</h3>
          <p className="text-xs text-muted-foreground">Drag the handle to compare</p>
        </div>
        <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">
          {item.tag}
        </span>
      </figcaption>
    </figure>
  );
}

export function BeforeAfterGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {BEFORE_AFTER.map((i) => (
        <Slider key={i.title} item={i} />
      ))}
    </div>
  );
}