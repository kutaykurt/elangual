// src/pages/DynamicVocabulary/DynamicVocabulary.jsx
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { addToExam, removeFromExam } from "../../redux/examSlice";
import { fetchVocabularyData } from "../../fetchVocabularyData";
import { generateVocabularyId } from "../../getId";
import Fuse from "fuse.js";
import Pagination from "../../components/Pagination/Pagination";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scriptType = `${baseLanguage}-${targetLanguage}`;
  const savedList = allVocabs[scriptType] || [];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        setCurrentPage(1); // auf Seite 1 zurücksetzen
      })
      .catch((err) => {
        setError(`Error loading data: ${err.message}`);
        setAllData([]);
        setFilteredData([]);
      });
  }, [baseLanguage, targetLanguage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredData(allData);
      setCurrentPage(1);
      return;
    }

    const fuse = new Fuse(allData, {
      keys: [baseLanguage, `translation.${targetLanguage}`],
      threshold: 0.3,
    });

    const results = fuse.search(searchQuery).map((r) => r.item);
    setFilteredData(results);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const isInList = (item) => savedList.some((v) => v.id === item.id);
  const isInExam = (item) => exams.some((v) => v.id === item.id);

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
      addToExam({ ...item, base: baseLanguage, target: targetLanguage })
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

  const getRowClass = (item) => {
    const inList = isInList(item);
    const inExam = isInExam(item);
    if (inList && inExam) return "highlighted-both";
    if (inExam) return "highlighted-exam";
    if (inList) return "highlighted-vocab";
    return "";
  };

  const toggleDropdown = (id) => {
    if (isMobile) {
      setOpenDropdownId(id); // Modal statt Dropdown
    } else {
      setOpenDropdownId((prev) => (prev === id ? null : id));
    }
  };

  const selectedItem = filteredData.find((i) => i.id === openDropdownId);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
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
            {!isMobile && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={3}>No results found</td>
            </tr>
          ) : (
            paginatedData.map((item) => (
              <tr
                key={item.id}
                className={getRowClass(item)}
                onClick={() => isMobile && toggleDropdown(item.id)}
              >
                <td data-label={baseLanguage}>{item[baseLanguage]}</td>
                <td data-label={targetLanguage}>
                  {item.translation[targetLanguage]}
                  {item.pronunciation && targetLanguage === "spanish" && (
                    <span className="pronunciation">
                      ({item.pronunciation})
                    </span>
                  )}
                </td>
                {!isMobile && (
                  <td className="action-wrapper-container">
                    <div className="action-wrapper">
                      <button
                        className="action-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.id);
                        }}
                      >
                        Action
                      </button>
                      {openDropdownId === item.id && (
                        <div className="dropdown-menu-fixed" ref={dropdownRef}>
                          {isInList(item) ? (
                            <button
                              onClick={() => handleRemoveVocabulary(item)}
                            >
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
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pagination
        page={currentPage}
        total={totalPages}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />

      {isMobile && selectedItem && (
        <div
          className="mobile-modal-backdrop"
          onClick={() => setOpenDropdownId(null)}
        >
          <div
            className="mobile-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setOpenDropdownId(null)}
            >
              ✕
            </button>
            <div className="modal-actions">
              {isInList(selectedItem) ? (
                <button onClick={() => handleRemoveVocabulary(selectedItem)}>
                  Remove from MyVocabularies
                </button>
              ) : (
                <button onClick={() => handleAddVocabulary(selectedItem)}>
                  Add to MyVocabularies
                </button>
              )}
              {isInExam(selectedItem) ? (
                <button onClick={() => handleRemoveExam(selectedItem)}>
                  Remove from MyExams
                </button>
              ) : (
                <button onClick={() => handleAddExam(selectedItem)}>
                  Add to MyExams
                </button>
              )}
              {(isInList(selectedItem) || isInExam(selectedItem)) && (
                <button
                  className="remove-completely-button"
                  onClick={() => handleRemoveCompletely(selectedItem)}
                >
                  Remove completely
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
