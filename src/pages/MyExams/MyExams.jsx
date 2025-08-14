import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromExam } from "../../redux/examSlice";
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import "./myExams.scss";

export default function MyExams() {
  const exams = useSelector((state) => state.exam.exams);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [list1, setList1] = useState(
    () => JSON.parse(localStorage.getItem("examList1")) || {}
  );
  const [list2, setList2] = useState(
    () => JSON.parse(localStorage.getItem("examList2")) || {}
  );

  useEffect(
    () => localStorage.setItem("examList1", JSON.stringify(list1)),
    [list1]
  );
  useEffect(
    () => localStorage.setItem("examList2", JSON.stringify(list2)),
    [list2]
  );

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

  const groupedByScript = useMemo(() => {
    return exams.reduce((acc, item) => {
      const key = `${item.base}-${item.target}`;
      (acc[key] ??= []).push(item);
      return acc;
    }, {});
  }, [exams]);

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

  const handleDeleteFromExams = (item) => {
    const scriptType = `${item.base}-${item.target}`;
    dispatch(removeFromExam(item.id));
    removeFromList(scriptType, setList1, item.id);
    removeFromList(scriptType, setList2, item.id);
  };

  const handleStartExam = (scriptType, list) => {
    navigate("/exam", { state: { vocabList: list, scriptType } });
  };

  return (
    <div className="MyExams">
      <SEO
        title="Sınavlarım – Elangual"
        description="Seçtiğin kelimelerle iki farklı liste oluştur; her biri 10 soruluk hızlı sınav."
        canonical="https://elangual.com/myexams"
        robots="noindex,follow"
      />

      <h1 className="page-title">Sınav Kelimelerim</h1>

      {Object.entries(groupedByScript).map(([scriptType, items]) => {
        const count1 = list1[scriptType]?.length || 0;
        const count2 = list2[scriptType]?.length || 0;

        return (
          <section key={scriptType} className="script-card">
            <header className="card-head">
              <h2>{scriptType}</h2>
              <div className="counters" aria-live="polite">
                <span>Liste 1: {count1}/10</span>
                <span>Liste 2: {count2}/10</span>
              </div>
            </header>

            <table className="exam-table">
              <thead>
                <tr>
                  <th>Kelime</th>
                  <th className="actions-col">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="muted">
                      Uygun kelime yok.
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
                            title={
                              isInList(scriptType, list1, item)
                                ? "- Liste 1"
                                : "+ Liste 1"
                            }
                          >
                            {isInList(scriptType, list1, item)
                              ? "- Liste 1"
                              : "+ Liste 1"}
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
                            title={
                              isInList(scriptType, list2, item)
                                ? "- Liste 2"
                                : "+ Liste 2"
                            }
                          >
                            {isInList(scriptType, list2, item)
                              ? "- Liste 2"
                              : "+ Liste 2"}
                          </button>

                          <button
                            className="mini danger"
                            onClick={() => handleDeleteFromExams(item)}
                            title="Sınav listesinden sil"
                            aria-label={`${
                              item[item.base]
                            } kelimesini sınav listesinden sil`}
                          >
                            Sil
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <div className="lists-grid">
              <div className="exam-list">
                <div className="list-head">
                  <h3>Liste 1</h3>
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
                            title="Liste 1'den kaldır"
                            onClick={() =>
                              removeFromList(scriptType, setList1, it.id)
                            }
                            aria-label={`${
                              it[it.base]
                            } kelimesini Liste 1'den kaldır`}
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

              <div className="exam-list">
                <div className="list-head">
                  <h3>Liste 2</h3>
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
                            title="Liste 2'den kaldır"
                            onClick={() =>
                              removeFromList(scriptType, setList2, it.id)
                            }
                            aria-label={`${
                              it[it.base]
                            } kelimesini Liste 2'den kaldır`}
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

            <div className="start-row">
              <button
                className={`btn primary ${count1 !== 10 ? "disabled" : ""}`}
                disabled={count1 !== 10}
                onClick={() =>
                  handleStartExam(scriptType, list1[scriptType] || [])
                }
              >
                Liste 1 ile sınavı başlat
              </button>
              <button
                className={`btn outline ${count2 !== 10 ? "disabled" : ""}`}
                disabled={count2 !== 10}
                onClick={() =>
                  handleStartExam(scriptType, list2[scriptType] || [])
                }
              >
                Liste 2 ile sınavı başlat
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
