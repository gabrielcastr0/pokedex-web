/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  name: string;
  favorites: Array<any>;
}

interface IAction {
  type: string;
  payload: any;
}

export const slice = createSlice({
  name: "favorite",
  initialState: {
    name: "pokemonDefault",
    favorites: [],
  },

  reducers: {
    setName: (state: IState, action: IAction) => {
      state.name = action.payload;
    },

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

export const { setName, setFavorites } = slice.actions;
export default slice.reducer;
