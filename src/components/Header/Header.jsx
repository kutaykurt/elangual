import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBaseLanguage, setTargetLanguage } from "../../redux/languagesSlice";
import "./header.scss";

const languagePairs = [
  { path: "english-german", label: "En – De" },
  { path: "english-spanish", label: "En – Es" },
  { path: "turkish-english", label: "Tr – En" },
  { path: "turkish-german", label: "Tr – De" },
  { path: "turkish-spanish", label: "Tr – Es" },
  { path: "german-spanish", label: "De – Es" },
];

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname.replace(/^\/+/, "");

  const { baseLanguage, targetLanguage } = useSelector(
    (state) => state.languages
  );
  const vocabularies = useSelector(
    (state) => state.vocabulary.dynamicVocabularies
  );

  // Gesamtanzahl der Vokabeln über alle Sprachpaare
  const vocabCount = Object.values(vocabularies).reduce(
    (acc, list) => acc + (list?.length || 0),
    0
  );

  const getNavLinkClass = (path) => (currentPath === path ? "active" : "");

  const handleLanguageClick = (path) => {
    const [base, target] = path.split("-");
    dispatch(setBaseLanguage(base));
    dispatch(setTargetLanguage(target));
    localStorage.setItem("baseLanguage", base);
    localStorage.setItem("targetLanguage", target);
  };

  return (
    <header className="Header">
      <div className="header-design-line" />
      <div className="header-main">
        <div className="column-one">
          <Link to="" className="link title">
            <span className="title-first-word">E</span>
            <span className="title-letter-l">L</span>
            <span className="title-second-word">angual</span>
            <div className="title-underline" />
          </Link>
        </div>

        <nav className="column-two">
          <ul className="navigation">
            {/* ✅ Desktop Sprachpaare als Links */}
            <div className="show-on-desktop">
              {languagePairs.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to="/vocabulary"
                    className={`link ${getNavLinkClass(path)}`}
                    onClick={() => handleLanguageClick(path)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </div>

            {/* ✅ Mobile Dropdown Sprachwahl */}

            {/* ✅ Navigation */}
            <li>
              <Link
                to="/vocabulary"
                className={`link ${getNavLinkClass("vocabulary")}`}
              >
                Vocabularies
              </Link>
            </li>

            <li>
              <Link
                to="/myvocabularies"
                className={`link ${getNavLinkClass("myvocabularies")}`}
              >
                My Library
                {vocabCount > 0 && (
                  <span className="vocab-badge">({vocabCount})</span>
                )}
              </Link>
            </li>

            <li>
              <Link
                to="/myexams"
                className={`link ${getNavLinkClass("myexams")}`}
              >
                My Exams
              </Link>
            </li>
            <li className="hide-on-desktop">
              <div className="language-dropdown">
                <select
                  onChange={(e) => {
                    const path = e.target.value;
                    if (path) {
                      handleLanguageClick(path);
                      window.location.href = "/#/vocabulary"; // Für HashRouter
                    }
                  }}
                  value={`${baseLanguage}-${targetLanguage}`}
                >
                  <option value="">Select language pair</option>
                  {languagePairs.map(({ path, label }) => (
                    <option key={path} value={path}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
