/* eslint-disable react/no-array-index-key */
import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

import { CardComponent } from "./components/CardComponent";
import { PaginationComponent } from "./components/PaginationComponent";
import api from "./services/api";
import { PokedexTypes } from "./types/PokedexTypes";

export function App() {
  const [offset, setOffset] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [pokedex, setPokedex] = useState<PokedexTypes[]>([]);

  const displayPokemons = pokedex.map((pokedex, index) => {
    return (
      <Grid item xs={2} sm={4} md={4} key={index}>
        <CardComponent name={pokedex.name} />
      </Grid>
    );
  });

  const loadPokemons = async (offset: number | undefined) => {
    const pokemonList = await api.getPokemons(offset);
    setPokedex(pokemonList.results);
    setCount(pokemonList.count);
  };

  useEffect(() => {
    loadPokemons(offset);
  }, [offset]);

  const handleChange = (event: unknown, value: number) => {
    setOffset(value);
  };

  return (
    <Container fixed>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {displayPokemons}
      </Grid>
      <PaginationComponent count={count} page={offset} clickFn={handleChange} />
    </Container>
  );
}
