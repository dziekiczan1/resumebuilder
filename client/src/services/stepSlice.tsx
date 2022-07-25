import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "step",
  initialState: {
    activeStep: 0,
  },
  reducers: {
    increment: (state) => {
      state.activeStep += 1;
    },
    decrement: (state) => {
      state.activeStep -= 1;
    },
  },
});
export const { increment, decrement } = stepSlice.actions;
export default stepSlice.reducer;
