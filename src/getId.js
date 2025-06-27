// src/getId.js
import md5 from "crypto-js/md5";

export function generateVocabularyId(item, base, target) {
  const source = item[base] || "";
  const translation = item.translation?.[target] || "";
  const pronunciation = item.pronunciation || "";
  return md5(
    `${base}-${target}-${source}-${translation}-${pronunciation}`
  ).toString();
}
