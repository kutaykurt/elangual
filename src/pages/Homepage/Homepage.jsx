import React, { useEffect, useState } from "react";
import "./homepage.scss";
import { fetchVocabularyData } from "../../fetchVocabularyData";

export default function Homepage() {
  // Startseite zeigt IMMER Turkish -> English
  const HOME_BASE = "turkish";
  const HOME_TARGET = "english";

  const [randomVocabs, setRandomVocabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const loadRandom = async () => {
    try {
      setLoading(true);
      setErr(null);
      const data = await fetchVocabularyData(HOME_BASE, HOME_TARGET);
      const clean = data.filter(
        (i) => i[HOME_BASE] && i.translation && i.translation[HOME_TARGET]
      );
      const shuffled = [...clean].sort(() => Math.random() - 0.5);
      setRandomVocabs(shuffled.slice(0, 8));
    } catch (e) {
      setErr(e.message);
      setRandomVocabs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Homepage Main">
      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            {/* <<< No-wrap sorgt dafür, dass es in einer Zeile bleibt (Desktop) */}
            <span className="nowrap">
              <span className="brand">E-Langual</span>’a hoş geldin!
            </span>
          </h1>

          <p className="hero__subtitle">
            Bugün başla, yarın konuş. Çift yönlü sözlüklerle hızlı ve keyifli
            kelime öğren. Arayüz ve içerik artık tamamen <strong>Türkçe</strong>
            .
          </p>

          <div className="hero__cta">
            <a href="/vocabulary" className="btn btn-primary">
              Sözlükleri Keşfet
            </a>
            <a href="/myvocabularies" className="btn btn-secondary">
              Kütüphanem
            </a>
          </div>

          <div className="hero__pair">
            Anasayfadaki örnekler:{" "}
            <strong>
              {HOME_BASE} → {HOME_TARGET}
            </strong>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>Akıllı Arama</h3>
          <p>Hızlı, toleranslı arama ile aradığın kelimeyi anında bul.</p>
        </div>
        <div className="feature">
          <h3>Bir Tıkla Ekle</h3>
          <p>Kelimeyi “Kütüphanem”e ve “Sınavlarım”a tek dokunuşla ekle.</p>
        </div>
        <div className="feature">
          <h3>Mobil Uyumlu</h3>
          <p>Telefon, tablet ve masaüstünde pürüzsüz deneyim.</p>
        </div>
      </section>

      {/* Random vocab list */}
      <section className="random-vocabs">
        <div className="section-header">
          <h2>İşte öğrenilecek bazı kelimeler</h2>
          <button className="btn btn-link" onClick={loadRandom}>
            Yenile
          </button>
        </div>

        {loading ? (
          <div className="skeleton-grid" aria-label="yükleniyor">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="skeleton-card" key={i} />
            ))}
          </div>
        ) : err ? (
          <div className="error-box">Bir şeyler ters gitti: {err}</div>
        ) : (
          <div className="vocab-grid">
            {randomVocabs.map((item, idx) => (
              <div className="vocab-card" key={idx}>
                <div className="vocab-card__base">{item[HOME_BASE]}</div>
                <div className="vocab-card__arrow">→</div>
                <div className="vocab-card__target">
                  {item.translation[HOME_TARGET]}
                  {item.pronunciation && HOME_TARGET === "spanish" && (
                    <span className="vocab-card__pron">
                      {" "}
                      ({item.pronunciation})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="section-cta">
          <a href="/vocabulary" className="btn btn-primary">
            Tüm kelimeleri gör
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-banner">
        <h3>Öğrenmeyi alışkanlığa çevir.</h3>
        <p>Her gün 10 yeni kelime ekle, haftada bir mini sınav çöz!</p>
        <div className="cta-banner__actions">
          <a href="/myexams" className="btn btn-secondary">
            Sınavlarım
          </a>
          <a href="/learngrammar" className="btn btn-ghost">
            Dilbilgisi
          </a>
        </div>
      </section>
    </div>
  );
}
