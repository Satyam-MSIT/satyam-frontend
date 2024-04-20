import { createSlice } from "@reduxjs/toolkit";

// user slice
const user = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    image: "",
    current_role: "",
    default_role: "",
    token: "",
  },
  reducers: {
    reset() {
      return {};
    },
    updateToken(state, { payload: { token } }) {
      state.token = token;
    },
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

// action creators
export const { reset, updateToken, update } = user.actions;

export default user.reducer;
