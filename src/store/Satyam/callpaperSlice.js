import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../../Functions/storage";

const callpaper = createSlice({
  name: "callForPaper",
  initialState: {
    volume: "",
    issue: "",
    title: "",
    files: [],
    acceptanceTill: "",
    publishDate: "",
    acceptancePing: "",
    reviewPing: "",
    keywords: [],
    description: { content: "", length: 0 },
    initAt: Date.now(),
  },

  reducers: {
    update(state, { payload }) {
      const updatedState = { ...state, ...payload };
      setItem("form_callpaper", updatedState);
      return updatedState;
    },
  },
});

// Action Creators
export const { update } = callpaper.actions;

// Reducer
const callpaperReducer = callpaper.reducer;

export default callpaperReducer;
