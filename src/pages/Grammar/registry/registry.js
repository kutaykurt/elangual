// src/pages/Grammar/registry.js
import en_a1 from "./en-a1";
import en_a2 from "./en-a2";
import en_b1 from "./en-b1";
import en_b2 from "./en-b2";
import ger_a1 from "./ger-a1";
import ger_a2 from "./ger-a2";

const courses = {
  en: {
    a1: en_a1,
    a2: en_a2,
    b1: en_b1,
    b2: en_b2,
  },
  ger: {
    a1: ger_a1,
    a2: ger_a2,
  }
  // ger, es ... später
};

export function getCourse(lang, level) {
  const L = (lang || "").toLowerCase();
  const LV = (level || "").toLowerCase();
  return courses[L]?.[LV] || null;
}

export function getSections(lang, level) {
  return getCourse(lang, level)?.sections ?? [];
}
