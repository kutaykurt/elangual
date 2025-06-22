import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [], // z.B. ["jp-hiragana","de"]
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setSelectedLanguages(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedLanguages } = languagesSlice.actions;
export default languagesSlice.reducer;
