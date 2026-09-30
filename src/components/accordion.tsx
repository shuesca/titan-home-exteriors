import { useState } from "react";
import { Plus } from "lucide-react";

export function Accordion({
  items,
  dark = false,
  className = "",
}: {
  items: { q: string; a: string }[];
  dark?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`reveal border-b ${dark ? "border-ink/10" : "border-gold/12"}`}
            style={{ transitionDelay: `${Math.min(i, 6) * 55}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span
                className={`font-display text-lg uppercase leading-tight tracking-wide transition-colors duration-300 md:text-xl ${
                  dark ? (isOpen ? "text-titan" : "text-ink") : isOpen ? "text-gold" : "text-ivory"
                }`}
              >
                {item.q}
              </span>
              <Plus
                size={18}
                strokeWidth={1.4}
                className={`mt-1 shrink-0 transition-transform duration-500 ${
                  dark ? "text-gold-dp" : "text-gold"
                } ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            <div
              className="grid transition-all duration-500"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-3xl pb-7 pr-10 text-[0.9375rem] font-light leading-relaxed ${
                    dark ? "text-slate-body" : "text-ivory/60"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
