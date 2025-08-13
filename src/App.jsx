import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import MyVocabulary from "./pages/MyVocabulary/MyVocabulary.jsx";
import DynamicVocabulary from "./pages/DynamicVocabulary/DynamicVocabulary.jsx";
import MyExams from "./pages/MyExams/MyExams.jsx";
import ExamPage from "./pages/ExamPage/ExamPage.jsx";
import TestPage from "./pages/Grammar/TestPage/TestPage.jsx";

import GrammarLayout from "./pages/Grammar/GrammarLayout.jsx";
import GrammarEnA1 from "./pages/Grammar/GrammarEnA1/GrammarEnA1.jsx";
// Später:
// import GrammarDE_A1 from "./pages/Grammar/GrammarDE_A1.jsx";

import "./App.scss";

import { uploadAllVocabularies } from "./utils/importAllVocabularies.js";
import A1Conversations from "./pages/Grammar/GrammarEnA1/A1EnConversations.jsx";
import GrammarEspA1 from "./pages/Grammar/GrammarEspA1/GrammarEspA1.jsx";
import GrammarGerA1 from "./pages/Grammar/GrammarGerA1/GrammarGerA1.jsx";
import GrammarGerA2 from "./pages/Grammar/GrammarGerA2/GrammarGerA2.jsx";
import GrammarEnA2 from "./pages/Grammar/GrammarEnA1/GrammarEnA2.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="body" id="main">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Homepage />} />

          {/* Grammar Hub */}
          <Route path="/grammar" element={<GrammarLayout />}>
            {/* Default: Englisch A1 */}
            <Route index element={<Navigate to="/grammar/en/a1" replace />} />
            {/* EN Levels */}
            <Route path="en/a1" element={<GrammarEnA1 />} />
            <Route path="en/a2" element={<GrammarEnA2 />} />
            {/* ESP Levels */}
            <Route path="es/a1" element={<GrammarEspA1 />} />
            {/* Ger Levels */}
            <Route path="ger/a1" element={<GrammarGerA1 />} />
            <Route path="ger/a2" element={<GrammarGerA2 />} />

            <Route
              path="en/a2"
              element={<div style={{ padding: "1rem" }}>Coming soon…</div>}
            />
            <Route
              path="en/b1"
              element={<div style={{ padding: "1rem" }}>Coming soon…</div>}
            />
            <Route
              path="en/b2"
              element={<div style={{ padding: "1rem" }}>Coming soon…</div>}
            />
            {/* Weitere Sprachen später */}
            {/* <Route path="de/a1" element={<GrammarDE_A1 />} /> */}
          </Route>

          {/* Tests */}
          <Route path="/test/:testId" element={<TestPage />} />

          {/* Vocabulary + Exams */}
          <Route path="/a1-conversations" element={<A1Conversations />} />

          <Route path="/vocabulary" element={<DynamicVocabulary />} />
          <Route path="/myvocabularies" element={<MyVocabulary />} />
          <Route path="/myexams" element={<MyExams />} />
          <Route path="/exam" element={<ExamPage />} />

          {/* Fallback */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
