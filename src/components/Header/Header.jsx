// src/components/Header/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBaseLanguage, setTargetLanguage } from "../../redux/languagesSlice";
import "./header.scss";

// Keine führenden Slashes bei HashRouter!
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

  const getNavLinkClass = (path) => (currentPath === path ? "active" : "");

  const handleLanguageClick = (path) => {
    const [base, target] = path.split("-");
    dispatch(setBaseLanguage(base));
    dispatch(setTargetLanguage(target));
  };

  return (
    <header className="Header">
      <div className="header-design-line" />

      <div className="header-main">
        <div className="column-one">
          <Link to="" className="link title">
            <span className="learn-word">E</span>
            <span className="japanese-word">Langual</span>
            <div className="title-underline" />
          </Link>
        </div>

        <nav className="column-two">
          <ul className="navigation">
            <li>
              <Link to="" className={`link ${getNavLinkClass("")}`}>
                Home
              </Link>
            </li>

            {languagePairs.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to="vocabulary"
                  className={`link ${getNavLinkClass(path)}`}
                  onClick={() => handleLanguageClick(path)}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="myvocabularies"
                className={`link ${getNavLinkClass("myvocabularies")}`}
              >
                My Vocabulary
              </Link>
            </li>
            <li>
              <Link
                to="myexams"
                className={`link ${getNavLinkClass("myexams")}`}
              >
                My Exams
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
