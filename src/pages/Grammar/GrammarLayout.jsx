// src/pages/Grammar/GrammarLayout.jsx
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Grammar.scss";

const LANGS = [
  { code: "en", label: "İngilizce", enabled: true },
  { code: "ger", label: "Almanca", enabled: true },
  { code: "es", label: "İspanyolca", enabled: true }, // aktif
];

const LEVELS = ["A1", "A2", "B1", "B2"];

export default function GrammarLayout() {
  const loc = useLocation();
  const navigate = useNavigate();

  // current language from URL (/grammar/:lang/:level)
  const [, , langSegment, levelSegment] = loc.pathname.split("/");
  const currentLang = LANGS.find((l) => l.code === langSegment)?.code || "en";
  const currentLevel = (levelSegment || "a1").toUpperCase();

  const go = (lang, level) =>
    navigate(`/grammar/${lang}/${level.toLowerCase()}`);

  return (
    <div className="grammar-layout">
      <header className="grammar-header">
        <h1 className="title">Dilbilgisi</h1>
        <p className="subtitle">Dil seçimi</p>

        <div className="lang-tabs" role="tablist" aria-label="Hedef dil">
          {LANGS.map(({ code, label, enabled }) => (
            <button
              key={code}
              role="tab"
              aria-selected={currentLang === code}
              className={`lang-tab ${currentLang === code ? "is-active" : ""}`}
              disabled={!enabled}
              title={enabled ? label : "Yakında"}
              onClick={() => enabled && go(code, currentLevel)}
            >
              {label}
              {!enabled && <span className="soon">yakında</span>}
            </button>
          ))}
        </div>

        <nav className="level-tabs" aria-label="Seviyeler">
          {LEVELS.map((lv) => (
            <button
              key={lv}
              className={`level-tab ${currentLevel === lv ? "is-active" : ""}`}
              aria-pressed={currentLevel === lv}
              onClick={() => go(currentLang, lv)}
            >
              {lv}
            </button>
          ))}
        </nav>
      </header>

      <main className="grammar-content">
        <Outlet />
      </main>
    </div>
  );
}
