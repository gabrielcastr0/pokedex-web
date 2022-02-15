import ButtonGroup from "@mui/material/ButtonGroup";

import * as S from "./styled";

type Props = {
  previousPage: () => void;
  nextPage: () => void;
  onSearchChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
};

export function PaginationComponent({
  previousPage,
  search,
  nextPage,
  onSearchChange,
}: Props) {
  return (
    <ButtonGroup>
      <S.StyledButton variant="contained" onClick={previousPage}>
        Anterior
      </S.StyledButton>
      <S.StyledTextField
        label="Procurar por..."
        variant="filled"
        type="text"
        value={search}
        onChange={onSearchChange}
      />
      <S.StyledButton variant="contained" onClick={nextPage}>
        Próximo
      </S.StyledButton>
    </ButtonGroup>
  );
}
