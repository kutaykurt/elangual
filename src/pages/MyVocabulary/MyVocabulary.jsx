// src/pages/MyVocabulary/MyVocabulary.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeVocabulary } from "../../redux/vocabularySlice";
import "./myVocabulary.scss";

const MyVocabulary = () => {
  const dispatch = useDispatch();
  const dynamic = useSelector((s) => s.vocabulary.dynamicVocabularies);

  const fmt = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // 🔍 Prüfen, ob ALLE Listen leer sind
  const allEmpty = Object.values(dynamic).every((list) => list.length === 0);

  return (
    <div className="MyVocabulary">
      {allEmpty ? (
        <div className="no-vocab-info">
          <h2>No vocabularies yet</h2>
          <p>You haven't added any vocabulary items to your list.</p>
        </div>
      ) : (
        Object.entries(dynamic).map(([key, list]) => {
          if (!list.length) return null;
          const [base, target] = key.split("-");
          if (!base || !target) return null;

          return (
            <div className="Main" key={key}>
              <h2 className="my-table-title">
                {fmt(base)} – {fmt(target)}
              </h2>
              <table className="my-table compact">
                <thead>
                  <tr>
                    <th>{fmt(base)}</th>
                    <th>{fmt(target)}</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((v) => (
                    <tr key={v.id}>
                      <td>{v[base]}</td>
                      <td>
                        {v.translation[target]}
                        {v.pronunciation && target === "spanish" && (
                          <span
                            style={{
                              color: "#888",
                              marginLeft: "6px",
                              fontSize: "0.9em",
                            }}
                          >
                            ({v.pronunciation})
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          className="remove-button"
                          onClick={() =>
                            dispatch(
                              removeVocabulary({ id: v.id, scriptType: key })
                            )
                          }
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyVocabulary;
