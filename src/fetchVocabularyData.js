// src/fetchVocabularyData.js
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function fetchVocabularyData(base, target) {
  const languagePair = `${base}-${target}`;
  const url = `/data/${languagePair}.json`;

  // 🔁 Sprachpaare, die bereits auf Firestore umgestellt sind
  const useFirestore = ["turkish-english", "turkish-german"];

  // 🔍 Firestore-Fallback aktiv?
  if (useFirestore.includes(languagePair)) {
    console.log("📡 Lade aus Firestore:", languagePair);
    try {
      const collRef = collection(db, languagePair);
      const snapshot = await getDocs(collRef);
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      console.error("❌ Fehler beim Laden aus Firestore:", error);
      return [];
    }
  }

  // 🔍 Standard: lokale JSON-Datei aus public/data/
  try {
    console.log("🌐 Lade aus JSON:", url);
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} for ${url}`);
    }

    const json = await res.json();
    return json.vocabulary || json;
  } catch (e) {
    console.error("❌ Fehler beim Laden der JSON-Datei:", url, e);
    throw e;
  }
}
