// src/redux/vocabularySlice.js
import { createSlice } from "@reduxjs/toolkit";

const LOCAL_KEY = "dynamicVocabularies";

const initialState = {
  // Struktur: { "turkish-english": [ { ...vocab, uniqueId }, ... ], "turkish-german": [...] }
  dynamicVocabularies: JSON.parse(localStorage.getItem(LOCAL_KEY)) || {},
};

// Hilfsfunktion: eindeutige ID pro Sprachpaar erzeugen
function makeUniqueId(scriptType, vocab) {
  // scriptType ist z.B. "turkish-english"
  const [base] = scriptType.split("-");
  // Bevorzugt vorhandene id (z.B. aus generateVocabularyId), sonst Basiswort
  const raw = vocab?.id ?? vocab?.[base];
  return `${scriptType}-${String(raw ?? "").trim()}`;
}

const slice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    addVocabulary(state, { payload: { newVocabulary, scriptType } }) {
      if (!scriptType) return;

      if (!state.dynamicVocabularies[scriptType]) {
        state.dynamicVocabularies[scriptType] = [];
      }

      const uniqueId = makeUniqueId(scriptType, newVocabulary);

      const alreadyExists = state.dynamicVocabularies[scriptType].some(
        (v) => v.uniqueId === uniqueId
      );

      if (!alreadyExists) {
        state.dynamicVocabularies[scriptType].push({
          ...newVocabulary,
          uniqueId,
        });
        localStorage.setItem(
          LOCAL_KEY,
          JSON.stringify(state.dynamicVocabularies)
        );
      }
    },

    // Entfernen per uniqueId (bevorzugt) oder id (kompatibel)
    removeVocabulary(state, { payload: { id, uniqueId, scriptType } }) {
      if (!scriptType || !state.dynamicVocabularies[scriptType]) return;

      state.dynamicVocabularies[scriptType] = state.dynamicVocabularies[
        scriptType
      ].filter((v) => {
        // Falls uniqueId mitgegeben wurde, darüber matchen;
        // sonst fallback: id (nur innerhalb dieses scriptType-Arrays!)
        if (uniqueId) return v.uniqueId !== uniqueId;
        if (id) return v.id !== id; // backward compatibility
        return true;
      });

      localStorage.setItem(
        LOCAL_KEY,
        JSON.stringify(state.dynamicVocabularies)
      );
    },
  },
});

export const { addVocabulary, removeVocabulary } = slice.actions;
export default slice.reducer;
