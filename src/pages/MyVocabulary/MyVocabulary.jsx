import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeVocabulary } from "../../redux/vocabularySlice";
import SEO from "../../components/SEO";
import "./myVocabulary.scss";

const MyVocabulary = () => {
  const dispatch = useDispatch();
  const dynamic = useSelector((s) => s.vocabulary.dynamicVocabularies);

  const fmt = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const allEmpty = Object.values(dynamic).every((list) => list.length === 0);

  return (
    <div className="MyVocabulary">
      <SEO
        title="Kütüphanem – Elangual"
        description="Kaydettiğin kelimeleri tek bir yerde topla, düzenle ve çalış."
        canonical="https://elangual.com/myvocabularies"
        robots="noindex,follow"
      />

      {allEmpty ? (
        <div className="no-vocab-info">
          <h2>Henüz kelime eklenmedi</h2>
          <p>Listene henüz hiçbir kelime eklemedin.</p>
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
                    <th>İşlem</th>
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
                          title="Listeden kaldır"
                          aria-label="Listeden kaldır"
                          onClick={() =>
                            dispatch(
                              removeVocabulary({ id: v.id, scriptType: key })
                            )
                          }
                        >
                          ✕
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
