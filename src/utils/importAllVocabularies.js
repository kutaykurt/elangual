import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// ❌ public-Imports auskommentiert – React erlaubt keine Imports aus public
// import turkishEnglish from "../../public/data/turkish-english.json";
// import turkishGerman from "../../public/data/turkish-german.json";
// import turkishSpanish from "../../public/data/turkish-spanish.json";

// Vorübergehend leeres Array, damit Schleifen funktionieren
const vocabularyFiles = []; // früher: [ { data: turkishEnglish, name: "..."}, ... ]

export const uploadAllVocabularies = async () => {
  console.log(
    "⚠️ uploadAllVocabularies deaktiviert – kein Upload durchgeführt."
  );
  // Wenn du später wieder hochladen willst, entweder Dateien nach src verschieben
  // oder per fetch(`${process.env.PUBLIC_URL}/data/dateiname.json`) laden.
};
