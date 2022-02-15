import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CardComponent } from "../../components/CardComponent";
import { PaginationComponent } from "../../components/PaginationComponent";
import { useAppSelector } from "../../hooks/useAppSelector";
import { usePokemon } from "../../hooks/usePokemon";
import { Pokemon } from "../../interfaces/fetchAllPokemonsResponse";
import { setFavorites } from "../../redux/reducers/favoriteReducer";
import * as S from "./styled";

export function FavoriteList() {
  const dispatch = useDispatch();
  const favorite = useAppSelector((state) => state.favorite.favorites);
  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredPokemons = (): Pokemon[] => {
    if (search.length === 0) {
      return favorite.slice(currentPage, currentPage + 10);
    }

    const filtered = favorite.filter((poke: { name: string }) =>
      poke.name.includes(search)
    );
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
    <S.BodyArea>
      <S.OptionsSection>
        <Link to="/">
          <S.StyledTypography variant="h6">Todos</S.StyledTypography>
        </Link>
        <S.StyledTypography variant="h6">|</S.StyledTypography>
        <Link to="/favorites">
          <S.StyledTypography variant="h6">Favoritos</S.StyledTypography>
        </Link>
      </S.OptionsSection>

      <div style={{ marginTop: "15px" }}>
        <PaginationComponent
          previousPage={previousPage}
          nextPage={nextPage}
          search={search}
          onSearchChange={onSearchChange}
        />
      </div>

      {isLoading && <S.StyledTypography>Carregando...</S.StyledTypography>}

      {displayPokemons.length > 0 && (
        <S.StyledGrid container spacing={2} columns={{ md: 10, xs: 2, sm: 4 }}>
          {displayPokemons}
        </S.StyledGrid>
      )}

      {displayPokemons.length <= 0 && (
        <S.StyledTypography>Não há favoritos!</S.StyledTypography>
      )}
    </S.BodyArea>
  );
}
