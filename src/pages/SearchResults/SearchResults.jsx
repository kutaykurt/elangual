import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { generateVocabularyId } from "../../getId";

const SearchResults = ({ data, onSearchResults }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { hiraganaVocabularyList, katakanaVocabularyList } = useSelector(
    (state) => state.vocabulary
  );

  const query =
    new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const isInVocabulary = (id, scriptType) => {
    const list =
      scriptType === "hiragana"
        ? hiraganaVocabularyList
        : katakanaVocabularyList;
    return list.some((vocab) => vocab.id === id);
  };

  const handleToggleVocabulary = (item, scriptType, language) => {
    const id = generateVocabularyId(item, language);
    const alreadyExists = isInVocabulary(id, scriptType);

    if (alreadyExists) {
      dispatch(removeVocabulary({ id, scriptType }));
    } else {
      const newVocabulary = {
        ...item,
        translation: { [language]: item.translation[language] },
        id,
      };
      dispatch(addVocabulary({ newVocabulary, scriptType }));
    }
  };

  const renderResults = (results, language, scriptType) => {
    const filtered = results.filter((item) =>
      scriptType === "hiragana"
        ? !!item.japaneseHiragana
        : !!item.japaneseKatakana
    );

    if (filtered.length === 0) return null;

    return (
      <div className="Main">
        <h2>
          {scriptType.charAt(0).toUpperCase() + scriptType.slice(1)} Vocabulary
          – {language.charAt(0).toUpperCase() + language.slice(1)}
        </h2>
        <table className="my-table">
          <thead>
            <tr>
              <th>Hiragana</th>
              <th>Katakana</th>
              <th>Pronunciation</th>
              <th>Translation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, index) => {
              const id = generateVocabularyId(item, language);
              const isSelected = isInVocabulary(id, scriptType);

              return (
                <tr
                  key={index}
                  className={`list-items-container ${
                    isSelected ? "selected" : ""
                  }`}
                >
                  <td>
                    {scriptType === "hiragana" ? item.japaneseHiragana : "-"}
                  </td>
                  <td>
                    {scriptType === "katakana" ? item.japaneseKatakana : "-"}
                  </td>
                  <td>{item.pronunciation}</td>
                  <td>{item.translation[language]}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleToggleVocabulary(item, scriptType, language)
                      }
                      className={`add-button ${isSelected ? "added" : ""}`}
                    >
                      {isSelected ? "Added" : "Add"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const germanResults = useMemo(
    () =>
      data.filter((item) =>
        item.translation.german?.toLowerCase().includes(query)
      ),
    [data, query]
  );

  const englishResults = useMemo(
    () =>
      data.filter((item) =>
        item.translation.english?.toLowerCase().includes(query)
      ),
    [data, query]
  );

  return (
    <div className="search-results">
      <h2>Search Results:</h2>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <>
          {renderResults(germanResults, "german", "hiragana")}
          {renderResults(germanResults, "german", "katakana")}
          {renderResults(englishResults, "english", "hiragana")}
          {renderResults(englishResults, "english", "katakana")}
        </>
      )}
    </div>
  );
};

export default SearchResults;
