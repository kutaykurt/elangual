import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguages } from "../../redux/languagesSlice";
import { useNavigate } from "react-router-dom";
import "./homepage.scss";

const ALL_LANGUAGES = [
  { code: "jp-hiragana", label: "Japanese (Hiragana)" },
  { code: "jp-katakana", label: "Japanese (Katakana)" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "en", label: "English" },
];

export default function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const already = useSelector((s) => s.languages.selected);
  const [selected, setSelected] = useState(already);

  const toggle = (code) => {
    setSelected((curr) =>
      curr.includes(code) ? curr.filter((c) => c !== code) : [...curr, code]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) return alert("Bitte mind. eine Sprache wählen.");
    dispatch(setSelectedLanguages(selected));
    navigate(`/${selected[0]}/`);
  };

  return (
    <div className="Homepage Main">
      <h2>Welche Sprache möchtest du lernen?</h2>
      <form onSubmit={handleSubmit} className="language-form">
        {ALL_LANGUAGES.map(({ code, label }) => (
          <label key={code} className="checkbox">
            <input
              type="checkbox"
              checked={selected.includes(code)}
              onChange={() => toggle(code)}
            />
            {label}
          </label>
        ))}
        <button type="submit" className="submit-button">
          Weiter
        </button>
      </form>
    </div>
  );
}
