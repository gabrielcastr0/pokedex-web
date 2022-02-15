/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  FetchAllPokemonResponse,
  SmallPokemon,
  Pokemon,
} from "../interfaces/fetchAllPokemonsResponse";
import { pokemonApi } from "../services/api";

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  const count = await pokemonApi.get<FetchAllPokemonResponse>(`/pokemon`);

  const resp = await pokemonApi.get<FetchAllPokemonResponse>(
    `/pokemon?limit=${count.data.count}`
  );

  const smallPokemonList = resp.data.results;

  return transformSmallPokemonIntoPokemon(smallPokemonList);
};

const transformSmallPokemonIntoPokemon = (
  smallPokemonList: SmallPokemon[]
): Pokemon[] => {
  const pokemonArr: Pokemon[] = smallPokemonList.map((poke) => {
    const pokeArr = poke.url.split("/");
    const id = pokeArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      id,
      name: poke.name,
      pic,
    };
  });

  return pokemonArr;
};
