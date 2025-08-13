import React, { useEffect, useState } from "react";

/** Horizontale Abschnitts-Navigation (Chips) – nutzt vorhandene .g-section > h2 */
export default function JumpRow() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const list = Array.from(document.querySelectorAll(".g-section")).map(
      (el, i) => {
        const raw = el.querySelector("h2")?.textContent?.trim() || `Abschnitt ${i + 1}`;
        // Klammerzusätze ( … ) und führende Nummern "3) " entfernen
        const noParen = raw.replace(/\s*\([^)]*\)\s*$/, "");
        const clean = noParen.replace(/^\s*\d+\)\s*/, "").trim();
        return { id: el.id, idx: i + 1, title: clean };
      }
    );
    setItems(list);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const cssVal = getComputedStyle(document.documentElement)
      .getPropertyValue("--header-h")
      .trim();
    const headerH = Number.isFinite(parseFloat(cssVal)) ? parseFloat(cssVal) : 0;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 6;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <div className="jump-row" role="navigation" aria-label="Abschnitte">
      {items.map((it) => (
        <button key={it.id} className="jump-chip" onClick={() => go(it.id)}>
          <span className="chip-num">{it.idx}</span>
          <span className="chip-title">{it.title}</span>
        </button>
      ))}
    </div>
  );
}
