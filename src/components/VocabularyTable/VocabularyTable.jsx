import React from "react";
import "./vocabularyTable.scss";

export default function VocabularyTable({
  items,
  translationKey, // "alphabet" | "german" | "english"
  scriptKey, // optional, z.B. "japaneseHiragana" oder "japaneseKatakana"
  selectedList,
  onToggle,
  windowWidth,
  selectedItem,
  setSelectedItem,
  modalShow,
  setModalShow,
  isReadOnly = false,
}) {
  const handleRow = (item) => {
    setSelectedItem(item);
    if (windowWidth <= 480) setModalShow(true);
  };

  const renderCell = (item) => {
    const script = scriptKey
      ? item[scriptKey]
      : item.character || item.japaneseHiragana || item.japaneseKatakana;
    const pron = item.pronunciation || "";
    let trans = "";
    if (translationKey === "alphabet") {
      trans = item.translation || "";
    } else {
      trans = item.translation?.[translationKey] || "";
    }
    const isSel = selectedList.some((v) => v.id === item.id);

    return (
      <tr key={item.id} onClick={() => handleRow(item)}>
        <td>{script}</td>
        <td>{pron}</td>
        <td>{trans}</td>
        <td>
          {isReadOnly ? (
            <button
              className="remove-button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle(item.id);
              }}
            >
              X
            </button>
          ) : (
            <button
              className={`add-button ${isSel ? "added" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggle(item);
              }}
            >
              {isSel ? "Added" : "Add"}
            </button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <>
      <table className="my-table">
        <thead>
          <tr>
            <th>{translationKey === "alphabet" ? "Letter" : "Word"}</th>
            <th>Pronunciation</th>
            <th>
              {translationKey === "alphabet"
                ? "Translation"
                : translationKey.charAt(0).toUpperCase() +
                  translationKey.slice(1)}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderCell)}</tbody>
      </table>
      {/* Modal bei schmalen Bildschirmen */}
      {windowWidth <= 480 && selectedItem && modalShow && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>
              {scriptKey ? selectedItem[scriptKey] : selectedItem.character}
            </h3>
            <p>{selectedItem.pronunciation}</p>
            <p>
              {translationKey === "alphabet"
                ? selectedItem.translation
                : selectedItem.translation?.[translationKey]}
            </p>
            <button onClick={() => onToggle(selectedItem)}>
              {selectedList.some((v) => v.id === selectedItem.id)
                ? "Remove"
                : "Add"}
            </button>
            <button onClick={() => setModalShow(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
