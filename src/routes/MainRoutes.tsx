import { useRoutes } from "react-router-dom";

import { FavoriteList } from "../pages/FavoriteList";
import { PokemonsList } from "../pages/PokemonsList";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <PokemonsList /> },
    { path: "/favorites", element: <FavoriteList /> },
  ]);
};
