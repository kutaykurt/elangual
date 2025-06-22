import React, { useEffect, useState } from "react";
import { fetchJapaneseData } from "../../../fetch";
import { useDispatch, useSelector } from "react-redux";
import {
  addVocabulary,
  removeVocabulary,
} from "../../../redux/vocabularySlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { generateVocabularyId } from "../../../getId";

const ITEMS_PER_PAGE = 30;

const KatakanaEnglishVocabulary = () => {
  const [japaneseData, setJapaneseData] = useState({ vocabulary: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const katakanaVocabularyList = useSelector(
    (state) => state.vocabulary.katakanaVocabularyList
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    async function getJapaneseData() {
      try {
        const data = await fetchJapaneseData();
        setJapaneseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getJapaneseData();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    if (windowWidth <= 480) setModalShow(true);
  };

  const renderEnglishVocabularyForPage = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const englishVocabularies = japaneseData.vocabulary
      .filter((item) => item.translation.english)
      .slice(startIndex, endIndex);

    return englishVocabularies.map((item, index) => {
      const id = generateVocabularyId(item, "english");
      const isSelected = katakanaVocabularyList.some(
        (vocab) => vocab.id === id
      );

      return (
        <tr
          key={index}
          className={`list-items-container equal-column-width ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => handleRowClick(item)}
        >
          <td>{item.japaneseKatakana}</td>
          <td>{item.pronunciation}</td>
          <td>{item.translation.english}</td>
          {windowWidth >= 480 && (
            <td>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isSelected) {
                    dispatch(removeVocabulary({ id, scriptType: "katakana" }));
                  } else {
                    dispatch(
                      addVocabulary({
                        newVocabulary: {
                          japaneseKatakana: item.japaneseKatakana,
                          pronunciation: item.pronunciation,
                          translation: { english: item.translation.english },
                          id,
                        },
                        scriptType: "katakana",
                      })
                    );
                  }
                }}
                className={`add-button ${isSelected ? "added" : "not-added"}`}
              >
                {isSelected ? "Added" : "Add"}
              </button>
            </td>
          )}
        </tr>
      );
    });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(
      japaneseData.vocabulary.length / ITEMS_PER_PAGE
    );
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const paginationButtons = (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of{" "}
        {Math.ceil(japaneseData.vocabulary.length / ITEMS_PER_PAGE)}
      </span>
      <button
        onClick={handleNextPage}
        disabled={
          currentPage ===
          Math.ceil(japaneseData.vocabulary.length / ITEMS_PER_PAGE)
        }
      >
        Next
      </button>
    </div>
  );

  return (
    <div>
      <table className="my-table">
        <tbody>
          <tr>
            <th>Katakana</th>
            <th>Pronunciation</th>
            <th>English</th>
            <th>Action</th>
          </tr>
          {renderEnglishVocabularyForPage()}
        </tbody>
      </table>
      {paginationButtons}

      {selectedItem && windowWidth <= 480 && (
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.japaneseKatakana}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedItem.pronunciation}</p>
            <p>{selectedItem.translation.english}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                const id = generateVocabularyId(selectedItem, "english");
                const isSelected = katakanaVocabularyList.some(
                  (vocab) => vocab.id === id
                );
                if (isSelected) {
                  dispatch(removeVocabulary({ id, scriptType: "katakana" }));
                } else {
                  dispatch(
                    addVocabulary({
                      newVocabulary: {
                        japaneseKatakana: selectedItem.japaneseKatakana,
                        pronunciation: selectedItem.pronunciation,
                        translation: {
                          english: selectedItem.translation.english,
                        },
                        id,
                      },
                      scriptType: "katakana",
                    })
                  );
                }
                setModalShow(false);
              }}
            >
              {katakanaVocabularyList.some(
                (vocab) =>
                  vocab.id === generateVocabularyId(selectedItem, "english")
              )
                ? "Remove"
                : "Add to Vocabulary"}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default KatakanaEnglishVocabulary;
