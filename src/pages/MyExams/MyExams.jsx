import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./myExams.scss";

export default function MyExams() {
  const exams = useSelector((state) => state.exam.exams);
  const navigate = useNavigate();

  // Lokale Listen (pro scriptType = "base-target")
  const [list1, setList1] = useState(
    () => JSON.parse(localStorage.getItem("examList1")) || {}
  );
  const [list2, setList2] = useState(
    () => JSON.parse(localStorage.getItem("examList2")) || {}
  );

  // Persistenz
  useEffect(
    () => localStorage.setItem("examList1", JSON.stringify(list1)),
    [list1]
  );
  useEffect(
    () => localStorage.setItem("examList2", JSON.stringify(list2)),
    [list2]
  );

  // ================
  //   Synchronisation mit Redux (exams)
  // ================
  const idsByScript = useMemo(() => {
    const map = {};
    for (const it of exams) {
      const key = `${it.base}-${it.target}`;
      if (!map[key]) map[key] = new Set();
      map[key].add(it.id);
    }
    return map;
  }, [exams]);

  useEffect(() => {
    const clean = (prev) => {
      const next = { ...prev };
      for (const script of Object.keys(next)) {
        const allowed = idsByScript[script] || new Set();
        const filtered = (next[script] || []).filter((item) =>
          allowed.has(item.id)
        );
        if (filtered.length) next[script] = filtered;
        else delete next[script];
      }
      return next;
    };
    setList1((p) => clean(p));
    setList2((p) => clean(p));
  }, [idsByScript]);

  // Gruppiert die verfügbaren Exam-Wörter pro Sprachpaar
  const groupedByScript = useMemo(() => {
    return exams.reduce((acc, item) => {
      const key = `${item.base}-${item.target}`;
      (acc[key] ??= []).push(item);
      return acc;
    }, {});
  }, [exams]);

  // Helpers
  const isInList = (scriptType, listState, item) =>
    (listState[scriptType] || []).some((v) => v.id === item.id);

  const toggleItem = (scriptType, listState, setListState, item) => {
    const current = listState[scriptType] || [];
    const exists = current.find((v) => v.id === item.id);

    if (exists) {
      setListState({
        ...listState,
        [scriptType]: current.filter((v) => v.id !== item.id),
      });
    } else if (current.length < 10) {
      setListState({ ...listState, [scriptType]: [...current, item] });
    }
  };

  // Einzelnes Entfernen direkt aus List 1/2
  const removeFromList = (scriptType, setListState, itemId) => {
    setListState((prev) => {
      const curr = prev[scriptType] || [];
      const next = curr.filter((it) => it.id !== itemId);
      const clone = { ...prev };
      if (next.length) clone[scriptType] = next;
      else delete clone[scriptType];
      return clone;
    });
  };

  const handleStartExam = (scriptType, list) => {
    navigate("/exam", { state: { vocabList: list, scriptType } });
  };

  return (
    <div className="MyExams">
      <h1 className="page-title">My Exam Words</h1>

      {Object.entries(groupedByScript).map(([scriptType, items]) => {
        const count1 = list1[scriptType]?.length || 0;
        const count2 = list2[scriptType]?.length || 0;

        return (
          <section key={scriptType} className="script-card">
            <header className="card-head">
              <h2>{scriptType}</h2>
              <div className="counters" aria-live="polite">
                <span>List 1: {count1}/10</span>
                <span>List 2: {count2}/10</span>
              </div>
            </header>

            {/* Tabelle der verfügbaren Wörter (aus Redux exams) */}
            <table className="exam-table">
              <thead>
                <tr>
                  <th>Vocabulary</th>
                  <th className="actions-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="muted">
                      No words available.
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td className="vocab-cell">
                        <span className="base">{item[item.base]}</span>
                        <span className="sep">—</span>
                        <span className="target">
                          {item.translation[item.target]}
                        </span>
                      </td>
                      <td className="actions-cell">
                        <div className="row-actions">
                          <button
                            className={`mini ${
                              isInList(scriptType, list1, item)
                                ? "outline"
                                : "primary"
                            }`}
                            onClick={() =>
                              toggleItem(scriptType, list1, setList1, item)
                            }
                          >
                            {isInList(scriptType, list1, item)
                              ? "Remove 1"
                              : "Add to 1"}
                          </button>
                          <button
                            className={`mini ${
                              isInList(scriptType, list2, item)
                                ? "outline"
                                : "secondary"
                            }`}
                            onClick={() =>
                              toggleItem(scriptType, list2, setList2, item)
                            }
                          >
                            {isInList(scriptType, list2, item)
                              ? "Remove 2"
                              : "Add to 2"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Zwei Listen (je 10 Slots) */}
            <div className="lists-grid">
              {/* List 1 */}
              <div className="exam-list">
                <div className="list-head">
                  <h3>List 1</h3>
                  <span className="badge">{count1}/10</span>
                </div>
                <table>
                  <tbody>
                    {(list1[scriptType] || []).map((it) => (
                      <tr key={it.id}>
                        <td>{it[it.base]}</td>
                        <td>{it.translation[it.target]}</td>
                        <td className="tight">
                          <button
                            className="icon-btn"
                            title="Remove from List 1"
                            onClick={() =>
                              removeFromList(scriptType, setList1, it.id)
                            }
                            aria-label={`Remove ${it[it.base]} from List 1`}
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                    {Array.from({ length: Math.max(0, 10 - count1) }).map(
                      (_, i) => (
                        <tr key={`empty1-${i}`} className="empty">
                          <td colSpan={3}>&nbsp;</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* List 2 */}
              <div className="exam-list">
                <div className="list-head">
                  <h3>List 2</h3>
                  <span className="badge">{count2}/10</span>
                </div>
                <table>
                  <tbody>
                    {(list2[scriptType] || []).map((it) => (
                      <tr key={it.id}>
                        <td>{it[it.base]}</td>
                        <td>{it.translation[it.target]}</td>
                        <td className="tight">
                          <button
                            className="icon-btn"
                            title="Remove from List 2"
                            onClick={() =>
                              removeFromList(scriptType, setList2, it.id)
                            }
                            aria-label={`Remove ${it[it.base]} from List 2`}
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                    {Array.from({ length: Math.max(0, 10 - count2) }).map(
                      (_, i) => (
                        <tr key={`empty2-${i}`} className="empty">
                          <td colSpan={3}>&nbsp;</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Start Buttons */}
            <div className="start-row">
              <button
                className={`btn primary ${count1 !== 10 ? "disabled" : ""}`}
                disabled={count1 !== 10}
                onClick={() =>
                  handleStartExam(scriptType, list1[scriptType] || [])
                }
              >
                Start exam with List 1
              </button>
              <button
                className={`btn outline ${count2 !== 10 ? "disabled" : ""}`}
                disabled={count2 !== 10}
                onClick={() =>
                  handleStartExam(scriptType, list2[scriptType] || [])
                }
              >
                Start exam with List 2
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
