import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tests } from '../../../data/testData';
import './TestPage.scss';

const TestPage = () => {
  const { testId } = useParams();
  const testData = tests[testId] || [];

  const [inputs, setInputs] = useState(Array(testData.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="test-page">
      <h1>Test: {testId}</h1>

      {testData.length === 0 ? (
        <p>⚠️ Kein Test gefunden.</p>
      ) : (
        testData.map((item, index) => {
          const isCorrect =
            inputs[index].trim().toLowerCase() === item.answer.toLowerCase();
          const parts = item.sentence.split("__________");

          return (
            <div key={index} className="test-question">
              <p>
                {parts[0]}
                <input
                  type="text"
                  value={inputs[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  disabled={submitted}
                  className={
                    submitted ? (isCorrect ? "correct" : "incorrect") : ""
                  }
                />
                {parts[1]}
              </p>
              {submitted && (
                <p className={isCorrect ? "correct-text" : "incorrect-text"}>
                  {isCorrect ? "✔️ Richtig" : `❌ Falsch – richtig: ${item.answer}`}
                </p>
              )}
            </div>
          );
        })
      )}

      {!submitted && testData.length > 0 && (
        <button onClick={handleSubmit} className="submit-btn">
          Fertig
        </button>
      )}
    </div>
  );
};

export default TestPage;
