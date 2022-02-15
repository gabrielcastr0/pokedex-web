import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./reducers/favoriteReducer";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
