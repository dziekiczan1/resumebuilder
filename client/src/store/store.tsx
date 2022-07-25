import { configureStore } from "@reduxjs/toolkit";
import resumeSliceReducer from "../services/resumeSlice";
import stepSliceReducer from "../services/stepSlice";
import workExpReducer from "../services/workexpSlice";
import educationReducer from "../services/educationSlice";
import extraReducer from "../services/extraInfoSlice";

export const store = configureStore({
  reducer: {
    resume: resumeSliceReducer,
    step: stepSliceReducer,
    workexp: workExpReducer,
    education: educationReducer,
    extra: extraReducer,
  },
});
