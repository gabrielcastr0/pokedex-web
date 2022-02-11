import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import { CardComponent } from "../../components/CardComponent";
import { usePokemon } from "../../hooks/usePokemon";
import { Pokemon } from "../../interfaces/fetchAllPokemonsResponse";
import * as S from "./styled";

export function PokemonsList() {
  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredPokemons = (): Pokemon[] => {
    if (search.length === 0) {
      return pokemons.slice(currentPage, currentPage + 10);
    }
    const filtered = pokemons.filter((poke) => poke.name.includes(search));
    return filtered.slice(currentPage, currentPage + 5);
  };

  const toFirstCharUppercase = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 10);
    }
  };

  const nextPage = () => {
    if (
      pokemons.filter((poke) => poke.name.includes(search)).length >
      currentPage + 10
    ) {
      setCurrentPage(currentPage + 10);
    }
  };

  const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  const displayPokemons = filteredPokemons().map(({ id, name, pic }) => {
    return (
      <Grid item xs={3}>
        <CardComponent
          name={`${id}. ${toFirstCharUppercase(name)}`}
          image={pic}
        />
      </Grid>
    );
  });

  return (
    <S.BodyArea>
      <S.TitleSection>
        <S.StyledTypography variant="h6">
          Listagem de Pokémons
        </S.StyledTypography>
      </S.TitleSection>

      <ButtonGroup>
        <Button variant="contained" onClick={previousPage}>
          Anterior
        </Button>
        <S.StyledTextField
          label="Buscar pokémon..."
          variant="filled"
          type="text"
          value={search}
          onChange={onSearchChange}
        />
        <Button variant="contained" onClick={nextPage}>
          Próximo
        </Button>
      </ButtonGroup>

      {isLoading && <S.StyledTypography>Carregando...</S.StyledTypography>}

      <S.StyledGrid container spacing={2}>
        {displayPokemons}
      </S.StyledGrid>
    </S.BodyArea>
  );
}
