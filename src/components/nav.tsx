import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../content";
import { ThemeSwitch } from "./theme-switch";

export function TopBar() {
  return (
    <div data-flip="ink-2" className="relative z-[70] overflow-visible border-b border-titan/20 bg-white">
      <div className="shell-wide flex h-11 items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <ThemeSwitch />
          <p className="truncate text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold">
          {COMPANY.promoBar}
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-6 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-ink/55 md:flex">
          <span>FL Lic. {COMPANY.license}</span>
          <a href={COMPANY.phoneHref} className="ulink text-ink/80 hover:text-gold">
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        data-flip="ink"
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-titan/30 bg-white/95 shadow-[0_10px_30px_-24px_rgba(11,95,212,0.65)] backdrop-blur-xl"
            : "border-b border-titan/15 bg-white"
        }`}
      >
        <div className="shell-wide flex h-[4.75rem] items-center justify-between gap-6">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <img src="/images/mark.png" alt="" className="h-9 w-auto" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.375rem] uppercase leading-none tracking-wide text-ink">
                Titan
              </span>
              <span className="text-[0.5625rem] font-medium uppercase leading-none tracking-[0.3em] text-gold">
                Home Exteriors
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`ulink whitespace-nowrap text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active === l.href ? "text-gold" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a href={COMPANY.phoneHref} className="btn btn-outline-gold btn-sm">
              <Phone size={13} strokeWidth={1.6} /> {COMPANY.phone}
            </a>
            <a href="#contact" className="btn btn-blue btn-sm">
              Free Quote <ArrowRight size={13} strokeWidth={1.6} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold xl:hidden"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] transition-opacity duration-400 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="theme-scrim absolute inset-0 h-full w-full bg-white/70 backdrop-blur-sm"
        />
        <div
          data-flip="ink-2"
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col border-l border-titan/25 bg-white shadow-[-24px_0_60px_-36px_rgba(11,95,212,0.45)] transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="flex h-[4.75rem] items-center justify-between border-b border-titan/15 px-6">
            <span className="eyebrow">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-ink/60 hover:text-gold"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-titan/12 py-3.5 font-display text-2xl uppercase tracking-wide transition-colors ${
                  active === l.href ? "text-gold" : "text-ink hover:text-gold"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-titan/15 p-6">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-blue w-full">
              Get a free quote
            </a>
            <a
              href={COMPANY.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-ink/70"
            >
              <Phone size={14} strokeWidth={1.5} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
