/* eslint-disable react/no-array-index-key */
import "./App.css";
import Container from "@mui/material/Container";

import { HeaderComponent } from "./components/HeaderComponent";
import { PokemonsList } from "./pages/PokemonsList";

export function App() {
  return (
    <>
      <HeaderComponent />
      <PokemonsList />
    </>
  );
}
