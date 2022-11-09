import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./getDataSlice";

const store = configureStore({
  reducer: { gallery: getDataSlice },
});

export default store;
