import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./barSlice/barSlice";
export const store = configureStore({
  reducer: {
    bars: barSlice,
  },
});
