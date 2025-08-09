import React, { useEffect, useMemo, useRef, useState } from "react";
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

  // UI state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openDropdownId, setOpenDropdownId] = useState(null); // nur für Mobile-Modal
  const [flashRowId, setFlashRowId] = useState(null);

  // Paging + Sort
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Sortiermodus: "<base|target>-asc|desc"
  const defaultSort = `${baseLanguage || "base"}-asc`;
  const [sortMode, setSortMode] = useState(defaultSort);

  const scriptType = `${baseLanguage}-${targetLanguage}`;
  const savedList = allVocabs[scriptType] || [];

  const dropdownRef = useRef(null);

  // Resize watcher
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // reset sort wenn Sprachen wechseln
  useEffect(() => {
    if (!baseLanguage || !targetLanguage) return;
    setSortMode(`${baseLanguage}-asc`);
  }, [baseLanguage, targetLanguage]);

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

  // Klick außerhalb schließt Mobile-Modal
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

  // Sortierung (memoized)
  const sortedData = useMemo(() => {
    const [field, dir] = (sortMode || defaultSort).split("-");
    const isBase = field === baseLanguage || field === "base";
    const sign = dir === "desc" ? -1 : 1;

    const copy = [...filteredData];
    copy.sort((a, b) => {
      const aVal =
        (isBase ? a[baseLanguage] : a.translation[targetLanguage]) || "";
      const bVal =
        (isBase ? b[baseLanguage] : b.translation[targetLanguage]) || "";
      // case-insensitive, sprachsensitiv wenn möglich
      return (
        sign *
        aVal
          .toString()
          .localeCompare(bVal.toString(), undefined, { sensitivity: "base" })
      );
    });
    return copy;
  }, [filteredData, sortMode, baseLanguage, targetLanguage, defaultSort]);

  // Paging kalkulieren basierend auf sortedData
  const totalPages = Math.ceil(sortedData.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  // Statusprüfungen
  const isInList = (item) => savedList.some((v) => v.id === item.id);
  const isInExam = (item) => exams.some((v) => v.id === item.id);

  // kleines visuelles Feedback (Zeile pulsiert kurz)
  const flashRow = (id) => {
    setFlashRowId(id);
    setTimeout(() => setFlashRowId(null), 550);
  };

  // Actions
  const handleAddVocabulary = (item) => {
    dispatch(
      addVocabulary({
        newVocabulary: { ...item, base: baseLanguage, target: targetLanguage },
        scriptType,
      })
    );
    flashRow(item.id);
    setOpenDropdownId(null);
  };
  const handleRemoveVocabulary = (item) => {
    dispatch(removeVocabulary({ id: item.id, scriptType }));
    flashRow(item.id);
    setOpenDropdownId(null);
  };
  const handleAddExam = (item) => {
    dispatch(
      addToExam({ ...item, base: baseLanguage, target: targetLanguage })
    );
    flashRow(item.id);
    setOpenDropdownId(null);
  };
  const handleRemoveExam = (item) => {
    dispatch(removeFromExam(item.id));
    flashRow(item.id);
    setOpenDropdownId(null);
  };
  const handleRemoveCompletely = (item) => {
    dispatch(removeVocabulary({ id: item.id, scriptType }));
    dispatch(removeFromExam(item.id));
    flashRow(item.id);
    setOpenDropdownId(null);
  };

  const getRowClass = (item) => {
    const inList = isInList(item);
    const inExam = isInExam(item);
    let cls = "";
    if (inList && inExam) cls = "highlighted-both";
    else if (inExam) cls = "highlighted-exam";
    else if (inList) cls = "highlighted-vocab";
    if (flashRowId === item.id) cls += " flash";
    return cls.trim();
  };

  const toggleMobile = (id) => setOpenDropdownId(id);

  // Paging Controls
  const handlePrevPage = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage((p) => p + 1);

  // Wenn itemsPerPage sich ändert, auf Seite 1 springen
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, sortMode]);

  const selectedItem = sortedData.find((i) => i.id === openDropdownId);

  // Labels für Sort-Dropdown
  const baseAscLabel = `${baseLanguage} A–Z`;
  const baseDescLabel = `${baseLanguage} Z–A`;
  const targetAscLabel = `${targetLanguage} A–Z`;
  const targetDescLabel = `${targetLanguage} Z–A`;

  return (
    <div className="Main DynamicVocabulary">
      <h2 className="my-table-title">
        {baseLanguage} – {targetLanguage}
      </h2>

      {/* Such- & Listen-Controls */}
      <div className="controls-row" role="group" aria-label="Liste steuern">
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

        <div className="list-controls">
          {/* Sortierung */}
          <label className="sr-only" htmlFor="sortSelect">
            Sıralama
          </label>
          <select
            id="sortSelect"
            className="control-select"
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value)}
            aria-label="Sıralama"
          >
            <option value={`${baseLanguage}-asc`}>{baseAscLabel}</option>
            <option value={`${baseLanguage}-desc`}>{baseDescLabel}</option>
            <option value={`${targetLanguage}-asc`}>{targetAscLabel}</option>
            <option value={`${targetLanguage}-desc`}>{targetDescLabel}</option>
          </select>

          {/* Items pro Seite */}
          <label className="sr-only" htmlFor="pageSizeSelect">
            Sayfa başına kelime
          </label>
          <select
            id="pageSizeSelect"
            className="control-select narrow"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
            aria-label="Sayfa başına kelime"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
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

      {/* Mobile Modal mit „Tamamen kaldır“ */}
      {isMobile && selectedItem && (
        <div
          className="mobile-modal-backdrop"
          onClick={() => setOpenDropdownId(null)}
        >
          <div
            className={`mobile-modal-content open`}
            onClick={(e) => e.stopPropagation()}
            ref={dropdownRef}
          >
            <button
              className="close-button"
              onClick={() => setOpenDropdownId(null)}
              aria-label="Kapat"
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
