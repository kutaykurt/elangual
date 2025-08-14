import React, { useMemo, useState, useRef, useEffect, useContext } from "react";

/* ---------- Kleine, wiederverwendbare UI-Bausteine ---------- */
export const Key = ({ children }) => <mark className="key">{children}</mark>;
export const Term = ({ children }) => (
  <strong className="term">{children}</strong>
);

export const Callout = ({ type = "tip", title, children }) => (
  <div className={`callout ${type}`}>
    {title && <div className="callout-title">{title}</div>}
    <div className="callout-body">{children}</div>
  </div>
);

export const Formula = ({ rows = [] }) => (
  <div className="formula">
    {rows.map((r, i) => (
      <div className="formula-row" key={i}>
        <span className="part">{r[0]}</span>
        <span className="arrow">→</span>
        <span className="result">{r[1]}</span>
        {r[2] && <span className="hint-inline">{r[2]}</span>}
      </div>
    ))}
  </div>
);

export const MiniTable = ({ head = [], rows = [] }) => (
  <div className="mini-table-wrap">
    <table className="mini-table">
      {head.length > 0 && (
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Examples = ({ items = [] }) => (
  <div className="examples">
    {items.map((ex, i) => (
      <p key={i}>
        <strong>{ex.en}</strong> — {ex.tr}{" "}
        {ex.pron && <span className="pron">({ex.pron})</span>}
      </p>
    ))}
  </div>
);

/* ---------- Übungen / Alıştırmalar ---------- */
const normalize = (s = "") =>
  s.toLowerCase().replaceAll("’", "'").replace(/\s+/g, " ").trim();

/** Lückentext-Übung (pro Abschnitt) */
export function ExerciseFill({
  items = [],
  title = "Alıştırma: Boşluk Doldurma (Gap-fill)",
}) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(items.map((i) => [i.id, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const r = {};
    items.forEach((it) => {
      const user = normalize(values[it.id]);
      const ok = (it.answers || []).some((a) => normalize(a) === user);
      r[it.id] = { ok, user, answers: it.answers, hint: it.hint };
    });
    return r;
  }, [values, items]);

  const correctCount = useMemo(
    () => Object.values(result).filter((x) => x.ok).length,
    [result]
  );

  const hint = (t) => (t ? <span className="hint">({t})</span> : null);

  return (
    <div className="qp">
      <div className="qp-headline">{title}</div>
      <div className="qp-list">
        {items.map((it, idx) => {
          const state = result[it.id];
          const cls =
            submitted && state
              ? state.ok
                ? "qp-input is-correct"
                : "qp-input is-wrong"
              : "qp-input";
          return (
            <div className="qp-item" key={it.id}>
              <div className="qp-prompt">
                <span className="idx">{idx + 1}.</span> <span>{it.before}</span>
                <input
                  className={cls}
                  type="text"
                  value={values[it.id]}
                  onChange={(e) =>
                    setValues((s) => ({ ...s, [it.id]: e.target.value }))
                  }
                  disabled={submitted}
                />
                <span>{it.after}</span> {hint(it.hint)}
              </div>
              {submitted && !state.ok && (
                <div className="qp-feedback">
                  ❌ Doğru cevap: <em>{it.answers.join(" / ")}</em>
                </div>
              )}
              {submitted && state.ok && (
                <div className="qp-feedback ok">✔️ Doğru</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="qp-actions">
        {!submitted ? (
          <button className="primary-btn" onClick={() => setSubmitted(true)}>
            Kontrol et
          </button>
        ) : (
          <>
            <div className="qp-score">
              {correctCount} / {items.length} doğru
            </div>
            <button
              className="ghost-btn"
              onClick={() => {
                setSubmitted(false);
                setValues(Object.fromEntries(items.map((i) => [i.id, ""])));
              }}
            >
              Yeniden başlat
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/** Mini Multiple-Choice (pro Abschnitt) */
export function ExerciseMC({ items = [], title = "Mini Test (Mini Quiz)" }) {
  const [answers, setAnswers] = useState({});
  return (
    <div className="mini-mc">
      <div className="qp-headline">{title}</div>
      {items.map((it, i) => {
        const picked = answers[i];
        const isDone = picked !== undefined;
        return (
          <div className="mini-mc-item" key={i}>
            <div className="q">
              {i + 1}. {it.q}
            </div>
            <div className="choices">
              {it.choices.map((c, idx) => {
                const isCorrect = idx === it.correctIndex;
                const cls = isDone
                  ? idx === picked
                    ? isCorrect
                      ? "choice correct"
                      : "choice wrong"
                    : "choice disabled"
                  : "choice";
                return (
                  <button
                    key={idx}
                    className={cls}
                    onClick={() => setAnswers((s) => ({ ...s, [i]: idx }))}
                    disabled={isDone}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            {isDone && (
              <div
                className={`mc-feedback ${
                  picked === it.correctIndex ? "ok" : "bad"
                }`}
              >
                {picked === it.correctIndex ? "✔️ Doğru!" : "❌ Yanlış."}{" "}
                <span className="tr">{it.explain}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Nummerierung (Abschnitt / Unterabschnitt) ---------- */
const NumberingContext = React.createContext({
  prefix: "?",
  subRef: { current: 0 },
});

export function NumberingProvider({ prefix, children }) {
  const subRef = useRef(0);
  useEffect(() => {
    subRef.current = 0; // bei neuem Abschnitt Unterzähler reset
  }, [prefix]);
  return (
    <NumberingContext.Provider value={{ prefix, subRef }}>
      {children}
    </NumberingContext.Provider>
  );
}

export function SectionHeader({ title, tr }) {
  const { prefix } = useContext(NumberingContext);
  return (
    <h2 className="section-title">
      <span className="no">{prefix})</span> {title}{" "}
      {tr ? <span className="tr">({tr})</span> : null}
    </h2>
  );
}

export function Sub({ title }) {
  const { prefix, subRef } = useContext(NumberingContext);

  // Einmalige Vergabe der laufenden Nummer pro Instanz
  const myIndexRef = useRef(null);
  if (myIndexRef.current === null) {
    myIndexRef.current = subRef.current + 1;
    subRef.current = myIndexRef.current;
  }

  const label = `${prefix}.${myIndexRef.current}`;
  return (
    <h3 className="sub">
      <span className="sub-no">{label})</span> {title}
    </h3>
  );
}
