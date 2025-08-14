import React, { useEffect, useRef, useState } from "react";

/* Hervorhebungen */
export const Key = ({ children }) => <mark className="key">{children}</mark>;
export const Term = ({ children }) => (
  <strong className="term">{children}</strong>
);

/* Rule / Callout / Formel / Mini-Tabelle / Beispiele */
export const Rule = ({ children }) => (
  <div className="rule-box">{children}</div>
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

export const Examples = ({ items }) => (
  <div className="examples">
    {items.map((ex, i) => (
      <p key={i}>
        <strong>{ex.en}</strong> — {ex.tr}{" "}
        {ex.pron && <span className="pron">({ex.pron})</span>}
      </p>
    ))}
  </div>
);

/* Mini-Accordion-Zeile (Aussprache) */
export const Pb2Item = ({ id, title, bullet, open, onToggle, children }) => {
  const innerRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (innerRef.current) setMaxH(innerRef.current.scrollHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [open, children]);

  return (
    <div className={`pb2-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="pb2-head"
        onClick={() => onToggle(id)}
        aria-expanded={open}
      >
        <span className="pb2-title">{title}</span>
        <span className="pb2-bullet">{bullet}</span>
        <span className="pb2-caret" aria-hidden>
          ▾
        </span>
      </button>

      <div
        className="pb2-body"
        style={{ maxHeight: open ? `${maxH}px` : 0 }}
        aria-hidden={!open}
      >
        <div ref={innerRef} className="pb2-inner">
          {children}
        </div>
      </div>
    </div>
  );
};
