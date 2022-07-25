import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: {
    education: [],
  },
  reducers: {
    addSchool: (state, action) => {
      state.education = action.payload;
    },
  },
});
export const { addSchool } = educationSlice.actions;
export default educationSlice.reducer;
