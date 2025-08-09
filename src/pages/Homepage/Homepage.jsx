// src/pages/homepage/Homepage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./homepage.scss";
import { fetchVocabularyData } from "../../fetchVocabularyData";

// Redux + IDs für Add/Remove (wie in DynamicVocabulary.jsx)
import { useDispatch, useSelector } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { addToExam, removeFromExam } from "../../redux/examSlice";
import { generateVocabularyId } from "../../getId";

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

  // Mobile-UI (wie in DynamicVocabulary.jsx)
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
      setRandomVocabs(shuffled.slice(0, 5)); // nur 5
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
      { label: "Çift yönlü sözlük", value: "10+" },
      { label: "Toplam kelime", value: "1000+" },
      { label: "Mobil uyum", value: "✔︎" },
    ],
    []
  );

  // >> NEU: Suche weiterleiten zur Vocabulary-Seite
  const submitHomeSearch = (e) => {
    e.preventDefault();
    const q = homeQuery.trim();
    // HashRouter-kompatibel: /vocabulary?q=...
    if (q) navigate(`/vocabulary?q=${encodeURIComponent(q)}`);
    else navigate(`/vocabulary`);
  };

  // Statusprüfungen & Aktionen (wie DynamicVocabulary)
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
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content">
          <div className="eyebrow">
            <span className="dot" /> E-Langual
          </div>

          <h1 className="hero__title">E-Langual</h1>

          <p className="hero__subtitle">
            Bugün başla, yarın konuş. Çift yönlü sözlüklerle hızlı ve keyifli
            kelime öğren. Arayüz ve içerik tamamen <strong>Türkçe</strong>.
          </p>

          <form
            className="hero__search"
            onSubmit={submitHomeSearch}
            role="search"
          >
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
          </form>

          <div className="hero__cta">
            <NavLink to="/vocabulary" className="btn btn-primary">
              Sözlükleri Keşfet
            </NavLink>
            <NavLink to="/myvocabularies" className="btn btn-secondary">
              Kütüphanem
            </NavLink>
            <NavLink to="/myexams" className="btn btn-secondary">
              Sınavlarım
            </NavLink>
            <NavLink to="/grammar" className="btn btn-ghost">
              Dilbilgisi
            </NavLink>
          </div>

          <div className="hero__pair">
            Örnekler:{" "}
            <strong>
              {HOME_BASE} → {HOME_TARGET}
            </strong>
          </div>

          <div className="hero__stats" role="list">
            {stats.map((s, i) => (
              <div className="stat" role="listitem" key={i}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Random vocabs (5) */}
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

                  {/* Desktop: Buttons sichtbar; Mobile: per CSS ausgeblendet */}
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

      {/* Mobile-Modal wie in DynamicVocabulary.jsx */}
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
