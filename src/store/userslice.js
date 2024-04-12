import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shelly Chopra",
  profile_image: "",
  role: "satyam-admin",
};

// user slice
const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    init(state, value) {
      state = value;
    },
    update(state, value) {},
  },
});

// action creators
export const { init, update } = user.actions;

export default user.reducer;
