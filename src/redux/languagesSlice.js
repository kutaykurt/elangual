import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseLanguage: "english",
  targetLanguage: "german",
  selected: [], // <- hier hinzufügen
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setBaseLanguage(state, action) {
      state.baseLanguage = action.payload;
    },
    setTargetLanguage(state, action) {
      state.targetLanguage = action.payload;
    },
    setSelectedLanguages(state, action) {
      state.selected = action.payload;
    },
  },
});

export const {
  setBaseLanguage,
  setTargetLanguage,
  setSelectedLanguages, // <- Export jetzt möglich
} = languagesSlice.actions;

export default languagesSlice.reducer;
