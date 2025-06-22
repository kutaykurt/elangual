import md5 from "crypto-js/md5";

export function generateVocabularyId(item, language) {
  const key = `${
    item.japaneseHiragana || item.japaneseKatakana || item.character
  }-${item.pronunciation}-${item.translation?.[language] || ""}-${language}`; // Sprache am Ende hinzufügen
  return md5(key).toString();
}
