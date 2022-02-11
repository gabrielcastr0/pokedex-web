import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import { CardComponent } from "../../components/CardComponent";
import { PaginationComponent } from "../../components/PaginationComponent";
import { usePokemon } from "../../hooks/usePokemon";
import { PokedexTypes } from "../../types/PokedexTypes";
import * as S from "./styled";

export function PokemonsList() {
  const { isLoading, pokemons } = usePokemon();
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [pokedex, setPokedex] = useState<PokedexTypes[]>([]);

  const displayPokemons = pokemons.map(({ id, name, pic }) => {
    return (
      <Grid item xs={4}>
        <CardComponent name={`${id} - ${name}`} image={pic} />
      </Grid>
    );
  });

  // const loadPokemons = async (offset: number | undefined) => {
  //   // const pokemonList = await api.getPokemons(offset);
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
  //     .then(function (response) {
  //       const { data } = response;
  //       const { results } = data;
  //       console.log(data);
  //       const newPokedex: any = {};
  //       results.forEach((pokemon: any, index: any) => {
  //         newPokedex[index + 1] = {
  //           id: index + 1,
  //           name: pokemon.name,
  //           sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
  //             index + 1
  //           }.png`,
  //         };
  //       });
  //       setCount(data.count);
  //     });
  // };

  // useEffect(() => {
  //   loadPokemons(offset);
  // }, [offset]);

  // const handleChange = (event: unknown, value: number) => {
  //   setOffset(value);
  // };

  return (
    <S.BodyArea>
      <S.TitleSection>
        <Typography>Listagem de Pokémons</Typography>
      </S.TitleSection>

      <S.StyledGrid container spacing={2}>
        {displayPokemons}
      </S.StyledGrid>

      {/* <PaginationComponent count={count} page={offset} clickFn={handleChange} /> */}
    </S.BodyArea>
  );
}
