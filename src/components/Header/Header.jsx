import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBaseLanguage, setTargetLanguage } from "../../redux/languagesSlice";
import "./header.scss";

const languagePairs = [
  { path: "turkish-english", label: "Tr – En" },
  { path: "turkish-german", label: "Tr – De" },
  { path: "turkish-spanish", label: "Tr – Es" },
  { path: "english-german", label: "En – De" },
  { path: "english-spanish", label: "En – Es" },
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
          <Link to="/" className="title">
            <span className="title-first-word">E</span>
            <span className="title-second-word">Langual</span>
          </Link>
          <div className="slogan">Start today. Speak tomorrow.</div>
        </div>

        <nav className="column-two">
          <ul className="navigation">
            {/* Desktop Language Selection */}
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

            {/* Navigation */}
            <li>
              <Link
                to="/learngrammar"
                className={`link my-exams ${getNavLinkClass("myexams")}`}
              >
                Grammar
              </Link>
            </li>

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
                  <span className="vocab-badge">{vocabCount}</span>
                )}
              </Link>
            </li>

            <li>
              <Link
                to="/myexams"
                className={`link my-exams ${getNavLinkClass("myexams")}`}
              >
                My Exams
              </Link>
            </li>

            {/* Mobile Language Dropdown */}
            <div className="hide-on-desktop mobile-language-wrapper">
              <div className="language-dropdown">
                <select
                  onChange={(e) => {
                    const path = e.target.value;
                    if (path) {
                      handleLanguageClick(path);
                      window.location.href = "/#/vocabulary"; // HashRouter
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
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
