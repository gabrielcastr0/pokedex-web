import * as S from "./styled";

type Props = {
  name: string;
  image: any;
};

export function CardComponent({ name, image }: Props) {
  return (
    <S.StyledCard>
      <S.StyledCardMedia image={image} />

      <S.StyledCardContent>
        <S.StyledTypography>{name}</S.StyledTypography>
      </S.StyledCardContent>
    </S.StyledCard>
  );
}
