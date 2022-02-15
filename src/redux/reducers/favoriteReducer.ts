/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  favorites: Array<any>;
}

interface IAction {
  type: string;
  payload: any;
}

export const slice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },

  reducers: {
    setFavorites: (state: IState, action: IAction) => {
      const favoriteList = [...state.favorites];
      const { id } = action.payload;

      const index = favoriteList.findIndex((item) => item.id === id);
      console.log(index);

      if (index > -1) {
        console.log("Já foi registrado!");
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
  },
});

export const { setFavorites } = slice.actions;
export default slice.reducer;
