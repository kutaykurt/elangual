// src/pages/Grammar/SectionPage.jsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionNav from "../../components/SectionNav/SectionNav";
import { getCourse } from "../Grammar/registry/registry";
import { NumberingProvider, SectionHeader } from "./blocks";

export default function SectionPage() {
  const navigate = useNavigate();
  const { lang = "en", level = "a1", slug } = useParams();

  const lvl = level.toLowerCase();
  const basePath = `/grammar/${lang}/${lvl}`;

  // Kurs & Abschnitte (defensiv)
  const course = getCourse(lang, lvl);
  const sections = course?.sections ?? [];
  const firstSlug = sections[0]?.slug ?? null;

  // Redirect, falls kein :slug
  useEffect(() => {
    if (!slug && firstSlug) {
      navigate(`${basePath}/${firstSlug}`, { replace: true });
    }
  }, [slug, firstSlug, basePath, navigate]);

  // Aktiver Index IMMER berechnen (auch wenn slug fehlt/ungültig)
  const activeIndex = useMemo(() => {
    if (!slug) return -1;
    return sections.findIndex((s) => s.slug === slug);
  }, [sections, slug]);

  const active = activeIndex >= 0 ? sections[activeIndex] : null;

  // Sidebar Items – auch immer berechnen
  const items = useMemo(
    () =>
      sections.map((s, i) => ({
        slug: s.slug,
        label: `${s.tr} (${s.title})`,
        index: i + 1,
      })),
    [sections]
  );

  const prev = activeIndex > 0 ? sections[activeIndex - 1] : null;
  const next =
    activeIndex >= 0 && activeIndex < sections.length - 1
      ? sections[activeIndex + 1]
      : null;

  // ====== Wide-Modal State ======
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHtml, setModalHtml] = useState("");
  const modalBodyRef = useRef(null);

  // Hilfsfunktionen
  const isMobile = () => window.matchMedia("(max-width: 600px)").matches;

  const clearOldOpeners = () => {
    document
      .querySelectorAll(".wide-opener")
      .forEach(
        (btn) => btn.parentElement && btn.parentElement.removeChild(btn)
      );

    // gesetzte Inline-Styles und Marker entfernen
    document.querySelectorAll("[data-modalized='true']").forEach((el) => {
      el.removeAttribute("data-modalized");
      el.style.removeProperty("--wide-opener-gap");
      // paddingTop könnte gesetzt worden sein – zurücksetzen
      if (el.style && el.style.paddingTop) el.style.paddingTop = "";
    });

    document
      .querySelectorAll(".wide-openable")
      .forEach((el) => el.classList.remove("wide-openable", "has-opener"));
  };

  const elementOverflows = (el) => el && el.scrollWidth > el.clientWidth;

  const makeOpener = (targetEl) => {
    if (!targetEl || targetEl.getAttribute("data-modalized") === "true") return;

    targetEl.classList.add("wide-openable");
    targetEl.setAttribute("data-modalized", "true");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "wide-opener";
    btn.setAttribute("aria-label", "Tam ekran");
    btn.innerHTML =
      '<span aria-hidden="true">⤢</span><span class="label">Tam ekran</span>';

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Im Modal nur die Tabelle selbst zeigen (nicht den Wrapper)
      const table =
        targetEl.querySelector("table") ||
        (targetEl.tagName.toLowerCase() === "table" ? targetEl : null);
      const html = table ? table.outerHTML : targetEl.outerHTML;
      setModalHtml(html);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    });

    // Button in den Container setzen
    targetEl.style.position = targetEl.style.position || "relative";
    targetEl.appendChild(btn);

    // Oben eine "Gasse" schaffen: dynamisch nach Buttonhöhe
    if (isMobile()) {
      requestAnimationFrame(() => {
        const h = btn.getBoundingClientRect().height || 32;
        const gap = h + 10; // 10px Luft
        targetEl.style.setProperty("--wide-opener-gap", `${gap}px`);
        targetEl.classList.add("has-opener");
        // Fallback (falls CSS-Var nicht greift)
        if (!targetEl.style.paddingTop) targetEl.style.paddingTop = `${gap}px`;
      });
    }
  };

  const attachOpeners = () => {
    if (!isMobile()) return;

    // Kandidaten: Wrapper und Tabellen
    const candidates = document.querySelectorAll(
      ".mini-table-wrap, table.mini-table, table.g-table"
    );

    candidates.forEach((node) => {
      // Für Tabellen in einem Wrapper: auf dem Wrapper prüfen/platzieren
      const container = node.closest(".mini-table-wrap") || node;
      if (elementOverflows(container)) {
        makeOpener(container);
      }
    });
  };

  // (Re-)Attach bei Routen-/Inhaltswechsel & Resize
  useEffect(() => {
    clearOldOpeners();
    const t = setTimeout(attachOpeners, 0);

    const onResize = () => {
      clearOldOpeners();
      attachOpeners();
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
      clearOldOpeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, activeIndex]);

  // ESC zum Schließen
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  // Pfeilnavigation (←/→), deaktiviert wenn Modal offen ist
  useEffect(() => {
    const onKey = (e) => {
      if (isModalOpen) return;
      const tag = document.activeElement?.tagName;
      if (tag && ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(tag))
        return;
      if (e.key === "ArrowLeft" && prev) {
        navigate(`${basePath}/${prev.slug}`);
      } else if (e.key === "ArrowRight" && next) {
        navigate(`${basePath}/${next.slug}`);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, prev, next, basePath, navigate]);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalHtml("");
    document.body.style.overflow = "";
  };

  if (!course) {
    return <div className="g-doc grammar-page">Kurs bulunamadı.</div>;
  }
  // Während des Redirects / bei ungültigem slug kurz nichts rendern
  if (!slug || !active) return null;

  const Component = active.Component;

  // --- Wiederverwendbare Pager-UI ---
  const SectionPager = ({ pos = "" }) => (
    <nav
      className={`section-pager ${pos === "top" ? "is-top" : ""}`}
      aria-label="Bölüm geçişi (Section navigation)"
    >
      {prev ? (
        <button
          type="button"
          className="pager-link prev"
          onClick={() => navigate(`${basePath}/${prev.slug}`)}
        >
          <span className="arrow" aria-hidden>
            ←
          </span>
          <span className="title">{prev.tr}</span>
        </button>
      ) : (
        <span />
      )}

      {next ? (
        <button
          type="button"
          className="pager-link next"
          onClick={() => navigate(`${basePath}/${next.slug}`)}
        >
          <span className="title">{next.tr}</span>
          <span className="arrow" aria-hidden>
            →
          </span>
        </button>
      ) : (
        <span />
      )}
    </nav>
  );

  return (
    <div className="g-doc grammar-page">
      <SectionNav items={items} activeSlug={slug} basePath={basePath} />

      {/* NEU: Pager auch oben */}
      <SectionPager pos="top" />

      <NumberingProvider prefix={`${activeIndex + 1}`}>
        <article className="g-section" id={active.slug}>
          <SectionHeader title={active.tr} tr={active.title} />
          <Component />
        </article>
      </NumberingProvider>

      {/* Bestehender Pager unten */}
      <SectionPager />

      {isModalOpen && (
        <div
          className="wide-modal-backdrop"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="wide-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Tam ekran tablo (Full screen table)"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="wide-modal-head">
              <div className="wide-modal-title">
                Tablo — Tam ekran (Full screen)
              </div>
              <button
                type="button"
                className="wide-modal-close"
                aria-label="Kapat"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div
              ref={modalBodyRef}
              className="wide-modal-body"
              // Die Tabelle stammt aus deiner App und ist statisch — daher ok:
              dangerouslySetInnerHTML={{ __html: modalHtml }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
