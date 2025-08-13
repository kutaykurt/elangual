import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./homepage.scss";
import { fetchVocabularyData } from "../../fetchVocabularyData";

import { useDispatch, useSelector } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { addToExam, removeFromExam } from "../../redux/examSlice";
import { generateVocabularyId } from "../../getId";

/* Mini-Icons */
const IconBooks = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M4 4h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4v-2h6a4 4 0 0 1 4 4V6a2 2 0 0 1 2-2h4v2h-4v12h4v2h-4a4 4 0 0 1-4-4H4V4z"
    />
  </svg>
);
const IconWords = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M4 5h16v2H4V5zm0 4h12v2H4V9zm0 4h10v2H4v-2zm0 4h8v2H4v-2z"
    />
  </svg>
);
const IconMobile = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm5 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 20z"
    />
  </svg>
);

/* Feature-Icons */
const IconGrammar = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M4 6h16v2H4V6zm0 4h10v2H4v-2zm0 4h16v2H4v-2zm12 4h4v2h-4v-2z"
    />
  </svg>
);
const IconDictionary = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6 4h9a3 3 0 0 1 3 3v13l-3-2-3 2-3-2-3 2V7a3 3 0 0 1 3-3z"
    />
  </svg>
);
const IconLibrary = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M3 5h4v14H3V5zm7 0h4v14h-4V5zm7 0h4v14h-4V5z"
    />
  </svg>
);
const IconExam = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M5 3h14a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3V5a2 2 0 0 1 2-2zm2 6h10v2H7V9zm0 4h8v2H7v-2z"
    />
  </svg>
);

/* JSON-LD für WebSite + Suchfunktion (SEO) */
function SeoHomeSchema() {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://example.com";
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Langual",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/vocabulary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
      // eslint-disable-next-line react/no-danger
    />
  );
}

export default function Homepage() {
  // Startseite zeigt IMMER Turkish -> English
  const HOME_BASE = "turkish";
  const HOME_TARGET = "english";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allVocabs = useSelector((s) => s.vocabulary.dynamicVocabularies);
  const exams = useSelector((s) => s.exam.exams);
  const scriptType = `${HOME_BASE}-${HOME_TARGET}`;
  const savedList = allVocabs[scriptType] || [];

  const [randomVocabs, setRandomVocabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [homeQuery, setHomeQuery] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 560);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const loadRandom = async () => {
    try {
      setLoading(true);
      setErr(null);
      const data = await fetchVocabularyData(HOME_BASE, HOME_TARGET);

      const clean = data
        .filter(
          (i) => i[HOME_BASE] && i.translation && i.translation[HOME_TARGET]
        )
        .map((curr) => ({
          ...curr,
          id: generateVocabularyId(curr, HOME_BASE, HOME_TARGET),
        }));

      const shuffled = [...clean].sort(() => Math.random() - 0.5);
      setRandomVocabs(shuffled.slice(0, 5));
    } catch (e) {
      setErr(e.message || "Unknown error");
      setRandomVocabs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandom();
  }, []);

  const stats = useMemo(
    () => [
      { label: "Çift yönlü sözlük", value: "10+", icon: IconBooks },
      { label: "Toplam kelime", value: "1000+", icon: IconWords },
      { label: "Mobil uyum", value: "✔︎", icon: IconMobile },
    ],
    []
  );

  const submitHomeSearch = (e) => {
    e.preventDefault();
    const q = homeQuery.trim();
    if (q) navigate(`/vocabulary?q=${encodeURIComponent(q)}`);
    else navigate(`/vocabulary`);
  };

  const isInList = (item) => savedList.some((v) => v.id === item.id);
  const isInExam = (item) => exams.some((v) => v.id === item.id);

  const handleAddVocabulary = (item) =>
    dispatch(
      addVocabulary({
        newVocabulary: { ...item, base: HOME_BASE, target: HOME_TARGET },
        scriptType,
      })
    );
  const handleRemoveVocabulary = (item) =>
    dispatch(removeVocabulary({ id: item.id, scriptType }));
  const handleAddExam = (item) =>
    dispatch(addToExam({ ...item, base: HOME_BASE, target: HOME_TARGET }));
  const handleRemoveExam = (item) => dispatch(removeFromExam(item.id));
  const handleRemoveCompletely = (item) => {
    dispatch(removeVocabulary({ id: item.id, scriptType }));
    dispatch(removeFromExam(item.id));
  };

  const selectedItem = randomVocabs.find((i) => i.id === openDropdownId);

  return (
    <div className="Homepage Main">
      {/* SEO */}
      <SeoHomeSchema />

      {/* Header: Titel + Untertitel + Navigationen */}
      <section className="hp-header">
        <div className="hp-header__bg" aria-hidden="true" />
        <div className="hp-header__inner">
          {/* Neuer Brand-Titel (ohne Bindestrich) */}
          <h1
            className="hp-brand-title"
            aria-label="E Langual"
            itemProp="headline"
          >
            <span className="hp-brand-badge" aria-hidden>
              <span className="hp-badge-glow" />
              <span className="hp-badge-e">Bugün öğren - </span>
            </span>
            <span className="hp-brand-name">yarın konuş</span>
          </h1>

          {/* <p className="hp-subtitle">Bugün başla, yarın konuş.</p> */}

          {/* Navigationen */}
          {/* <div className="hp-nav">
            <NavLink to="/grammar" className="btn btn-primary">
              Dilbilgisi
            </NavLink>
            <NavLink to="/vocabulary" className="btn btn-secondary">
              Sözlükler
            </NavLink>
            <NavLink to="/myvocabularies" className="btn btn-secondary">
              Kütüphanem
            </NavLink>
            <NavLink to="/myexams" className="btn btn-ghost">
              Sınavlarım
            </NavLink>
          </div> */}

          {/* Suche */}
          <form className="hp-search" onSubmit={submitHomeSearch} role="search">
            <div className="search-group">
              <input
                type="search"
                placeholder="Kelime ara…"
                value={homeQuery}
                onChange={(e) => setHomeQuery(e.target.value)}
                aria-label="Kelime ara"
              />
              <button type="submit" className="btn btn-primary">
                Ara
              </button>
            </div>
          </form>

          {/* Kennzahlen */}
          <div className="hp-stats" role="list">
            {stats.map((s, i) => {
              const Ico = s.icon;
              return (
                <div className="stat" role="listitem" key={i}>
                  <div className="stat__icon">
                    <Ico />
                  </div>
                  <div className="stat__text">
                    <div className="stat__value">{s.value}</div>
                    <div className="stat__label">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Einleitungsblock zu den Bereichen */}
      <section className="hp-intro">
        <div className="hp-intro__grid">
          <article className="intro-card">
            <div className="intro-icon">
              <IconGrammar />
            </div>
            <h3>Dilbilgisi</h3>
            <p>
              Kısa, anlaşılır kurallar ve örneklerle temeli sağlamlaştır. A1’den
              ileri seviyeye kadar düzenli içerik.
            </p>
            <NavLink to="/grammar" className="link">
              Sayfaya git →
            </NavLink>
          </article>

          <article className="intro-card">
            <div className="intro-icon">
              <IconDictionary />
            </div>
            <h3>Sözlükler</h3>
            <p>
              Çift yönlü arama, net çeviriler ve telaffuz odaklı notlarla hızlı
              kelime keşfi.
            </p>
            <NavLink to="/vocabulary" className="link">
              Sözlüklere göz at →
            </NavLink>
          </article>

          <article className="intro-card">
            <div className="intro-icon">
              <IconLibrary />
            </div>
            <h3>Kütüphanem</h3>
            <p>
              Seçtiğin kelimeleri tek yerde topla, grupla ve çalış. İlerlemeni
              kendine göre düzenle.
            </p>
            <NavLink to="/myvocabularies" className="link">
              Kütüphaneyi aç →
            </NavLink>
          </article>

          <article className="intro-card">
            <div className="intro-icon">
              <IconExam />
            </div>
            <h3>Sınavlarım</h3>
            <p>
              Hedefli alıştırmalar ve puan sistemiyle öğrenmeni ölç. 10
              kelimelik hızlı testler.
            </p>
            <NavLink to="/myexams" className="link">
              Sınava başla →
            </NavLink>
          </article>
        </div>
      </section>

      {/* Zufällige Vokabeln */}
      <section className="random-vocabs">
        <div className="section-header">
          <h2>İşte öğrenilecek bazı kelimeler</h2>
          <button
            className="btn btn-refresh"
            onClick={loadRandom}
            title="Yenile"
            type="button"
          >
            🔄 Yenile
          </button>
        </div>

        {loading ? (
          <div className="skeleton-grid" aria-label="yükleniyor">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="skeleton-card" key={i} />
            ))}
          </div>
        ) : err ? (
          <div className="error-box">Bir şeyler ters gitti: {err}</div>
        ) : (
          <div className="vocab-grid">
            {randomVocabs.map((item) => {
              const inList = isInList(item);
              const inExam = isInExam(item);

              return (
                <div
                  className="vocab-row"
                  key={item.id}
                  onClick={() => isMobile && setOpenDropdownId(item.id)}
                  role={isMobile ? "button" : undefined}
                  tabIndex={isMobile ? 0 : -1}
                >
                  <div className="vocab-left">
                    <div className="vocab-card__base" aria-label={HOME_BASE}>
                      {item[HOME_BASE]}
                    </div>
                    <div className="vocab-card__arrow" aria-hidden="true">
                      →
                    </div>
                    <div
                      className="vocab-card__target"
                      aria-label={HOME_TARGET}
                    >
                      {item.translation[HOME_TARGET]}
                    </div>
                  </div>

                  <div className="row-actions">
                    <button
                      type="button"
                      className={`mini ${inList ? "outline" : "primary"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        inList
                          ? handleRemoveVocabulary(item)
                          : handleAddVocabulary(item);
                      }}
                      title={inList ? "Kütüphaneden çıkar" : "Kütüphaneye ekle"}
                    >
                      {inList ? "− Kütüphane" : "+ Kütüphane"}
                    </button>
                    <button
                      type="button"
                      className={`mini ${inExam ? "outline" : "secondary"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        inExam ? handleRemoveExam(item) : handleAddExam(item);
                      }}
                      title={inExam ? "Sınavlardan çıkar" : "Sınavlara ekle"}
                    >
                      {inExam ? "− Sınav" : "+ Sınav"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Mobile-Modal */}
      {isMobile && selectedItem && (
        <div
          className="mobile-modal-backdrop"
          onClick={() => setOpenDropdownId(null)}
        >
          <div
            className="mobile-modal-content open"
            onClick={(e) => e.stopPropagation()}
            ref={dropdownRef}
          >
            <button
              className="close-button"
              onClick={() => setOpenDropdownId(null)}
              aria-label="Kapat"
              type="button"
            >
              ✕
            </button>

            <div className="mobile-word">
              <div className="base">{selectedItem[HOME_BASE]}</div>
              <div className="arrow">→</div>
              <div className="target">
                {selectedItem.translation[HOME_TARGET]}
              </div>
            </div>

            <div className="modal-actions">
              {isInList(selectedItem) ? (
                <button
                  onClick={() => handleRemoveVocabulary(selectedItem)}
                  type="button"
                >
                  Kütüphaneden çıkar
                </button>
              ) : (
                <button
                  onClick={() => handleAddVocabulary(selectedItem)}
                  type="button"
                >
                  Kütüphaneye ekle
                </button>
              )}
              {isInExam(selectedItem) ? (
                <button
                  onClick={() => handleRemoveExam(selectedItem)}
                  type="button"
                >
                  Sınavlardan çıkar
                </button>
              ) : (
                <button
                  onClick={() => handleAddExam(selectedItem)}
                  type="button"
                >
                  Sınavlara ekle
                </button>
              )}
              {(isInList(selectedItem) || isInExam(selectedItem)) && (
                <button
                  className="remove-completely-button"
                  onClick={() => handleRemoveCompletely(selectedItem)}
                  type="button"
                >
                  Tamamen kaldır
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
