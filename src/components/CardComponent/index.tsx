/* eslint-disable @typescript-eslint/no-explicit-any */
import StarIcon from "@mui/icons-material/Star";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

import * as S from "./styled";

type Props = {
  name: string;
  image: string;
  clickFn: (...x: any) => any;
  show: boolean;
};

export function CardComponent({ name, image, clickFn, show }: Props) {
  const handleClickBtn = (x: any) => {
    clickFn(x);
  };

  return (
    <S.StyledCard show={show}>
      {show && (
        <CardHeader
          action={
            <IconButton>
              <StarIcon onClick={handleClickBtn} />
            </IconButton>
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
