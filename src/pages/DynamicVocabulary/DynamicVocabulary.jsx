import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { addToExam, removeFromExam } from "../../redux/examSlice";
import { fetchVocabularyData } from "../../fetchVocabularyData";
import { generateVocabularyId } from "../../getId";
import Fuse from "fuse.js";
import "./dynamicVocabulary.scss";

export default function DynamicVocabulary() {
  const dispatch = useDispatch();
  const { baseLanguage, targetLanguage } = useSelector(
    (state) => state.languages
  );
  const allVocabs = useSelector(
    (state) => state.vocabulary.dynamicVocabularies
  );
  const exams = useSelector((state) => state.exam.exams);

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const scriptType = `${baseLanguage}-${targetLanguage}`;
  const savedList = allVocabs[scriptType] || [];

  useEffect(() => {
    if (!baseLanguage || !targetLanguage) return;

    fetchVocabularyData(baseLanguage, targetLanguage)
      .then((vocs) => {
        const cleaned = vocs
          .filter(
            (item) =>
              item[baseLanguage] &&
              item.translation &&
              item.translation[targetLanguage]
          )
          .reduce(
            (acc, curr) => {
              const id = generateVocabularyId(
                curr,
                baseLanguage,
                targetLanguage
              );
              if (!acc.map.has(id)) {
                acc.map.set(id, true);
                acc.result.push({ ...curr, id });
              }
              return acc;
            },
            { map: new Map(), result: [] }
          ).result;

        setAllData(cleaned);
        setFilteredData(cleaned);
        setError(null);
      })
      .catch((err) => {
        setError(`Error loading data: ${err.message}`);
        setAllData([]);
        setFilteredData([]);
      });
  }, [baseLanguage, targetLanguage]);

  // Dropdown schließt sich bei Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!openDropdownId) return;
      const openDropdown = document.querySelector(
        `.dropdown-container[data-id="${openDropdownId}"]`
      );
      if (openDropdown && !openDropdown.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownId]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredData(allData);
      return;
    }

    const fuse = new Fuse(allData, {
      keys: [baseLanguage, `translation.${targetLanguage}`],
      threshold: 0.3,
    });

    const results = fuse.search(searchQuery).map((r) => r.item);
    setFilteredData(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleAddVocabulary = (item) => {
    dispatch(
      addVocabulary({
        newVocabulary: {
          ...item,
          base: baseLanguage,
          target: targetLanguage,
        },
        scriptType,
      })
    );
    setOpenDropdownId(null);
  };

  const handleRemoveVocabulary = (item) => {
    dispatch(removeVocabulary({ id: item.id, scriptType }));
    setOpenDropdownId(null);
  };

  const handleAddExam = (item) => {
    dispatch(
      addToExam({
        ...item,
        base: baseLanguage,
        target: targetLanguage,
      })
    );
    setOpenDropdownId(null);
  };

  const handleRemoveExam = (item) => {
    dispatch(removeFromExam(item.id));
    setOpenDropdownId(null);
  };

  const handleRemoveCompletely = (item) => {
    dispatch(removeVocabulary({ id: item.id, scriptType }));
    dispatch(removeFromExam(item.id));
    setOpenDropdownId(null);
  };

  const isInList = (item) => savedList.some((v) => v.id === item.id);
  const isInExam = (item) => exams.some((v) => v.id === item.id);

  const getRowClass = (item) => {
    const inList = isInList(item);
    const inExam = isInExam(item);
    if (inList && inExam) return "highlighted-both";
    if (inExam) return "highlighted-exam";
    if (inList) return "highlighted-vocab";
    return "";
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="Main">
      <h2 className="my-table-title">
        {baseLanguage} – {targetLanguage}
      </h2>

      <div className="search-field-container">
        <input
          type="text"
          placeholder="Search vocabularies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input-field"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="my-table compact">
        <thead>
          <tr>
            <th>{baseLanguage}</th>
            <th>{targetLanguage}</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={3}>No results found</td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={item.id} className={getRowClass(item)}>
                <td>{item[baseLanguage]}</td>
                <td>
                  {item.translation[targetLanguage]}
                  {item.pronunciation && targetLanguage === "spanish" && (
                    <span className="pronunciation">
                      ({item.pronunciation})
                    </span>
                  )}
                </td>
                <td>
                  <div className="dropdown-container" data-id={item.id}>
                    <button
                      className="action-button"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      Action
                    </button>
                    {openDropdownId === item.id && (
                      <div className="dropdown-menu-fixed">
                        {isInList(item) ? (
                          <button onClick={() => handleRemoveVocabulary(item)}>
                            Remove from MyVocabularies
                          </button>
                        ) : (
                          <button onClick={() => handleAddVocabulary(item)}>
                            Add to MyVocabularies
                          </button>
                        )}

                        {isInExam(item) ? (
                          <button onClick={() => handleRemoveExam(item)}>
                            Remove from MyExams
                          </button>
                        ) : (
                          <button onClick={() => handleAddExam(item)}>
                            Add to MyExams
                          </button>
                        )}

                        {(isInList(item) || isInExam(item)) && (
                          <button
                            className="remove-completely-button"
                            onClick={() => handleRemoveCompletely(item)}
                          >
                            Remove completely
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
