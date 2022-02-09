import { useEffect, useState } from "react";

import api from "./services/api";
import { PokedexTypes } from "./types/PokedexTypes";

export function App() {
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [pokedex, setPokedex] = useState<PokedexTypes[]>([]);

  const displayPokemons = pokedex.map((pokedex) => {
    return (
      <div>
        <h1>{pokedex.name}</h1>
      </div>
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

  return <div>{displayPokemons}</div>;
}
