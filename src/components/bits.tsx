import type { ReactNode } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { COMPANY } from "../content";

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className={`h-px w-9 ${dark ? "bg-gold-dp/60" : "bg-gold/70"}`} />
        <span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</span>
      </div>
      <h2 className={`h2 mt-5 ${dark ? "text-ink" : "text-ivory"}`}>{title}</h2>
      {lede && <p className={`lede mt-6 ${dark ? "lede-dark" : ""}`}>{lede}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img src="/images/cta-dusk.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(5,10,20,0.96) 0%, rgba(6,58,134,0.82) 52%, rgba(5,10,20,0.9) 100%)",
        }}
      />
      <div className="noise absolute inset-0" />
      <div className="shell relative z-10 py-24 md:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />
              <span className="eyebrow">Ready when you are</span>
            </div>
            <h2 className="h2 mt-5 text-ivory">Get your free estimate</h2>
            <p className="lede mt-6 max-w-xl">
              No pressure, no obligation. We'll measure, spec the job, and hand you a written quote —
              then beat any competitor's written price for the same scope.
            </p>
          </div>
          <div className="reveal flex flex-col gap-3" style={{ transitionDelay: "120ms" }}>
            <a href="#contact" className="btn btn-gold w-full">
              Request my quote <ArrowRight size={15} strokeWidth={1.5} />
            </a>
            <a href={COMPANY.phoneHref} className="btn btn-ghost-light w-full">
              <Phone size={14} strokeWidth={1.5} /> {COMPANY.phone}
            </a>
            <p className="mt-2 text-center text-[0.625rem] font-medium uppercase tracking-[0.18em] text-ivory/40">
              24 hour quote turnaround · FL Lic. {COMPANY.license}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TickList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Check size={11} strokeWidth={2.4} />
          </span>
          <span className="text-[0.9375rem] font-light leading-relaxed text-ivory/65">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function TickListDark({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-gold-dp/15 text-gold-dp">
            <Check size={11} strokeWidth={2.4} />
          </span>
          <span className="text-[0.9375rem] font-light leading-relaxed text-slate-body">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}
