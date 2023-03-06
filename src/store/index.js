import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./reducers/imagesSlice";
import albumSlice from "./reducers/albumSlice";

const rootReducer = combineReducers({
  images: imagesSlice,
  albums: albumSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
