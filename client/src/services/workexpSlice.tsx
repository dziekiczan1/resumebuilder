import { createSlice } from "@reduxjs/toolkit";

export const workExpSlice = createSlice({
  name: "work",
  initialState: {
    workExperiance: [],
  },
  reducers: {
    addWorkExp: (state, action) => {
      state.workExperiance = action.payload;
    },
  },
});
export const { addWorkExp } = workExpSlice.actions;
export default workExpSlice.reducer;
