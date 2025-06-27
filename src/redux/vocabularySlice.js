// src/redux/vocabularySlice.js
import { createSlice } from "@reduxjs/toolkit";

const LOCAL_KEY = "dynamicVocabularies";

const initialState = {
  dynamicVocabularies: JSON.parse(localStorage.getItem(LOCAL_KEY)) || {},
};

const slice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    addVocabulary(state, { payload: { newVocabulary, scriptType } }) {
      if (!state.dynamicVocabularies[scriptType]) {
        state.dynamicVocabularies[scriptType] = [];
      }
      if (
        !state.dynamicVocabularies[scriptType].some(
          (v) => v.id === newVocabulary.id
        )
      ) {
        state.dynamicVocabularies[scriptType].push(newVocabulary);
        localStorage.setItem(
          LOCAL_KEY,
          JSON.stringify(state.dynamicVocabularies)
        );
      }
    },
    removeVocabulary(state, { payload: { id, scriptType } }) {
      if (!state.dynamicVocabularies[scriptType]) return;
      state.dynamicVocabularies[scriptType] = state.dynamicVocabularies[
        scriptType
      ].filter((v) => v.id !== id);
      localStorage.setItem(
        LOCAL_KEY,
        JSON.stringify(state.dynamicVocabularies)
      );
    },
  },
});

export const { addVocabulary, removeVocabulary } = slice.actions;
export default slice.reducer;
