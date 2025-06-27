import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./myExams.scss";

export default function MyExams() {
  const exams = useSelector((state) => state.exam.exams);
  const navigate = useNavigate();

  const [list1, setList1] = useState(() => {
    return JSON.parse(localStorage.getItem("examList1")) || {};
  });
  const [list2, setList2] = useState(() => {
    return JSON.parse(localStorage.getItem("examList2")) || {};
  });

  useEffect(() => {
    localStorage.setItem("examList1", JSON.stringify(list1));
  }, [list1]);

  useEffect(() => {
    localStorage.setItem("examList2", JSON.stringify(list2));
  }, [list2]);

  const groupedByScript = exams.reduce((acc, item) => {
    const key = `${item.base}-${item.target}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const toggleItem = (scriptType, listState, setListState, item) => {
    const currentList = listState[scriptType] || [];
    const exists = currentList.find((v) => v.id === item.id);

    if (exists) {
      setListState({
        ...listState,
        [scriptType]: currentList.filter((v) => v.id !== item.id),
      });
    } else if (currentList.length < 10) {
      setListState({
        ...listState,
        [scriptType]: [...currentList, item],
      });
    }
  };

  const isInList = (scriptType, listState, item) =>
    (listState[scriptType] || []).some((v) => v.id === item.id);

  const handleStartExam = (scriptType, list) => {
    navigate("/exam", {
      state: {
        vocabList: list,
        scriptType,
      },
    });
  };

  return (
    <div className="my-exams-container">
      <h2>My Exam Words</h2>

      {Object.entries(groupedByScript).map(([scriptType, items]) => (
        <div key={scriptType} className="script-block">
          <h3>{scriptType}</h3>

          <table className="exam-table">
            <thead>
              <tr>
                <th>Vocabulary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item[item.base]} – {item.translation[item.target]}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() =>
                          toggleItem(scriptType, list1, setList1, item)
                        }
                      >
                        {isInList(scriptType, list1, item)
                          ? "Remove from List 1"
                          : "Add to List 1"}
                      </button>
                      <button
                        onClick={() =>
                          toggleItem(scriptType, list2, setList2, item)
                        }
                      >
                        {isInList(scriptType, list2, item)
                          ? "Remove from List 2"
                          : "Add to List 2"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="lists-container">
            <div className="exam-list">
              <h4>List 1</h4>
              <table>
                <tbody>
                  {(list1[scriptType] || []).map((item) => (
                    <tr key={item.id}>
                      <td>{item[item.base]}</td>
                      <td>{item.translation[item.target]}</td>
                    </tr>
                  ))}
                  {Array.from({
                    length: 10 - (list1[scriptType]?.length || 0),
                  }).map((_, i) => (
                    <tr key={`empty1-${i}`}>
                      <td colSpan={2} className="empty-row"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="exam-list">
              <h4>List 2</h4>
              <table>
                <tbody>
                  {(list2[scriptType] || []).map((item) => (
                    <tr key={item.id}>
                      <td>{item[item.base]}</td>
                      <td>{item.translation[item.target]}</td>
                    </tr>
                  ))}
                  {Array.from({
                    length: 10 - (list2[scriptType]?.length || 0),
                  }).map((_, i) => (
                    <tr key={`empty2-${i}`}>
                      <td colSpan={2} className="empty-row"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="start-button-container">
            <button
              className={`start-button ${
                (list1[scriptType]?.length || 0) !== 10 ? "disabled" : ""
              }`}
              disabled={(list1[scriptType]?.length || 0) !== 10}
              onClick={() =>
                handleStartExam(scriptType, list1[scriptType] || [])
              }
            >
              Start Exam with List 1
            </button>
            <button
              className={`start-button ${
                (list2[scriptType]?.length || 0) !== 10 ? "disabled" : ""
              }`}
              disabled={(list2[scriptType]?.length || 0) !== 10}
              onClick={() =>
                handleStartExam(scriptType, list2[scriptType] || [])
              }
            >
              Start Exam with List 2
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
