import React, { useEffect, useMemo, useRef, useState } from "react";

// CSS-Variable --header-h lesen (Fallback 0)
function getHeaderHeight() {
  const val = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-h")
    .trim();
  const n = parseFloat(val);
  return Number.isFinite(n) ? n : 0;
}
const MQ = "(min-width: 1600px)";

export default function SectionNav() {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // nur mobil relevant
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.matchMedia(MQ).matches
  );
  const rAF = useRef(null);

  // Titel vorbereiten
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".g-section"));
    const mapped = nodes.map((el, i) => {
      const id = el.id || `sec-${i + 1}`;
      if (!el.id) el.id = id;

      const h2 = el.querySelector("h2");
      let title = id;

      if (h2) {
        // .en-tag entfernen, damit nur der TR-Titel übrig bleibt
        const clone = h2.cloneNode(true);
        clone.querySelectorAll(".en-tag").forEach((n) => n.remove());
        title = clone.textContent.trim();
      }

      return { id, title, el };
    });
    setSections(mapped);
  }, []);

  // Desktop/Mobile Switch
  useEffect(() => {
    const mm = window.matchMedia(MQ);
    const onChange = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) setIsOpen(false); // Overlay schließen wenn auf Desktop
    };
    mm.addEventListener?.("change", onChange);
    return () => mm.removeEventListener?.("change", onChange);
  }, []);

  // Active-Logik: Abschnitt mit Überschrift am oberen Viewport-Rand
  useEffect(() => {
    if (!sections.length) return;

    const headerH = getHeaderHeight();
    const computeActive = () => {
      rAF.current = null;
      const heads = sections.map((s) => s.el.querySelector("h2") || s.el);
      const threshold = headerH + 1;

      let nextId = sections[0].id;
      for (let i = 0; i < heads.length; i++) {
        const top = heads[i].getBoundingClientRect().top - threshold;
        if (top >= 0) {
          nextId = sections[i].id;
          break;
        }
        if (i === heads.length - 1) nextId = sections[heads.length - 1].id;
      }
      if (nextId !== activeId) setActiveId(nextId);
    };

    const onScroll = () => {
      if (rAF.current) return;
      rAF.current = requestAnimationFrame(computeActive);
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, [sections, activeId]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = getHeaderHeight();
    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      Math.max(0, headerH) -
      6;
    window.scrollTo({ top: y, behavior: "smooth" });
    // auf Mobil nach Sprung schließen
    if (!isDesktop) setIsOpen(false);
  };

  // Auf Mobile Klammerzusätze in Titeln entfernen
  const labelFor = (raw) => raw.replace(/\s*\([^)]*\)/g, "").trim();

  // Sichtbarkeit bestimmen (Desktop immer sichtbar, mobil abhängig von isOpen)
  const navVisible = isDesktop || isOpen;

  return (
    <>
      {/* FAB (nur mobil sichtbar per CSS) */}
      <button
        type="button"
        className={`toc-fab ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        aria-controls="grammar-sections"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="toc-content">
          {/* List-Icon */}
          <svg
            className="toc-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="toc-label">Başlıklar</span>
        </span>
        <span className="toc-x" aria-hidden="true">
          ×
        </span>
      </button>

      {/* NAV */}
      <nav
        id="grammar-sections"
        className={`grammar-section-nav ${navVisible ? "show" : ""}`}
        aria-label="Başlıklar"
      >
        <a href="/" className="nav-brand" aria-label="Langual">
          <span className="navbrand-badge" aria-hidden>
            <span className="navbrand-badge-glow" />
            <span className="navbrand-badge-e">E</span>
          </span>
          <span className="navbrand-name">Langual</span>
        </a>{" "}
        <div className="nav-head">
          <div className="nav-title">Başlıklar</div>
          <div className="nav-subtitle">İçindekiler</div>
          {!isDesktop && (
            <button
              className="nav-close"
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
              title="Kapat"
            >
              ×
            </button>
          )}
        </div>
        <ul className="section-list">
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                className={s.id === activeId ? "is-active" : ""}
                onClick={() => handleClick(s.id)}
              >
                <span className="num">{i + 1}</span>
                <span className="label">{labelFor(s.title)}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
