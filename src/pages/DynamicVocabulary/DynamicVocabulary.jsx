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
  const [openDropdownId, setOpenDropdownId] = useState(null); // nur für Mobile-Modal
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

  // Resize watcher
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data load
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
        setCurrentPage(1);
      })
      .catch((err) => {
        setError(`Error loading data: ${err.message}`);
        setAllData([]);
        setFilteredData([]);
      });
  }, [baseLanguage, targetLanguage]);

  // Klick außerhalb schließt Mobile-Modal (falls du das Modal klickst)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Suche
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
  const handleKeyDown = (e) => e.key === "Enter" && handleSearch();

  // Statusprüfungen
  const isInList = (item) => savedList.some((v) => v.id === item.id);
  const isInExam = (item) => exams.some((v) => v.id === item.id);

  // Actions
  const handleAddVocabulary = (item) => {
    dispatch(
      addVocabulary({
        newVocabulary: { ...item, base: baseLanguage, target: targetLanguage },
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

  const toggleMobile = (id) => setOpenDropdownId(id);

  // Paging
  const handlePrevPage = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage((p) => p + 1);

  const selectedItem = filteredData.find((i) => i.id === openDropdownId);

  return (
    <div className="Main DynamicVocabulary">
      <h2 className="my-table-title">
        {baseLanguage} – {targetLanguage}
      </h2>

      <div className="search-field-container" role="search">
        <input
          type="text"
          placeholder="Kelime ara…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input-field"
          aria-label="Kelime ara"
        />
        <button onClick={handleSearch} className="search-button">
          Ara
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="my-table compact">
        <thead>
          <tr>
            <th>{baseLanguage}</th>
            <th>{targetLanguage}</th>
            {!isMobile && <th className="islem-head">İşlemler</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={isMobile ? 2 : 3}>Sonuç bulunamadı</td>
            </tr>
          ) : (
            paginatedData.map((item) => (
              <tr
                key={item.id}
                className={getRowClass(item)}
                onClick={() => isMobile && toggleMobile(item.id)}
              >
                <td data-label={baseLanguage}>{item[baseLanguage]}</td>
                <td data-label={targetLanguage}>
                  {item.translation[targetLanguage]}
                  {item.pronunciation && targetLanguage === "spanish" && (
                    <span className="pronunciation">
                      {" "}
                      ({item.pronunciation})
                    </span>
                  )}
                </td>

                {/* Desktop: Inline-Aktionen */}
                {!isMobile && (
                  <td className="islem">
                    <div
                      className="row-actions"
                      role="group"
                      aria-label="İşlemler"
                    >
                      <button
                        className={`mini ${
                          isInList(item) ? "outline" : "primary"
                        }`}
                        aria-pressed={isInList(item)}
                        onClick={(e) => {
                          e.stopPropagation();
                          isInList(item)
                            ? handleRemoveVocabulary(item)
                            : handleAddVocabulary(item);
                        }}
                        title={
                          isInList(item)
                            ? "Kütüphaneden çıkar"
                            : "Kütüphaneye ekle"
                        }
                      >
                        {isInList(item) ? "− Kütüphane" : "+ Kütüphane"}
                      </button>

                      <button
                        className={`mini ${
                          isInExam(item) ? "outline" : "secondary"
                        }`}
                        aria-pressed={isInExam(item)}
                        onClick={(e) => {
                          e.stopPropagation();
                          isInExam(item)
                            ? handleRemoveExam(item)
                            : handleAddExam(item);
                        }}
                        title={
                          isInExam(item)
                            ? "Sınavlardan çıkar"
                            : "Sınavlara ekle"
                        }
                      >
                        {isInExam(item) ? "− Sınav" : "+ Sınav"}
                      </button>

                      {/* Kaldır nur in Mobile Ansicht */}
                      {isMobile && (isInList(item) || isInExam(item)) && (
                        <button
                          className="mini danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveCompletely(item);
                          }}
                          title="Tamamen kaldır"
                        >
                          Kaldır
                        </button>
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

      {/* Mobile Modal bleibt wie gehabt */}
      {isMobile && selectedItem && (
        <div
          className="mobile-modal-backdrop"
          onClick={() => setOpenDropdownId(null)}
        >
          <div
            className="mobile-modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={dropdownRef}
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
                  Kütüphaneden çıkar
                </button>
              ) : (
                <button onClick={() => handleAddVocabulary(selectedItem)}>
                  Kütüphaneye ekle
                </button>
              )}
              {isInExam(selectedItem) ? (
                <button onClick={() => handleRemoveExam(selectedItem)}>
                  Sınavlardan çıkar
                </button>
              ) : (
                <button onClick={() => handleAddExam(selectedItem)}>
                  Sınavlara ekle
                </button>
              )}
              {(isInList(selectedItem) || isInExam(selectedItem)) && (
                <button
                  className="remove-completely-button"
                  onClick={() => handleRemoveCompletely(selectedItem)}
                >
                  Tamamen kaldır
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
