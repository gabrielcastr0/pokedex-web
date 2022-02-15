/* eslint-disable @typescript-eslint/no-explicit-any */
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

import * as S from "./styled";

type Props = {
  name: string;
  image: string;
  clickFn: (...x: any) => any;
};

export function CardComponent({ name, image, clickFn }: Props) {
  const [favorite, setFavorite] = useState(false);

  const handleClickBtn = (x: any) => {
    setFavorite(!favorite);
    clickFn(x);
  };

  return (
    <S.StyledCard>
      <CardHeader
        action={
          <IconButton>
            {favorite && <FavoriteIcon />}
            {!favorite && (
              <FavoriteBorderOutlinedIcon onClick={handleClickBtn} />
            )}
          </IconButton>
        }
      />
      <S.StyledCardMedia image={image} />

      <S.StyledCardContent>
        <S.StyledTypography>{name}</S.StyledTypography>
      </S.StyledCardContent>
    </S.StyledCard>
  );
}
