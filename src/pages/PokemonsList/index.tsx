import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CardComponent } from "../../components/CardComponent";
import { PaginationComponent } from "../../components/PaginationComponent";
import { Pokemon } from "../../interfaces/fetchAllPokemonsResponse";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { usePokemon } from "../../redux/hooks/usePokemon";
import { setFavorites } from "../../redux/reducers/favoriteReducer";
import * as S from "./styled";

export function PokemonsList() {
  const dispatch = useDispatch();
  const favorite = useAppSelector((state) => state.favorite.favorites);
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
    setSearch(target.value.toLowerCase());
  };

  const toggleFavAction = (id: string, name: string, pic: string) => {
    dispatch(setFavorites({ id, name, pic }));
    console.log(favorite);
  };

  const displayPokemons = filteredPokemons().map(({ id, name, pic }) => {
    return (
      <Grid item xs={2} style={{ marginTop: "15px" }} key={id}>
        <CardComponent
          name={`${id}. ${toFirstCharUppercase(name)}`}
          image={pic}
          clickFn={() => toggleFavAction(id, name, pic)}
        />
      </Grid>
    );
  });

  return (
    <S.StyledContainer>
      <S.StyledBox1>
        <Link to="/">
          <S.StyledTypography variant="h6">Todos</S.StyledTypography>
        </Link>
        <S.StyledTypography variant="h6">|</S.StyledTypography>
        <Link to="/favorites">
          <S.StyledTypography variant="h6">Favoritos</S.StyledTypography>
        </Link>
      </S.StyledBox1>

      <Box mt={2}>
        <PaginationComponent
          previousPage={previousPage}
          nextPage={nextPage}
          search={search}
          onSearchChange={onSearchChange}
        />
      </Box>

      {isLoading && (
        <S.StyledBox2>
          <S.StyledTypography variant="h6">Carregando...</S.StyledTypography>
        </S.StyledBox2>
      )}

      <S.StyledGrid container spacing={2} columns={{ md: 10, xs: 2, sm: 4 }}>
        {displayPokemons}
      </S.StyledGrid>
    </S.StyledContainer>
  );
}
