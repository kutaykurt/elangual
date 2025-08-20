// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Homepage from "./pages/Homepage/Homepage.jsx";
import DynamicVocabulary from "./pages/DynamicVocabulary/DynamicVocabulary.jsx";
import MyVocabulary from "./pages/MyVocabulary/MyVocabulary.jsx";
import MyExams from "./pages/MyExams/MyExams.jsx";
import ExamPage from "./pages/ExamPage/ExamPage.jsx";
import TestPage from "./pages/Grammar/TestPage/TestPage.jsx";

import GrammarLayout from "./pages/Grammar/GrammarLayout.jsx";
import SectionPage from "./pages/Grammar/SectionPage.jsx";

import A1Conversations from "./pages/Grammar/GrammarEnA1/A1EnConversations.jsx";

/* Alte, statische Seiten – nur falls du sie weiter anzeigen willst */
import GrammarEspA1 from "./pages/Grammar/GrammarEspA1/GrammarEspA1.jsx";
import GrammarGerA1 from "./pages/Grammar/GrammarGerA1/GrammarGerA1.jsx";
import GrammarGerA2 from "./pages/Grammar/GrammarGerA2/GrammarGerA2.jsx";
import GrammarEnA2 from "./pages/Grammar/GrammarEnA1/GrammarEnA2.jsx";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="body" id="main">
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Neuer Grammar-Hub */}
          <Route path="/grammar" element={<GrammarLayout />}>
            <Route index element={<Navigate to="/grammar/en/a1" replace />} />
            <Route path=":lang/:level" element={<SectionPage />} />
            <Route path=":lang/:level/:slug" element={<SectionPage />} />
          </Route>

          {/* Optional: alte Einzel-Seiten */}
          {/* <Route path="/grammar/es/a1" element={<GrammarEspA1 />} />
          <Route path="/grammar/ger/a1" element={<GrammarGerA1 />} />
          <Route path="/grammar/ger/a2" element={<GrammarGerA2 />} />
          <Route path="/grammar/en/a2-old" element={<GrammarEnA2 />} /> */}

          <Route path="/a1-conversations" element={<A1Conversations />} />

          <Route path="/vocabulary" element={<DynamicVocabulary />} />
          <Route path="/myvocabularies" element={<MyVocabulary />} />
          <Route path="/myexams" element={<MyExams />} />
          <Route path="/exam" element={<ExamPage />} />

          <Route path="/test/:testId" element={<TestPage />} />

          <Route path="*" element={<Homepage />} />

          {/* Hier kommen Weiterleitungen zur Homepage */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
