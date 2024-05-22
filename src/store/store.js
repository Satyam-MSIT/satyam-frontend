// Third party modules
import { configureStore } from "@reduxjs/toolkit";

// User Modules
import userReducer from "./userslice";
import callpaperReducer from "./Satyam/callpaperSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    callpaper: callpaperReducer,
  },
});

export default store;
