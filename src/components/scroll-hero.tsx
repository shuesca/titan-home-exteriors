import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { COMPANY, HERO_STATS } from "../content";
import { CountUp } from "./count-up";

const FRAME_COUNT = 96;
const framePath = (i: number) => `/frames/f${String(i + 1).padStart(3, "0")}.webp`;

/**
 * Cinematic scroll hero. A 96-frame sequence is painted to a canvas from scroll
 * position inside a tall sticky track. Reduced motion swaps in a static loop.
 */
export function ScrollHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const drawnRef = useRef(-1);
  const rafRef = useRef(0);
  const scheduleRef = useRef<(() => void) | null>(null);

  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    framesRef.current = Array.from<HTMLImageElement | null>({ length: FRAME_COUNT }).fill(null);
    let done = 0;

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = framePath(i);
        const finish = () => {
          if (cancelled) return resolve();
          framesRef.current[i] = img;
          done += 1;
          setLoaded(done);
          if (i === 0) setReady(true);
          drawnRef.current = -1;
          scheduleRef.current?.();
          resolve();
        };
        img.onload = finish;
        img.onerror = () => {
          done += 1;
          setLoaded(done);
          resolve();
        };
      });

    (async () => {
      await load(0);
      const batch = 8;
      for (let start = 1; start < FRAME_COUNT; start += batch) {
        if (cancelled) return;
        await Promise.all(
          Array.from({ length: Math.min(batch, FRAME_COUNT - start) }, (_, k) => load(start + k)),
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    const track = trackRef.current;
    if (!canvas || !track) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      drawnRef.current = -1;
    };

    const paint = (index: number) => {
      const img = framesRef.current[index] ?? framesRef.current.find((f) => f) ?? null;
      if (!img) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      drawnRef.current = index;
    };

    const update = () => {
      rafRef.current = 0;
      const rect = track.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = span <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / span));
      setProgress(p);
      const index = Math.min(FRAME_COUNT - 1, Math.floor(p * (FRAME_COUNT - 1) + 0.001));
      if (index !== drawnRef.current) paint(index);
    };

    const schedule = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    const onResize = () => {
      sizeCanvas();
      schedule();
    };

    scheduleRef.current = schedule;
    sizeCanvas();
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      scheduleRef.current = null;
    };
  }, [reduced]);

  const pct = Math.round((loaded / FRAME_COUNT) * 100);
  const titleFade = Math.max(0, 1 - progress * 2.35);
  const statsIn = progress > 0.55;

  return (
    <section
      ref={trackRef}
      className="relative"
      style={{ height: reduced ? "100svh" : "340vh" }}
      aria-label="Titan Home Exteriors"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ink">
        {reduced ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Titan Home Exteriors exterior renovation reel"
            src="/videos/hero-1080.mp4"
            poster="/images/cta-dusk.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        )}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,10,20,0.8) 0%, rgba(5,10,20,0.26) 32%, rgba(5,10,20,0.5) 62%, rgba(5,10,20,0.96) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 18% 82%, rgba(11,95,212,0.34) 0%, rgba(11,95,212,0) 58%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(94deg, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.72) 26%, rgba(5,10,20,0.28) 52%, rgba(5,10,20,0) 74%)",
          }}
        />
        <div className="noise absolute inset-0" />

        {!reduced && pct < 100 && (
          <div className="absolute left-0 top-0 z-30 h-px w-full bg-white/8">
            <div
              className="h-full transition-[width] duration-300 ease-out"
              style={{ width: `${pct}%`, background: "linear-gradient(90deg,#A8873F,#F0DDB4)" }}
            />
          </div>
        )}

        <div
          className="absolute inset-0 z-20 flex items-center"
          style={{
            opacity: reduced ? 1 : titleFade,
            transform: reduced ? undefined : `translateY(${progress * -70}px)`,
          }}
        >
          <div className="shell w-full">
            <div className="max-w-[54rem]">
              <div
                className={`flex items-center gap-3 transition-all duration-700 ${ready || reduced ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              >
                <span className="h-px w-10 bg-gold/70" />
                <span className="eyebrow">Florida licensed · CGC058605</span>
              </div>

              <h1
                className={`h-hero mt-6 text-ivory transition-all delay-100 duration-1000 ${ready || reduced ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                Built for
                <br />
                <span className="gold-text">Florida</span> weather.
              </h1>

              <p
                className={`lede mt-7 max-w-[34rem] transition-all delay-200 duration-1000 ${ready || reduced ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                Siding, windows and doors installed by a licensed Florida general contractor —
                premium name-brand products, a lifetime warranty, and the guaranteed lowest price.
              </p>

              <div
                className={`mt-10 flex flex-wrap items-center gap-4 transition-all delay-300 duration-1000 ${ready || reduced ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                <a href="#contact" className="btn btn-gold">
                  Get a free quote <ArrowRight size={15} strokeWidth={1.5} />
                </a>
                <a href={COMPANY.phoneHref} className="btn btn-ghost-light">
                  <Phone size={14} strokeWidth={1.5} /> {COMPANY.phone}
                </a>
              </div>

              <div
                className={`mt-10 flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/45 transition-all delay-500 duration-1000 ${ready || reduced ? "opacity-100" : "opacity-0"}`}
              >
                <ShieldCheck size={15} strokeWidth={1.4} className="text-gold" />
                $2,000,000 general liability · Lifetime warranty
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-20 transition-all duration-700"
          style={{
            opacity: reduced ? 1 : statsIn ? 1 : 0,
            transform: reduced ? undefined : `translateY(${statsIn ? 0 : 28}px)`,
          }}
        >
          <div className="shell">
            <div className="grid grid-cols-3 gap-px border-t border-gold/18 bg-gold/12">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="bg-ink/70 px-5 py-7 backdrop-blur-md md:px-7 md:py-9">
                  <div className="h3 text-gold">
                    {s.value === null ? (
                      s.display
                    ) : (
                      <>
                        <CountUp to={s.value} play={statsIn || reduced} />
                        {s.suffix}
                      </>
                    )}
                  </div>
                  <div className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ivory/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!reduced && (
          <div
            className="absolute bottom-[10.5rem] left-1/2 z-20 hidden -translate-x-1/2 transition-opacity duration-500 lg:block"
            style={{ opacity: progress > 0.06 ? 0 : 1 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-ivory/40">
                Scroll
              </span>
              <span className="h-12 w-px overflow-hidden bg-ivory/15">
                <span className="block h-1/2 w-full animate-[titan-float_2.4s_ease-in-out_infinite] bg-gold" />
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
