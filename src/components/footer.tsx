import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "../content";

export function Footer() {
  return (
    <footer data-flip="ink" className="relative overflow-hidden border-t border-titan/25 bg-white">
      <div className="glow-blue -left-40 bottom-0 h-[26rem] w-[26rem]" />

      <div className="shell relative z-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/mark.png" alt="" className="h-10 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl uppercase leading-none text-ink">Titan</span>
                <span className="text-[0.5625rem] font-medium uppercase leading-none tracking-[0.3em] text-gold">
                  Home Exteriors
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-slate-body">
              {COMPANY.tagline}. Siding, windows and doors installed by a licensed Florida general
              contractor, backed by a lifetime warranty and the guaranteed lowest price.
            </p>
            <div className="mt-6 space-y-1 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-slate-body">
              <p>Installer of record: {COMPANY.installer}</p>
              <p className="text-gold/80">
                FL License {COMPANY.license} · {COMPANY.liability} liability
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[0.6875rem] tracking-[0.24em] text-gold">Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="ulink text-sm font-light text-slate-body hover:text-ink">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#financing" className="ulink text-sm font-light text-slate-body hover:text-ink">
                  Financing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6875rem] tracking-[0.24em] text-gold">On this page</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="ulink text-sm font-light text-slate-body hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6875rem] tracking-[0.24em] text-gold">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm font-light text-slate-body">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-start gap-3 hover:text-ink">
                  <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:text-ink">
                  <Mail size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    {COMPANY.email.split("@")[0]}
                    <wbr />
                    {`@${COMPANY.email.split("@")[1]}`}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <a href="#area" className="hover:text-ink">
                  Serving 12 Florida counties
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-gold btn-sm mt-7">
              Free estimate
            </a>
          </div>
        </div>

        <div className="rule mt-16" />

        <div className="flex flex-col gap-4 pt-7 text-[0.6875rem] uppercase tracking-[0.16em] text-slate-body md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Licensed &amp; insured in Florida · Lifetime warranty</p>
        </div>
      </div>

      <div className="pointer-events-none relative z-0 -mb-2 select-none overflow-hidden">
        <p className="watermark whitespace-nowrap text-center text-[clamp(5rem,20vw,18rem)]">TITAN</p>
      </div>
    </footer>
  );
}
