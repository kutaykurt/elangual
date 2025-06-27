// src/pages/SearchResults/SearchResults.jsx
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { generateVocabularyId } from "../../getId";

const SearchResults = ({ data }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const query =
    new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const base = useSelector((state) => state.languages.baseLanguage);
  const target = useSelector((state) => state.languages.targetLanguage);

  const scriptType = base + target.charAt(0).toUpperCase() + target.slice(1);

  const selectedListRaw = useSelector(
    (state) => state.vocabulary.dynamicVocabularies[scriptType]
  );

  // ❗️Memoisierung zur Vermeidung der Warnung
  const selectedList = useMemo(() => selectedListRaw || [], [selectedListRaw]);

  const isInVocabulary = (id) => selectedList.some((v) => v.id === id);

  const toggle = (item) => {
    const id = generateVocabularyId(item, base, target);
    if (isInVocabulary(id)) {
      dispatch(removeVocabulary({ id, scriptType }));
    } else {
      dispatch(addVocabulary({ newVocabulary: { ...item, id }, scriptType }));
    }
  };

  // Bei leerem Query Hinweis anzeigen
  if (!query) {
    return <p>Bitte gib einen Suchbegriff ein.</p>;
  }

  // ✅ Duplikate anhand von ID entfernen
  const uniqueMap = new Map();
  for (const item of data) {
    const id = generateVocabularyId(item, base, target);
    if (!uniqueMap.has(id)) uniqueMap.set(id, item);
  }

  const filtered = [...uniqueMap.values()].filter((item) => {
    const sourceWord = item?.[base]?.toLowerCase() || "";
    const targetWord = item?.translation?.[target]?.toLowerCase() || "";
    return sourceWord.includes(query) || targetWord.includes(query);
  });

  return (
    <div className="Main">
      <h2>
        Suchergebnisse: {base.charAt(0).toUpperCase() + base.slice(1)} –{" "}
        {target.charAt(0).toUpperCase() + target.slice(1)}
      </h2>

      {filtered.length === 0 ? (
        <p>Keine Ergebnisse gefunden.</p>
      ) : (
        <table className="my-table compact">
          <thead>
            <tr>
              <th>{base.charAt(0).toUpperCase() + base.slice(1)}</th>
              <th>{target.charAt(0).toUpperCase() + target.slice(1)}</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => {
              const id = generateVocabularyId(item, base, target);
              const selected = isInVocabulary(id);

              return (
                <tr key={id} className={selected ? "selected" : ""}>
                  <td>{item[base]}</td>
                  <td>
                    {item.translation[target]}
                    {item.pronunciation && target === "spanish" && (
                      <span className="pronunciation">
                        {" "}
                        ({item.pronunciation})
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => toggle(item)}
                      className={`add-button ${
                        selected ? "added" : "not-added"
                      }`}
                    >
                      {selected ? "Added" : "Add"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchResults;
