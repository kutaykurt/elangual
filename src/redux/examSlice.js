// src/redux/examSlice.js
import { createSlice } from "@reduxjs/toolkit";

const LOCAL_KEY = "examVocabularies";

const initialState = {
  exams: JSON.parse(localStorage.getItem(LOCAL_KEY)) || [],
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    addToExam: (state, action) => {
      const exists = state.exams.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.exams.push(action.payload);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(state.exams)); // ✅ speichern
      }
    },
    removeFromExam: (state, action) => {
      state.exams = state.exams.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(state.exams)); // ✅ speichern
    },
  },
});

export const { addToExam, removeFromExam } = examSlice.actions;
export default examSlice.reducer;
