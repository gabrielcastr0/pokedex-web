/* eslint-disable @typescript-eslint/no-explicit-any */
import CardHeader from "@mui/material/CardHeader";

import * as S from "./styled";

type Props = {
  name: string;
  image: string;
  clickFn: (...x: any) => any;
  showFavorite?: boolean;
  showDisfavor?: boolean;
} & typeof defaultProps;

const defaultProps = {
  showFavorite: false,
  showDisfavor: false,
};

export function CardComponent({
  name,
  image,
  clickFn,
  showFavorite,
  showDisfavor,
}: Props) {
  const handleClickBtn = (x: any) => {
    clickFn(x);
  };

  return (
    <S.StyledCard showFavorite={showFavorite} showDisfavor={showDisfavor}>
      {showFavorite && (
        <CardHeader
          action={
            <S.StyledButton onClick={handleClickBtn}>
              <S.StyledTypography1>Favoritar</S.StyledTypography1>
            </S.StyledButton>
          }
        />
      )}

      {showDisfavor && (
        <CardHeader
          action={
            <S.StyledButton1 onClick={handleClickBtn}>
              <S.StyledTypography1>Desfavoritar</S.StyledTypography1>
            </S.StyledButton1>
          }
        />
      )}

      <S.StyledCardMedia image={image} />

      <S.StyledCardContent>
        <S.StyledTypography>{name}</S.StyledTypography>
      </S.StyledCardContent>
    </S.StyledCard>
  );
}

CardComponent.defaultProps = defaultProps;
