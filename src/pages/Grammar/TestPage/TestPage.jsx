import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
// ❌ Direkt-Import aus public nicht erlaubt – vorübergehend auskommentiert
// import { tests } from "../../../../public/data/testData";
import "./TestPage.scss";

const TestPage = () => {
  const { testId } = useParams();

  // Vorübergehend leeres Array als Fallback
  // TODO: Später per fetch(`${process.env.PUBLIC_URL}/data/testData.json`) laden
  const testData = useMemo(() => {
    // return tests[testId] ?? [];
    return [];
  }, [testId]);

  const [inputs, setInputs] = useState(Array(testData.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [showOnlyWrong, setShowOnlyWrong] = useState(false);

  const visibleItems = useMemo(() => {
    if (!submitted || !showOnlyWrong) return testData;
    return testData.filter((item, idx) => {
      const ok =
        (inputs[idx] ?? "").trim().toLowerCase() === item.answer.toLowerCase();
      return !ok;
    });
  }, [submitted, showOnlyWrong, inputs, testData]);

  const correctCount = useMemo(() => {
    return testData.reduce((acc, item, idx) => {
      const ok =
        (inputs[idx] ?? "").trim().toLowerCase() === item.answer.toLowerCase();
      return acc + (ok ? 1 : 0);
    }, 0);
  }, [inputs, testData]);

  const handleChange = (idx, value) => {
    const clone = [...inputs];
    clone[idx] = value;
    setInputs(clone);
  };

  const handleSubmit = () => setSubmitted(true);

  const handleReset = () => {
    setInputs(Array(testData.length).fill(""));
    setSubmitted(false);
    setShowOnlyWrong(false);
  };

  const progress = Math.round(
    (inputs.filter((v) => v.trim() !== "").length /
      Math.max(1, testData.length)) *
      100
  );

  return (
    <div className="test-page">
      <div className="header-row">
        <h1>Test: {testId}</h1>

        <div className="score">
          <div className="progress" aria-label={`Fortschritt ${progress}%`}>
            <div className="bar" style={{ width: `${progress}%` }} />
          </div>
          {submitted && (
            <div className="result">
              {correctCount} / {testData.length} richtig ·{" "}
              <strong>
                {Math.round(
                  (correctCount / Math.max(1, testData.length)) * 100
                )}
                %
              </strong>
            </div>
          )}
        </div>
      </div>

      {testData.length === 0 ? (
        <p>⚠️ Kein Test gefunden.</p>
      ) : (
        visibleItems.map((item, index) => {
          const realIndex =
            submitted && showOnlyWrong
              ? testData.findIndex((t) => t === item)
              : index;

          const isCorrect =
            (inputs[realIndex] ?? "").trim().toLowerCase() ===
            item.answer.toLowerCase();
          const parts = item.sentence.split("__________");

          return (
            <div key={realIndex} className="test-question">
              <p>
                {parts[0]}
                <input
                  type="text"
                  value={inputs[realIndex]}
                  onChange={(e) => handleChange(realIndex, e.target.value)}
                  disabled={submitted && !showOnlyWrong}
                  className={
                    submitted ? (isCorrect ? "correct" : "incorrect") : ""
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !submitted) handleSubmit();
                  }}
                  aria-label={`Antwort zu Frage ${realIndex + 1}`}
                />
                {parts[1]}
              </p>
              {submitted && (
                <p className={isCorrect ? "correct-text" : "incorrect-text"}>
                  {isCorrect
                    ? "✔️ Richtig"
                    : `❌ Falsch – richtig: ${item.answer}`}
                </p>
              )}
            </div>
          );
        })
      )}

      <div className="btn-row">
        {!submitted && testData.length > 0 && (
          <button onClick={handleSubmit} className="submit-btn">
            Fertig
          </button>
        )}

        {submitted && (
          <>
            <button
              className="ghost-btn"
              onClick={() => setShowOnlyWrong(!showOnlyWrong)}
            >
              {showOnlyWrong ? "Alle anzeigen" : "Nur falsche wiederholen"}
            </button>
            <button className="secondary-btn" onClick={handleReset}>
              Neu starten
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
