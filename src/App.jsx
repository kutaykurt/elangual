import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import MyVocabulary from "./pages/MyVocabulary/MyVocabulary.jsx";
import DynamicVocabulary from "./pages/DynamicVocabulary/DynamicVocabulary.jsx";
import MyExams from "./pages/MyExams/MyExams.jsx";

import "./App.scss";
import ExamPage from "./pages/ExamPage/ExamPage.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/vocabulary" element={<DynamicVocabulary />} />
          <Route path="/myvocabularies" element={<MyVocabulary />} />
          <Route path="/myexams" element={<MyExams />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
