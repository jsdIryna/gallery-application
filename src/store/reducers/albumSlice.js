import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums: [],
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    createAlbum(state, action) {
      state.albums.push(action.payload);
    },

    updateAlbum(state, action) {
      const { albumName, webformatURL, pageURL } = action.payload;
      const existingAlbums = JSON.parse(JSON.stringify(state.albums));
      existingAlbums
        .find(({ name }) => name === albumName)
        .content.push({ webformatURL, pageURL });
      state.albums = [...existingAlbums];
    },
    removePhotoFromAlbum(state, action) {
      const { src, folderId } = action.payload;

      state.albums = state.albums.map(item => {
        if (item.id === +folderId) {
          return {
            ...item,
            content: item.content.filter(({ webformatURL }) => webformatURL !== src)
          };
        }
        return item;
      });
    },
    removeAlbum(state, action) {
      state.albums = state.albums.filter(({ id }) => id !== action.payload);
    },
  },
});

export default albumSlice.reducer;
export const { createAlbum, updateAlbum, removePhotoFromAlbum, removeAlbum } =
  albumSlice.actions;
