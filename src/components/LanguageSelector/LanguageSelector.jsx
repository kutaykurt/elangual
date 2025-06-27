// src/components/LanguageSelector/LanguageSelector.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBaseLanguage, setTargetLanguage } from "../../redux/languagesSlice";
import "./languageSelector.scss";

const languages = ["german", "english", "turkish"];

export default function LanguageSelector() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { baseLanguage, targetLanguage } = useSelector(
    (state) => state.languages
  );

  const handleBaseChange = (e) => {
    const newBase = e.target.value;
    dispatch(setBaseLanguage(newBase));
    // sofort zur neuen Kombination routen
    navigate(`/${newBase}-${targetLanguage}`);
  };

  const handleTargetChange = (e) => {
    const newTarget = e.target.value;
    dispatch(setTargetLanguage(newTarget));
    navigate(`/${baseLanguage}-${newTarget}`);
  };

  return (
    <div className="language-selector">
      <label>
        From:
        <select value={baseLanguage} onChange={handleBaseChange}>
          {languages.map((lang) => (
            <option key={lang} value={lang} disabled={lang === targetLanguage}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <label>
        To:
        <select value={targetLanguage} onChange={handleTargetChange}>
          {languages.map((lang) => (
            <option key={lang} value={lang} disabled={lang === baseLanguage}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
