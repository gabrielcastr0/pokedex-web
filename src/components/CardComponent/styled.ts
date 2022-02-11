import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const StyledCard = styled(Card, { name: "Card" })({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.3)",
  transform: "matrix(1, 0, 0, 1, 0, 0)",

  "&:hover": {
    transform: "matrix(1, 0, 0, 1, 0, -3.95183)",
  },
});

export const StyledCardMedia = styled(CardMedia)`
  width: 130px;
  height: 130px;
`;

export const StyledCardContent = styled(CardContent)``;

export const StyledTypography = styled(
  Typography,
  {}
)({
  color: "#fff",
});
