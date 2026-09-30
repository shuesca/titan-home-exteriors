import { useEffect, useState } from "react";

type ThemeId = "1" | "2";

function readTheme(): ThemeId {
  try {
    return localStorage.getItem("titan-theme") === "1" ? "1" : "2";
  } catch {
    return "2";
  }
}

export function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeId>(readTheme);
  const [hover, setHover] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hover || pinned;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("titan-theme", theme);
    } catch {
      /* ignore private-mode storage failures */
    }
  }, [theme]);

  useEffect(() => {
    if (!pinned) return;
    const close = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (target instanceof Element && target.closest(".theme-dock")) return;
      setPinned(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [pinned]);

  function choose(next: ThemeId) {
    setTheme(next);
    setPinned(false);
    setHover(false);
  }

  return (
    <div
      className={`theme-dock ${open ? "is-open" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        className="theme-mark"
        aria-expanded={open}
        onClick={() => setPinned((value) => !value)}
      >
        click to select theme
      </button>
      <div className="theme-panel">
        <button
          type="button"
          className={`theme-choice ${theme === "1" ? "is-on" : ""}`}
          aria-pressed={theme === "1"}
          onClick={() => choose("1")}
        >
          Theme 1
        </button>
        <button
          type="button"
          className={`theme-choice ${theme === "2" ? "is-on" : ""}`}
          aria-pressed={theme === "2"}
          onClick={() => choose("2")}
        >
          Theme 2
        </button>
      </div>
    </div>
  );
}
