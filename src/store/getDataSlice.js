import { createSlice } from "@reduxjs/toolkit";

const dataInitialState = {
  dummyValue: "9",
};

const getDataSlice = createSlice({
  name: "galleryData",
  initialState: dataInitialState,
  reducers: {
    printValue(state) {
      state.dummyValue = state.dummyValue + 1;
    },
  },
});

export const getDataActions = getDataSlice.actions;

export default getDataSlice.reducer;
