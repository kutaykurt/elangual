// src/components/MainLayout/MainLayout.jsx
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Fuse from "fuse.js";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchFunction from "../SearchFunction/SearchFunction";

import Homepage from "../../pages/Homepage/Homepage";
import Hiragana from "../../pages/Hiragana/Hiragana";
import Katakana from "../../pages/Katakana/Katakana";
import MyVocabulary from "../../pages/MyVocabulary/MyVocabulary";
import SearchResults from "../../pages/SearchResults/SearchResults";

import useLanguageData from "../../hooks/useLanguageData";

export default function MainLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { vocabulary } = useLanguageData(lang);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(vocabulary);
  const [showPrologue, setShowPrologue] = useState(true);

  // Prologue ~2,2s
  useEffect(() => {
    const t = setTimeout(() => setShowPrologue(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // bei Pfad‐Wechsel scroll to top
  useLayoutEffect(() => window.scrollTo(0, 0), [location]);

  // wenn Vokabeln neu laden, SearchResults zurücksetzen
  useEffect(() => setSearchResults(vocabulary), [vocabulary]);

  // Fuse‐Suche
  useEffect(() => {
    const q = new URLSearchParams(location.search).get("query") || "";
    if (q.trim()) {
      const fuse = new Fuse(vocabulary, {
        keys: [
          "japaneseHiragana",
          "japaneseKatakana",
          "pronunciation",
          "translation.german",
          "translation.english",
        ],
        threshold: 0.3,
      });
      setSearchResults(fuse.search(q).map((r) => r.item));
    } else {
      setSearchResults(vocabulary);
    }
  }, [location.search, vocabulary]);

  if (showPrologue) {
    return (
      <div className="prologue">
        <span className="learn-word">Learn</span>
        <span className="language-word">{lang.toUpperCase()}</span>
      </div>
    );
  }

  return (
    <div className="App">
      <Header currentLang={lang} />

      <div className="search-container">
        <SearchFunction
          data={vocabulary}
          query={query}
          setQuery={setQuery}
          onSearchResults={setSearchResults}
          navigate={navigate}
        />
      </div>

      <div className="body">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="hiragana" element={<Hiragana />} />
          <Route path="katakana" element={<Katakana />} />
          <Route path="myvocabularies" element={<MyVocabulary />} />
          <Route
            path="search"
            element={<SearchResults data={searchResults} />}
          />
          <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
