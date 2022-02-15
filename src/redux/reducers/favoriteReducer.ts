/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
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

      if (index > -1) {
        alert("Este pokémon já está nos favoritos!");
      } else {
        state.favorites = [...state.favorites, action.payload];
        alert("Favoritado com sucesso!");
      }
    },

    deleteFavorite: (state: IState, action: IAction) => {
      state.favorites.splice(
        state.favorites.findIndex((arrow) => arrow.id === action.payload),
        1
      );
    },
  },
});

export const { setFavorites, deleteFavorite } = slice.actions;
export default slice.reducer;
