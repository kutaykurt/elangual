import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Alle Daten importieren
import englishGerman from "../data/english-german.json";
import englishSpanish from "../data/english-spanish.json";
import germanSpanish from "../data/german-spanish.json";
import turkishEnglish from "../data/turkish-english.json";
import turkishGerman from "../data/turkish-german.json";
import turkishSpanish from "../data/turkish-spanish.json";

const vocabularyFiles = [
  { data: englishGerman, name: "english-german" },
  { data: englishSpanish, name: "english-spanish" },
  { data: germanSpanish, name: "german-spanish" },
  { data: turkishEnglish, name: "turkish-english" },
  { data: turkishGerman, name: "turkish-german" },
  { data: turkishSpanish, name: "turkish-spanish" },
];

export const uploadAllVocabularies = async () => {
  for (const file of vocabularyFiles) {
    const collectionRef = collection(db, file.name);
    const entries = file.data.vocabulary;

    for (const entry of entries) {
      try {
        await addDoc(collectionRef, entry);
        console.log(
          `✅ ${file.name}: ${entry.turkish || entry.english} hochgeladen`
        );
      } catch (err) {
        console.error(`❌ Fehler bei ${file.name}:`, err);
      }
    }
  }

  console.log("🚀 Alle Vokabeln hochgeladen!");
};
