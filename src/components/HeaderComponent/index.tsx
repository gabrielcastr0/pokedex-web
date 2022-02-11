import Container from "@mui/material/Container";

import * as S from "./styled";

export function HeaderComponent() {
  return (
    <S.StyledAppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <S.StyledToolbar disableGutters>
          <S.StyledTypography variant="h4" noWrap sx={{ mr: 2 }}>
            PokéDex
          </S.StyledTypography>
        </S.StyledToolbar>
      </Container>
    </S.StyledAppBar>
  );
}
