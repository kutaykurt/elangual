// src/pages/LanguageSelection/LanguageSelection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguages } from "../../redux/languagesSlice";
import "./languageSelection.scss";

const ALL_LANGUAGES = [
  { code: "jp", label: "Japanese" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "en", label: "English" },
];

export default function LanguageSelection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const already = useSelector((s) => s.languages.selected);
  const [selected, setSelected] = useState(already);

  const toggle = (code) =>
    setSelected((curr) =>
      curr.includes(code) ? curr.filter((c) => c !== code) : [...curr, code]
    );

  const onSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) return alert("Bitte mind. eine Sprache wählen.");
    dispatch(setSelectedLanguages(selected));
    navigate(`/${selected[0]}/`);
  };

  return (
    <div className="LanguageSelection Main">
      <h2>Welche Sprache(n) möchtest du lernen?</h2>
      <form onSubmit={onSubmit}>
        {ALL_LANGUAGES.map(({ code, label }) => (
          <label key={code} className="checkbox">
            <input
              type="checkbox"
              value={code}
              checked={selected.includes(code)}
              onChange={() => toggle(code)}
            />
            {label}
          </label>
        ))}
        <button type="submit">Weiter</button>
      </form>
    </div>
  );
}
