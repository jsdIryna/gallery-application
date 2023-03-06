import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getImage } from "../../api/getImages";

export const getImages = createAsyncThunk("images/getImages", getImage);

const initialState = {
  images: [],
  total: 0,
  isLikeImage: false,
  likedImages: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setLiked(state, action) {
      state.likedImages.push(action.payload);
    },
    unLiked(state, action) {
      state.likedImages = state.likedImages.filter(
        ({ webformatURL }) => webformatURL !== action.payload
      );
    },
  },
  extraReducers: {
    [getImages.fulfilled]: (state, action) => {
      const { hits, totalHits } = action.payload;
      state.images = hits;
      state.total = totalHits;
    },
  },
});

export default imagesSlice.reducer;
export const { setLiked, unLiked } = imagesSlice.actions;
