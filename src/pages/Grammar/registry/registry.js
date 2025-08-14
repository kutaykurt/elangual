// src/pages/Grammar/registry.js
import en_a1 from "./en-a1";
import en_a2 from "./en-a2";
import en_b1 from "./en-b1";

const courses = {
  en: {
    a1: en_a1,
    a2: en_a2,
    b1: en_b1,
  },
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
