import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from "./vocabularySlice";
import languagesReducer from "./languagesSlice";

const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
    languages: languagesReducer,
  },
});

export default store;
