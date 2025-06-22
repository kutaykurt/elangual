// src/hooks/useLanguageData.jsx
import { useState, useEffect } from "react";

export default function useLanguageData(langCode) {
  const [data, setData] = useState({
    hiraganaAlphabet: [],
    katakanaAlphabet: [],
    vocabulary: [],
    dailyLearning: {},
  });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/data/${langCode}.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData({
          hiraganaAlphabet: json.hiraganaAlphabet || [],
          katakanaAlphabet: json.katakanaAlphabet || [],
          vocabulary: json.vocabulary || [],
          dailyLearning: json.dailyLearning || {},
        });
      } catch (err) {
        console.error("Error loading data:", err);
        setData({
          hiraganaAlphabet: [],
          katakanaAlphabet: [],
          vocabulary: [],
          dailyLearning: {},
        });
      }
    }
    load();
  }, [langCode]);

  return data;
}
