import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ScrollHero } from "./components/scroll-hero";
import { CtaBand, SectionHead, Stars, TickListDark } from "./components/bits";
import { Accordion } from "./components/accordion";
import { Footer } from "./components/footer";
import { Nav, TopBar } from "./components/nav";
import { useReveal } from "./hooks/use-reveal";
import {
  ABOUT_STORY,
  BEFORE_AFTER,
  BEFORE_AFTER_NOTE,
  BRANDS,
  CERTIFICATE,
  COMPANY,
  COUNTIES,
  DIFFERENCE,
  EXPECT,
  FAQ,
  FINANCING,
  FINANCING_NOTE,
  OFFER,
  PROJECTS,
  PROMISE,
  REVIEWS,
  SERVICE_BADGES,
  SERVICE_OPTIONS,
  SERVICES,
  WARRANTY,
} from "./content";

const badgeIcons = [ShieldCheck, BadgeCheck, Clock];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
};

export default function App() {
  useReveal();
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const set =
    (key: keyof typeof emptyForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    const lines = [
      `Name: ${form.name}`,
      `Phone: ${form.phone || "—"}`,
      `Email: ${form.email || "—"}`,
      `City: ${form.city || "—"}`,
      `Service: ${form.service || "—"}`,
      "",
      form.message || "(no details)",
    ];
    const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Free quote request — ${form.name}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    window.location.href = href;
  }

  return (
    <div id="top" className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <Nav />
      <main className="flex-1">
        <ScrollHero />

        <section id="about" data-flip="ink" className="section relative overflow-hidden border-t border-titan/20 bg-white">
          <div className="glow-gold -right-32 top-10 h-[30rem] w-[30rem]" />
          <div className="shell relative z-10">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
              <div>
                <SectionHead dark eyebrow={PROMISE.eyebrow} title={PROMISE.title} lede={PROMISE.body} />
                <div className="reveal mt-10 flex flex-wrap gap-x-8 gap-y-3" style={{ transitionDelay: "160ms" }}>
                  {PROMISE.pillars.map((p) => (
                    <span
                      key={p}
                      className="flex items-center gap-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-slate-body"
                    >
                      <span className="h-1 w-1 rotate-45 bg-titan-lt" />
                      {p}
                    </span>
                  ))}
                </div>
                <div className="reveal mt-10 max-w-xl space-y-4" style={{ transitionDelay: "220ms" }}>
                  {ABOUT_STORY.map((p) => (
                    <p key={p.slice(0, 24)} className="text-[0.9375rem] font-light leading-relaxed text-slate-body">
                      {p}
                    </p>
                  ))}
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold/80">
                    {COMPANY.owner} · Owner
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="reveal-img img-zoom relative overflow-hidden">
                  <img
                    src="/images/story-home.jpg"
                    alt="Florida home with new exterior by Titan Home Exteriors"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div
                  className="reveal absolute -bottom-8 -left-6 max-w-[15rem] border border-titan/25 bg-white p-6 shadow-[inset_0_0_0_1px_rgba(11,95,212,0.12),0_18px_40px_-24px_rgba(11,95,212,0.4)] md:-left-12"
                  style={{ transitionDelay: "300ms" }}
                >
                  <p className="font-display text-4xl leading-none text-gold">22+</p>
                  <p className="mt-2 text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.18em] text-slate-body">
                    Years combined experience across Florida exteriors
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-28 grid gap-px border-y border-titan/25 bg-titan/20 md:grid-cols-3">
              {SERVICE_BADGES.map((b, i) => {
                const Icon = badgeIcons[i] ?? ShieldCheck;
                return (
                  <div
                    key={b.title}
                    className="reveal flex items-center gap-4 bg-white px-7 py-8"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <Icon size={22} strokeWidth={1.2} className="shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.1em] text-ink">{b.title}</p>
                      <p className="mt-1 text-xs font-light text-slate-body">{b.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="section relative border-t border-titan/20 bg-white">
          <div className="shell">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <SectionHead
                eyebrow="What we install"
                title={
                  <>
                    Three trades.
                    <br />
                    One contractor.
                  </>
                }
                dark
              />
              <a href="#contact" className="btn btn-outline-ink reveal shrink-0">
                Request a quote <ArrowRight size={14} strokeWidth={1.5} />
              </a>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {SERVICES.map((s, i) => (
                <a
                  key={s.slug}
                  href="#contact"
                  className="card-light reveal group flex flex-col overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
                    <span className="absolute bottom-5 left-6 font-display text-3xl uppercase text-ivory">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[0.9375rem] font-light leading-relaxed text-slate-body">{s.short}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-titan/20 px-2.5 py-1 text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-slate-body"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-titan transition-transform duration-500 group-hover:translate-x-1">
                      Get a quote <ArrowUpRight size={13} strokeWidth={1.8} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="difference" data-flip="ink" className="section relative overflow-hidden border-t border-titan/20 bg-[#eef5fc]">
          <div className="glow-blue left-1/3 top-0 h-[28rem] w-[28rem]" />
          <div className="shell relative z-10">
            <SectionHead
              dark
              eyebrow="The Titan difference"
              title="Why homeowners pick Titan"
              align="center"
              lede="Premium materials, trained crews, and a warranty that outlasts the sale."
            />
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {DIFFERENCE.map((d, i) => (
                <div key={d.title} className="card-dark reveal relative p-9" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="mono absolute right-6 top-6 text-[0.6875rem] text-gold/35">0{i + 1}</span>
                  <h3 className="h4 text-ink">{d.title}</h3>
                  <div className="rule my-6" />
                  <p className="text-[0.9375rem] font-light leading-relaxed text-slate-body">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section border-t border-titan/20 bg-white">
          <div className="shell">
            <SectionHead
              eyebrow="On the job"
              title="From rough opening to finished trim"
              lede="Titan handles the full scope — demo, prep, install, seal and trim. Clean removal, no damage to surrounding stucco."
              dark
            />
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              {BEFORE_AFTER.map((ba, i) => (
                <div key={ba.title} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="grid grid-cols-2 gap-px bg-titan/25">
                    {[
                      { src: ba.before, tag: "Before" },
                      { src: ba.after, tag: "After" },
                    ].map((f) => (
                      <div key={f.tag} className="img-zoom relative aspect-[4/5] overflow-hidden bg-ink">
                        <img src={f.src} alt={`${ba.title} — ${f.tag}`} className="h-full w-full object-cover" />
                        <span className="absolute left-0 top-0 bg-ink/85 px-3 py-1.5 text-[0.5625rem] font-medium uppercase tracking-[0.2em] text-gold">
                          {f.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                  <h3 className="h4 mt-6 text-ink">{ba.title}</h3>
                  <p className="mt-3 text-[0.9375rem] font-light leading-relaxed text-slate-body">{ba.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <p className="eyebrow eyebrow-dark reveal">Completed projects</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {PROJECTS.map((p, i) => (
                  <figure key={p.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    </div>
                    <figcaption className="mt-4">
                      <p className="text-sm font-medium uppercase tracking-[0.08em] text-ink">{p.title}</p>
                      <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.16em] text-slate-body">{p.place}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <p className="reveal mt-12 max-w-md text-xs font-light leading-relaxed text-slate-body/80">
              {BEFORE_AFTER_NOTE}
            </p>
          </div>
        </section>

        <section data-flip="ink-2" className="relative overflow-hidden border-y border-titan/20 bg-white py-14" aria-label="Brands">
          <div className="shell">
            <p className="eyebrow text-center">Name-brand products we install</p>
          </div>
          <div className="marquee-mask mt-9">
            <div className="marquee-track">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <div key={`${b.name}-${i}`} className="flex shrink-0 items-center gap-4 px-9">
                  <span className="font-display text-2xl uppercase tracking-wide text-ink">{b.name}</span>
                  <span className="text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-gold/50">
                    {b.cat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" data-flip="ink" className="section relative overflow-hidden border-t border-titan/20 bg-[#eef5fc]">
          <div className="shell relative z-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHead
                dark
                eyebrow="Google reviews"
                title={
                  <>
                    Rated 5.0 by
                    <br />
                    Florida homeowners
                  </>
                }
              />
              <div className="reveal shrink-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl leading-none text-gold">5.0</span>
                  <Stars />
                </div>
                <p className="mt-2 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-slate-body">
                  Verified Google reviews
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((r, i) => (
                <figure
                  key={r.name}
                  className="card-dark reveal flex flex-col p-8"
                  style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <Stars />
                    <span className="text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-gold/50">
                      {r.tag}
                    </span>
                  </div>
                  <blockquote className="serif mt-6 flex-1 text-[1.1875rem] leading-relaxed text-ink/80">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-7 border-t border-titan/20 pt-5">
                    <p className="text-sm font-medium text-ink">{r.name}</p>
                    <p className="mt-0.5 text-[0.6875rem] uppercase tracking-[0.16em] text-slate-body">{r.place}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="offer" className="relative overflow-hidden border-t border-titan/20 bg-white py-20">
          <div className="shell">
            <div className="reveal relative overflow-hidden border border-gold-dp/25 bg-white p-10 md:p-14">
              <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                  background: "linear-gradient(120deg, rgba(216,188,126,0) 0%, rgba(216,188,126,0.14) 100%)",
                }}
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <span className="eyebrow eyebrow-dark">{OFFER.label}</span>
                  <h2 className="h3 mt-4 text-ink">{OFFER.title}</h2>
                  <p className="mt-4 max-w-xl text-[0.9375rem] font-light leading-relaxed text-slate-body">
                    {OFFER.body}
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <a href="#contact" className="btn btn-blue">
                    {OFFER.cta} <ArrowRight size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="financing" data-theme1="white" className="section border-t border-titan/20 bg-[#eef5fc] pt-0">
          <div className="shell">
            <SectionHead
              dark
              eyebrow="Affordable home improvements"
              title="Flexible financing"
              lede="Don't let cost delay the work. Qualified homeowners can start now and pay over time through Momnt, a licensed consumer lender."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {FINANCING.map((plan, i) => (
                <div key={plan.title} className="card-light reveal p-8" style={{ transitionDelay: `${i * 90}ms` }}>
                  <p className="text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-gold-dp">{plan.tag}</p>
                  <h3 className="h4 mt-4 text-ink">{plan.title}</h3>
                  <p className="mt-4 text-[0.9375rem] font-light leading-relaxed text-slate-body">{plan.body}</p>
                </div>
              ))}
            </div>
            <p className="reveal mt-8 max-w-3xl text-xs font-light leading-relaxed text-slate-body/75">
              {FINANCING_NOTE}
            </p>
          </div>
        </section>

        <section id="warranty" data-flip="ink" className="section relative overflow-hidden border-t border-titan/20 bg-white">
          <div className="glow-gold left-1/4 top-1/4 h-[32rem] w-[32rem]" />
          <div className="shell relative z-10">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionHead dark eyebrow={CERTIFICATE.eyebrow} title={CERTIFICATE.title} lede={CERTIFICATE.body} />
                <TickListDark items={CERTIFICATE.points} className="reveal mt-9" />
              </div>

              <div
                className="reveal relative border border-gold/40 bg-white p-10 shadow-[inset_0_0_0_1px_rgba(11,95,212,0.16)] md:p-12"
                style={{ transitionDelay: "140ms" }}
              >
                <div className="absolute inset-3 border border-gold/35" />
                <div className="relative text-center">
                  <img src="/images/mark.png" alt="" className="mx-auto h-12 w-auto" />
                  <p className="eyebrow mt-6">Certificate of guarantee</p>
                  <h3 className="h3 mt-4 text-ink">
                    Lowest
                    <br />
                    <span className="gold-text">Price</span> Promise
                  </h3>
                  <div className="rule mx-auto my-7 w-24" />
                  <p className="text-[0.8125rem] font-light leading-relaxed text-slate-body">
                    Issued with every Titan proposal. Bring us a written quote from a licensed Florida
                    contractor for the same scope — we beat it.
                  </p>
                  <div className="mono mt-8 flex items-center justify-between border-t border-gold/30 pt-5 text-[0.625rem] uppercase tracking-[0.12em] text-slate-body">
                    <span>FL LIC {COMPANY.license}</span>
                    <span>{COMPANY.liability} LIABILITY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WARRANTY.map((w, i) => (
                <div key={w.title} className="card-dark reveal p-8" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <h3 className="h4 text-ink">{w.title}</h3>
                  <p className="mt-4 text-[0.9375rem] font-light leading-relaxed text-slate-body">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="section border-t border-titan/20 bg-white">
          <div className="shell">
            <SectionHead
              dark
              eyebrow="Where we work"
              title="12 Florida counties"
              lede="Free estimates across Central Florida and the surrounding region. No travel fees. The lowest-price guarantee follows every job."
            />
            <div className="mt-14 grid grid-cols-2 gap-px border border-titan/20 bg-titan/20 sm:grid-cols-3 lg:grid-cols-4">
              {COUNTIES.map((county, i) => (
                <div
                  key={county}
                  className="reveal bg-white px-6 py-7"
                  style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                >
                  <p className="font-display text-2xl uppercase tracking-wide text-ink">{county}</p>
                  <p className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-slate-body">
                    County
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" data-flip="ink" className="section border-t border-titan/20 bg-white">
          <div className="shell">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <SectionHead
                dark
                eyebrow="Questions"
                title="Before you call"
                lede="Licensing, timing, impact products, and how the warranty actually works."
              />
              <Accordion dark items={FAQ} />
            </div>
          </div>
        </section>

        <section id="contact" data-theme1="white" className="section border-t border-titan/20 bg-[#eef5fc]">
          <div className="shell">
            <div className="mb-12 grid gap-4 md:grid-cols-3">
              {[
                { icon: Phone, label: "Call or text", value: COMPANY.phone, href: COMPANY.phoneHref },
                { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, label: "Service area", value: "12 Florida counties", href: "#area" },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="reveal flex items-start gap-4 border border-titan/20 bg-white p-6"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <Icon size={16} strokeWidth={1.5} className="mt-1 text-gold-dp" />
                    <div>
                      <div className="eyebrow eyebrow-dark">{c.label}</div>
                      <div className="mt-1.5 text-sm font-medium text-ink [overflow-wrap:anywhere]">{c.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <SectionHead
                  dark
                  eyebrow="Request a quote"
                  title={
                    <>
                      Start with a <span className="blue-text">free estimate</span>
                    </>
                  }
                  lede="No pressure and no obligation. Send this and a Titan specialist gets back to you within one business day."
                />

                {sent ? (
                  <div className="reveal mt-10 border border-titan/20 bg-white p-8">
                    <h3 className="h4 text-ink">Request ready to send</h3>
                    <p className="lede lede-dark mt-5">
                      Your email app should have opened with the details addressed to Titan. If it didn’t, call{" "}
                      <a href={COMPANY.phoneHref} className="ulink font-medium text-titan">
                        {COMPANY.phone}
                      </a>{" "}
                      or email {COMPANY.email}.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm(emptyForm);
                      }}
                      className="btn btn-outline-ink btn-sm mt-8"
                    >
                      Write another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="reveal mt-10 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label-light" htmlFor="c-name">
                          Full name *
                        </label>
                        <input
                          id="c-name"
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Jane Doe"
                          className="field-light"
                        />
                      </div>
                      <div>
                        <label className="label-light" htmlFor="c-phone">
                          Phone
                        </label>
                        <input
                          id="c-phone"
                          value={form.phone}
                          onChange={set("phone")}
                          placeholder="(813) 000-0000"
                          className="field-light"
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label-light" htmlFor="c-email">
                          Email
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          placeholder="you@email.com"
                          className="field-light"
                        />
                      </div>
                      <div>
                        <label className="label-light" htmlFor="c-city">
                          City
                        </label>
                        <input
                          id="c-city"
                          value={form.city}
                          onChange={set("city")}
                          placeholder="Tampa"
                          className="field-light"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label-light" htmlFor="c-service">
                        What do you need?
                      </label>
                      <select
                        id="c-service"
                        value={form.service}
                        onChange={set("service")}
                        className="field-light"
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-light" htmlFor="c-message">
                        Project details
                      </label>
                      <textarea
                        id="c-message"
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="How many windows, which elevations, any HOA requirements…"
                        className="field-light resize-y"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button type="submit" className="btn btn-blue">
                        Request my free quote <ArrowRight size={15} strokeWidth={1.5} />
                      </button>
                      <a href={COMPANY.phoneHref} className="btn btn-outline-ink">
                        <Phone size={14} strokeWidth={1.5} /> {COMPANY.phone}
                      </a>
                    </div>
                    <p className="pt-1 text-xs leading-relaxed text-slate-body">
                      This opens your email app with the request addressed to Titan. We never sell your information.
                    </p>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div className="reveal border border-titan/20 bg-white p-8">
                  <div className="flex items-center gap-3">
                    <Clock size={15} strokeWidth={1.5} className="text-titan" />
                    <span className="eyebrow eyebrow-dark">What happens next</span>
                  </div>
                  <TickListDark items={EXPECT} className="mt-6" />
                </div>
                <div data-flip="ink" className="reveal border border-titan/25 bg-white p-8 shadow-[inset_0_0_0_1px_rgba(216,188,126,0.35)]" style={{ transitionDelay: "90ms" }}>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={15} strokeWidth={1.5} className="text-gold" />
                    <span className="eyebrow">Licensed &amp; insured</span>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-slate-body">
                    Work is performed by our installer of record, {COMPANY.installer}, holding Florida license{" "}
                    <span className="mono text-gold">{COMPANY.license}</span> and {COMPANY.liability} in general
                    liability coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
