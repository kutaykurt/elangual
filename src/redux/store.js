import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from "./vocabularySlice";
import languagesReducer from "./languagesSlice";
import examReducer from "./examSlice"; // ✅ NEU

const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
    languages: languagesReducer,
    exam: examReducer, // ✅ HIER EINBINDEN
  },
});

export default store;
