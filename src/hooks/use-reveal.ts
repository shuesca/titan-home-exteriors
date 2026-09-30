import { useEffect } from "react";

/** Adds `.in` to `.reveal` / `.reveal-img` elements as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const targets = new Set<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
            targets.delete(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () => {
      document.querySelectorAll(".reveal:not(.in), .reveal-img:not(.in)").forEach((el) => {
        if (!targets.has(el)) {
          targets.add(el);
          io.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}
