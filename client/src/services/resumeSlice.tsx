import { createSlice } from "@reduxjs/toolkit";

export const profileInfoSlice = createSlice({
  name: "resume",
  initialState: {
    profileSection: {
      name: "",
      surname: "",
      mobile: "",
      email: "",
      city: "",
      birthday: "",
      github: "",
    },
  },
  reducers: {
    addProfileSection: (state, action) => {
      state.profileSection = action.payload;
    },
  },
});
export const { addProfileSection } = profileInfoSlice.actions;
export default profileInfoSlice.reducer;
