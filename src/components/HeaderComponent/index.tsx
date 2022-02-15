import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

import * as S from "./styled";

export function HeaderComponent() {
  return (
    <S.StyledAppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <S.StyledToolbar>
          <Link to="/">
            <S.StyledTypography variant="h4" noWrap sx={{ mr: 2 }}>
              PokéDex
            </S.StyledTypography>
          </Link>
        </S.StyledToolbar>
      </Container>
    </S.StyledAppBar>
  );
}
