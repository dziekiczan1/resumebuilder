import { configureStore } from "@reduxjs/toolkit";
import resumeSliceReducer from "../services/resumeSlice";
import stepSliceReducer from "../services/stepSlice";
import workExpReducer from "../services/workexpSlice";

export const store = configureStore({
  reducer: {
    resume: resumeSliceReducer,
    step: stepSliceReducer,
    workexp: workExpReducer,
  },
});
