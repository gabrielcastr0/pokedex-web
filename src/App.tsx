/* eslint-disable react/no-array-index-key */
import "./App.css";
import Container from "@mui/material/Container";

import { HeaderComponent } from "./components/HeaderComponent";
import { PokemonsList } from "./pages/PokemonsList";
import { MainRoutes } from "./routes/MainRoutes";

export function App() {
  return (
    <main>
      <HeaderComponent />
      <MainRoutes />
    </main>
  );
}
