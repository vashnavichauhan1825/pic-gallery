import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dataInitialState = {
  dummyValue: "9",
  imageData: [],
  loading: false,
};
export const getImages = createAsyncThunk("posts/getPosts", async () => {
  return fetch(
    `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  ).then((res) => res.json());
});
const getDataSlice = createSlice({
  name: "galleryData",
  initialState: dataInitialState,
  reducers: {
    printValue(state) {
      state.dummyValue = state.dummyValue + 1;
    },
  },
  extraReducers: {
    [getImages.pending]: (state, action) => {
      state.loading = true;
    },
    [getImages.fulfilled]: (state, action) => {
      state.loading = false;
      state.imageData = action.payload;
    },
    [getImages.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const getDataActions = getDataSlice.actions;

export default getDataSlice.reducer;
