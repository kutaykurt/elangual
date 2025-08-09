import React, { useMemo, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // ggf. installieren: npm i react-helmet
import "./examPage.scss";

export default function ExamPage() {
  const location = useLocation();
  const vocabList = location.state?.vocabList || [];

  // Basis / Ziel aus dem ersten Item ableiten (dein Datensatz enthält beides)
  const baseLang = vocabList[0]?.base || "base";
  const targetLang = vocabList[0]?.target || "target";

  const [answers, setAnswers] = useState(Array(vocabList.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Eingaberefs für bessere Tastatur-Navigation (Enter -> nächstes Feld)
  const inputRefs = useRef([]);

  const normalizeText = (text) =>
    (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss")
      .replace(/ş/g, "s")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ç/g, "c")
      .replace(/ñ/g, "n")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/æ/g, "ae")
      .replace(/œ/g, "oe")
      .replace(/[^a-z0-9]/g, "");

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const isCorrect = (index) =>
    normalizeText(answers[index]) ===
    normalizeText(vocabList[index]?.translation?.[targetLang]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index < vocabList.length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        // am Ende direkt abschicken
        if (!submitted) handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    let total = 0;
    vocabList.forEach((item, index) => {
      const correct = normalizeText(item.translation[item.target]);
      const userAnswer = normalizeText(answers[index]);
      if (correct === userAnswer) total += 2;
    });
    setScore(total);
    setSubmitted(true);

    // Beim Abschicken nach oben scrollen, Score in Sicht
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setAnswers(Array(vocabList.length).fill(""));
    setSubmitted(false);
    setScore(0);
    inputRefs.current[0]?.focus();
  };

  const totalPoints = vocabList.length * 2;
  const correctCount = useMemo(
    () => answers.filter((_, i) => isCorrect(i)).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [submitted] // erst nach Submit relevant
  );
  const percent = submitted ? Math.round((score / totalPoints) * 100) : 0;

  // SEO – Title/Description + JSON-LD (Quiz-ähnlich)
  const pageTitle = `Vocabulary Exam (${baseLang} → ${targetLang}) | Langual`;
  const pageDescription = `Teste deinen Wortschatz: ${baseLang} → ${targetLang}. ${vocabList.length} Vokabeln, jeweils 2 Punkte – sofortiges Feedback und Ergebnis.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `Vocabulary Exam (${baseLang} → ${targetLang})`,
    about: [`${baseLang} vocabulary`, `${targetLang} translation`],
    educationalLevel: "A1-C1",
    provider: { "@type": "Organization", name: "Langual" },
    numberOfItems: vocabList.length,
  };

  return (
    <main className="exam-page" aria-labelledby="exam-title">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href={typeof window !== "undefined" ? window.location.href : ""}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Breadcrumbs – helfen SEO & UX */}
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exams">Exams</Link>
          </li>
          <li aria-current="page">
            {baseLang} → {targetLang}
          </li>
        </ol>
      </nav>

      <header className="exam-header">
        <h1 id="exam-title">Vocabulary Exam</h1>
        <p className="subtitle">
          {baseLang} → {targetLang} • {vocabList.length} Wörter • je 2 Punkte
          (max. {totalPoints})
        </p>

        {/* Fortschritt / Ergebnis */}
        <section aria-live="polite" className="score-strip">
          {!submitted ? (
            <div className="progress">
              <div
                className="bar"
                style={{
                  width: `${Math.min(
                    (answers.filter((a) => a?.trim().length > 0).length /
                      (vocabList.length || 1)) *
                      100,
                    100
                  )}%`,
                }}
              />
            </div>
          ) : (
            <div className="result">
              <strong>Score:</strong> {score} / {totalPoints} ({percent}%)
            </div>
          )}
          <div className="controls-inline">
            {!submitted ? (
              <button
                type="button"
                className="btn primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn outline"
                  onClick={handleRetry}
                >
                  Retry
                </button>
                <Link to="/vocabulary" className="btn ghost">
                  Back to Library
                </Link>
              </>
            )}
          </div>
        </section>
      </header>

      {/* Fragenliste */}
      <form
        className="exam-form"
        onSubmit={(e) => e.preventDefault()}
        aria-describedby="exam-instructions"
      >
        <p id="exam-instructions" className="sr-only">
          Tippe deine Antworten ein und drücke Enter, um zum nächsten Feld zu
          springen.
        </p>

        {vocabList.map((item, index) => {
          const id = `q-${item.id}`;
          const correctText = item.translation?.[targetLang] || "";
          const stateClass = submitted
            ? isCorrect(index)
              ? "is-correct"
              : "is-wrong"
            : "";

          return (
            <fieldset className={`question ${stateClass}`} key={item.id}>
              <legend className="word">
                <span className="q-index">{index + 1}.</span>{" "}
                <span className="base">{item[item.base]}</span>
              </legend>

              <div className="answer-row">
                <label className="sr-only" htmlFor={id}>
                  {item[item.base]} – your answer
                </label>
                <input
                  id={id}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="text"
                  autoComplete="off"
                  placeholder={`Type in ${targetLang}…`}
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  disabled={submitted}
                  aria-invalid={submitted && !isCorrect(index)}
                />
                {submitted && (
                  <span className="state-icon" aria-hidden="true">
                    {isCorrect(index) ? "✓" : "✗"}
                  </span>
                )}
              </div>

              {submitted && !isCorrect(index) && (
                <div className="feedback" role="note">
                  Correct: <strong>{correctText}</strong>
                </div>
              )}
            </fieldset>
          );
        })}
      </form>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="sticky-actions" aria-hidden={false}>
        {!submitted ? (
          <button
            type="button"
            className="btn primary wide"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <div className="sticky-row">
            <button
              type="button"
              className="btn outline wide"
              onClick={handleRetry}
            >
              Retry
            </button>
            <Link to="/vocabulary" className="btn ghost wide">
              Back
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
