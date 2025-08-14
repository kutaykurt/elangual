// src/components/SectionNav/SectionNav.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// CSS-Variable --header-h lesen (Fallback 0)
function getHeaderHeight() {
  if (typeof window === "undefined") return 0;
  const val = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-h")
    .trim();
  const n = parseFloat(val);
  return Number.isFinite(n) ? n : 0;
}

const MQ = "(min-width: 1600px)";

/** Entfernt ALLE am Ende stehenden Klammerzusätze, inkl. verschachtelter
 *  ASCII- und Fullwidth-Klammern. Lässt den Rest unverändert. */
function cleanLabel(raw = "") {
  let s = String(raw)
    .replace(/[\u00A0\u202F]/g, " ")
    .trimEnd();
  const opens = new Set(["(", "（"]);
  const closes = new Set([")", "）"]);

  // Wiederholt löschen, solange der String mit ) oder ） endet
  for (;;) {
    const last = s[s.length - 1];
    if (!closes.has(last)) break;

    // Von hinten nach vorn die passende öffnende Klammer finden
    let depth = 0;
    let i = s.length - 1;
    for (; i >= 0; i--) {
      const ch = s[i];
      if (closes.has(ch)) depth++;
      else if (opens.has(ch)) {
        depth--;
        if (depth === 0) {
          // von der öffnenden Klammer bis zum Ende entfernen
          s = s.slice(0, i).trimEnd();
          break;
        }
      }
    }
    // Keine passende öffnende Klammer gefunden → abbrechen (defensiv)
    if (i < 0) break;
  }

  return s.replace(/\s+/g, " ").trim();
}

/**
 * Props:
 * - items?: [{ slug, label, index }]  // Router-Modus (empfohlen)
 * - activeSlug?: string               // aktiver Abschnitt (Router)
 * - basePath?: string                 // z.B. "/grammar/en/a1"
 *
 * Fallback: Keine items → Scroll-TOC anhand .g-section
 */
export default function SectionNav({ items, activeSlug, basePath }) {
  const navigate = useNavigate();
  const location = useLocation();

  const routerMode = Array.isArray(items) && items.length > 0;

  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // nur mobil relevant
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.matchMedia(MQ).matches
  );
  const rAF = useRef(null);

  // Router-Modus: Shadow-State aus items
  const routerSections = useMemo(() => {
    if (!routerMode) return [];
    return items.map((it) => ({
      id: it.slug, // einheitlich id = slug
      slug: it.slug,
      title: it.label,
      index: it.index,
    }));
  }, [routerMode, items]);

  // Scroll-Modus: Titel aus DOM vorbereiten
  useEffect(() => {
    if (routerMode) return;
    const nodes = Array.from(document.querySelectorAll(".g-section"));
    const mapped = nodes.map((el, i) => {
      const id = el.id || `sec-${i + 1}`;
      if (!el.id) el.id = id;
      const title = el.querySelector("h2")?.textContent?.trim() || id;
      return { id, title, el, index: i + 1 };
    });
    setSections(mapped);
  }, [routerMode]);

  // Desktop/Mobile Switch
  useEffect(() => {
    const mm = window.matchMedia(MQ);
    const onChange = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) setIsOpen(false); // Overlay schließen bei Wechsel zu Desktop
    };
    mm.addEventListener?.("change", onChange);
    return () => mm.removeEventListener?.("change", onChange);
  }, []);

  // ESC schließt Overlay (nur mobil)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (!isDesktop) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [isDesktop]);

  // Body-Scroll-Lock, wenn Overlay offen (nur mobil)
  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, isDesktop]);

  // Beim Navigieren Overlay schließen (Router-Modus)
  useEffect(() => {
    if (!isDesktop) setIsOpen(false);
  }, [location.pathname, isDesktop]);

  // Active-Logik (nur Scroll-Modus)
  useEffect(() => {
    if (routerMode || !sections.length) return;

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
  }, [sections, activeId, routerMode]);

  const handleClick = (idOrSlug) => {
    if (routerMode) {
      if (!basePath) return;
      navigate(`${basePath}/${idOrSlug}`);
      if (!isDesktop) setIsOpen(false);
      return;
    }
    const el = document.getElementById(idOrSlug);
    if (!el) return;
    const headerH = getHeaderHeight();
    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      Math.max(0, headerH) -
      6;
    window.scrollTo({ top: y, behavior: "smooth" });
    if (!isDesktop) setIsOpen(false);
  };

  // Sichtbarkeit (Desktop immer sichtbar)
  const navVisible = isDesktop || isOpen;

  const list = routerMode ? routerSections : sections;
  const isActive = (item) =>
    routerMode ? (item.slug ?? item.id) === activeSlug : item.id === activeId;

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
        </a>

        <div className="nav-head">
          <div className="nav-title">Başlıklar</div>
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

        <ul className="section-list" role="list">
          {list.map((s) => {
            const active = isActive(s);
            return (
              <li key={s.id}>
                <button
                  className={active ? "is-active" : ""}
                  onClick={() => handleClick(s.id)}
                  aria-current={active ? "true" : undefined}
                >
                  <span className="num">{"index" in s ? s.index : "•"}</span>
                  <span className="label">{cleanLabel(s.title)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
