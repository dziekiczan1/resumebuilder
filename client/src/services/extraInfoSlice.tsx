import { createSlice } from "@reduxjs/toolkit";

export const extraInfoSlice = createSlice({
  name: "extra",
  initialState: {
    extraInfo: {
      hobbies: [],
      techstack: [],
      language: [],
      other: [],
    },
  },
  reducers: {
    addExtraInfo: (state, action) => {
      state.extraInfo = action.payload;
    },
  },
});
export const { addExtraInfo } = extraInfoSlice.actions;
export default extraInfoSlice.reducer;
