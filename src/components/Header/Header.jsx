import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBaseLanguage, setTargetLanguage } from "../../redux/languagesSlice";
import "./header.scss";

/** Sprachpaare – unverändert */
const languagePairs = [
  { path: "turkish-english", label: "Tr – En" },
  { path: "turkish-german", label: "Tr – De" },
  { path: "turkish-spanish", label: "Tr – Es" },
];

/** Kleine helper-Komponente für JSON-LD (SEO) */
function SeoSchema() {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const siteNav = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Dilbilgisi", "Sözlükler", "Kütüphanem", "Sınavlarım"],
    url: [
      `${origin}/grammar`,
      `${origin}/vocabulary`,
      `${origin}/myvocabularies`,
      `${origin}/myexams`,
    ],
  };
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Langual",
    url: origin || "https://example.com",
    slogan: "Dilleri öğren. Dünyaları keşfet.",
    brand: {
      "@type": "Brand",
      name: "Langual",
    },
  };

  const json = JSON.stringify([siteNav, org]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
      // eslint-disable-next-line react/no-danger
    />
  );
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { baseLanguage, targetLanguage } = useSelector((s) => s.languages);
  const vocabularies = useSelector((s) => s.vocabulary.dynamicVocabularies);

  const vocabCount = Object.values(vocabularies).reduce(
    (acc, list) => acc + (list?.length || 0),
    0
  );

  const handleLanguage = (pair) => {
    const [base, target] = pair.split("-");
    dispatch(setBaseLanguage(base));
    dispatch(setTargetLanguage(target));
    localStorage.setItem("baseLanguage", base);
    localStorage.setItem("targetLanguage", target);
    if (location.pathname !== "/vocabulary") navigate("/vocabulary");
  };

  const currentPair = `${baseLanguage}-${targetLanguage}` || "turkish-english";

  // Mobile-Chips nur auf der Vocabulary-Seite
  const showMobileLangRail =
    location.pathname === "/vocabulary" ||
    location.pathname.startsWith("/vocabulary/");

  return (
    <header className="AppHeader" role="banner">
      {/* SEO: JSON-LD */}
      <SeoSchema />

      {/* Skip-Link */}
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>

      {/* Topbar */}
      <div className="topbar" aria-hidden="true" />

      {/* Navbar */}
      <div
        className="container navwrap"
        itemScope
        itemType="https://schema.org/Brand"
      >
        {/* Brand / Logo */}
        <div className="brand">
          <NavLink
            to="/"
            className="brand__link"
            aria-label="E-Langual Ana sayfa"
            itemProp="url"
            rel="home"
          >
            <span className="brand__badge" aria-hidden>
              <span className="brand__badge-glow" />
              <span className="brand__badge-e">E</span>
            </span>
            <span className="brand__name" itemProp="name">
              Langual
            </span>
          </NavLink>
          <span className="brand__tag" itemProp="slogan">
            Dilleri öğren. Dünyaları keşfet.
          </span>
        </div>

        {/* Primary Nav (mit Listenstruktur für bessere Semantik/SEO) */}
        <nav
          className="nav"
          aria-label="Birincil menü"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/grammar" className="nav__link" itemProp="url">
                <span itemProp="name">Dilbilgisi</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/vocabulary" className="nav__link" itemProp="url">
                <span itemProp="name">Sözlükler</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/myvocabularies"
                className="nav__link"
                itemProp="url"
              >
                <span itemProp="name">Kütüphanem</span>
                {vocabCount > 0 && (
                  <span className="badge" aria-label={`Toplam ${vocabCount}`}>
                    {vocabCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/myexams" className="nav__link" itemProp="url">
                <span itemProp="name">Sınavlarım</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop: Language Dropdown (unverändert von der Logik) */}
        <div className="lang-select desktop-only">
          <label htmlFor="lang-dd" className="sr-only">
            Dil çifti
          </label>
          <select
            id="lang-dd"
            value={currentPair}
            onChange={(e) => handleLanguage(e.target.value)}
            aria-label="Dil çifti seç"
          >
            {languagePairs.map(({ path, label }) => (
              <option key={path} value={path}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile: Chip-Rail nur auf /vocabulary */}
      {showMobileLangRail && (
        <div className="lang-rail mobile-only" aria-label="Dil çifti rayı">
          <div className="rail container">
            {languagePairs.map(({ path, label }) => (
              <button
                key={path}
                type="button"
                className={`chip ${currentPair === path ? "is-active" : ""}`}
                aria-pressed={currentPair === path}
                onClick={() => handleLanguage(path)}
                title={`${label} sözlük`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
