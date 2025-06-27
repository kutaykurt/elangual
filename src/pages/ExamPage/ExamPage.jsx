// src/pages/ExamPage/ExamPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./examPage.scss";

export default function ExamPage() {
  const location = useLocation();
  const vocabList = location.state?.vocabList || [];

  const [answers, setAnswers] = useState(Array(vocabList.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD") // Zerlegt Akzente (é → e + ́)
      .replace(/[\u0300-\u036f]/g, "") // Entfernt Akzentzeichen
      .replace(/ß/g, "ss")
      .replace(/ş/g, "s")
      .replace(/ş/g, "s")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ç/g, "c")
      .replace(/ñ/g, "n")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/æ/g, "ae")
      .replace(/œ/g, "oe")
      .replace(/[^a-z0-9]/g, ""); // Entfernt sonstige Sonderzeichen
  };

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    let total = 0;
    vocabList.forEach((item, index) => {
      const correct = normalizeText(item.translation[item.target]);
      const userAnswer = normalizeText(answers[index]);
      if (correct === userAnswer) total += 2;
    });
    setScore(total);
    setSubmitted(true);
  };

  return (
    <div className="exam-page-container">
      <h2>Vocabulary Exam</h2>
      <p>
        Each correct answer is worth 2 points. Total: {vocabList.length * 2}{" "}
        points
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        {vocabList.map((item, index) => (
          <div key={item.id} className="exam-question">
            <label>
              {item[item.base]}:
              <input
                type="text"
                value={answers[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={submitted}
              />
            </label>
            {submitted && (
              <span
                className={
                  normalizeText(answers[index]) ===
                  normalizeText(item.translation[item.target])
                    ? "correct"
                    : "wrong"
                }
              >
                {normalizeText(answers[index]) ===
                normalizeText(item.translation[item.target])
                  ? "✓"
                  : `✗ (Correct: ${item.translation[item.target]})`}
              </span>
            )}
          </div>
        ))}

        {!submitted ? (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <p className="exam-score">
            Your score: {score} / {vocabList.length * 2}
          </p>
        )}
      </form>
    </div>
  );
}
