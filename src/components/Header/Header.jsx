import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBaseLanguage, setTargetLanguage } from "../../redux/languagesSlice";
import "./header.scss";

const languagePairs = [
  { path: "turkish-english", label: "Tr – En" },
  { path: "turkish-german", label: "Tr – De" },
  { path: "turkish-spanish", label: "Tr – Es" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { baseLanguage, targetLanguage } = useSelector((s) => s.languages);
  const vocabularies = useSelector((s) => s.vocabulary.dynamicVocabularies);

  const vocabCount = Object.values(vocabularies).reduce(
    (acc, list) => acc + (list?.length || 0),
    0
  );

  const handleLanguage = (pair) => {
    const [base, target] = pair.split("-");
    dispatch(setBaseLanguage(base));
    dispatch(setTargetLanguage(target));
    localStorage.setItem("baseLanguage", base);
    localStorage.setItem("targetLanguage", target);
    if (location.pathname !== "/vocabulary") navigate("/vocabulary");
  };

  const currentPair = `${baseLanguage}-${targetLanguage}` || "turkish-english";

  return (
    <header className="AppHeader" role="banner">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="topbar">
        <div className="container">
          {/* BRAND */}
          <div className="brand" itemScope itemType="https://schema.org/Brand">
            <NavLink
              to="/"
              className="brand__link"
              aria-label="E-Langual Home"
              itemProp="url"
            >
              <span className="brand__badge" aria-hidden>
                <span className="brand__badge-e">E</span>
              </span>
              <span className="brand__name" itemProp="name">
                Langual
              </span>
            </NavLink>
            <span className="brand__tag" itemProp="slogan">
              Learn languages. Unlock worlds.
            </span>
          </div>

          {/* PRIMARY NAV */}
          <nav className="nav" aria-label="Primary">
            <NavLink to="/learngrammar" className="nav__link">
              Grammar
            </NavLink>
            <NavLink to="/vocabulary" className="nav__link">
              Vocabularies
            </NavLink>
            <NavLink to="/myvocabularies" className="nav__link">
              My Library
              {vocabCount > 0 && <span className="badge">{vocabCount}</span>}
            </NavLink>
            <NavLink to="/myexams" className="nav__link">
              My Exams
            </NavLink>
          </nav>

          {/* DESKTOP: LANGUAGE DROPDOWN */}
          <div className="lang-select desktop-only">
            <label htmlFor="lang-dd" className="sr-only">
              Language pair
            </label>
            <select
              id="lang-dd"
              value={currentPair}
              onChange={(e) => handleLanguage(e.target.value)}
              aria-label="Select language pair"
            >
              {languagePairs.map(({ path, label }) => (
                <option key={path} value={path}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* MOBILE: CHIP RAIL (kein Dropdown) */}
      <div className="lang-rail mobile-only" aria-label="Language pair">
        <div className="rail container">
          {languagePairs.map(({ path, label }) => (
            <button
              key={path}
              type="button"
              className={`chip ${currentPair === path ? "is-active" : ""}`}
              aria-pressed={currentPair === path}
              onClick={() => handleLanguage(path)}
              title={`${label} dictionary`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
