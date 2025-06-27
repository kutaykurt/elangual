// src/pages/VocabularyPage/VocabularyPage.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetchVocabularyData } from "../../fetchVocabularyData";
import { useDispatch, useSelector } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";

const VocabularyPage = () => {
  const { base, target } = useParams(); // z.B. "turkish", "german"
  const scriptType = `${base}${target.charAt(0).toUpperCase()}${target.slice(
    1
  )}`;
  const dispatch = useDispatch();
  const dynamic = useSelector(
    (s) => s.vocabulary.dynamicVocabularies[scriptType] || []
  );

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      data.filter(
        (item) =>
          item[base]?.toLowerCase().includes(query) ||
          item.translation[target]?.toLowerCase().includes(query)
      ),
    [data, query, base, target],
    []
  );

  useEffect(() => {
    fetchVocabularyData(base, target).then(setData);
  }, [base, target]);

  const isAdded = (id) => dynamic.some((v) => v.id === id);

  const toggle = (item) => {
    if (isAdded(item.id)) {
      dispatch(removeVocabulary({ id: item.id, scriptType }));
    } else {
      dispatch(addVocabulary({ newVocabulary: item, scriptType }));
    }
  };

  return (
    <div className="Main">
      <h2>
        {base.charAt(0).toUpperCase() + base.slice(1)} –{" "}
        {target.charAt(0).toUpperCase() + target.slice(1)}
      </h2>

      <input
        type="text"
        placeholder="Filter…"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <table className="my-table">
        <thead>
          <tr>
            <th>{base}</th>
            <th>{target}</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item[base]}</td>
              <td>{item.translation[target]}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className={`add-button ${
                    isAdded(item.id) ? "added" : "not-added"
                  }`}
                  onClick={() => toggle(item)}
                >
                  {isAdded(item.id) ? "Added" : "Add"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VocabularyPage;
