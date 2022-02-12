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
  maxHeight: "240px",

  "&:hover": {
    transform: "matrix(1, 0, 0, 1, 0, -4)",
  },
});

export const StyledCardMedia = styled(CardMedia)`
  margin-top: 15px;
  width: 140px;
  height: 140px;
`;

export const StyledCardContent = styled(CardContent)``;

export const StyledTypography = styled(
  Typography,
  {}
)({
  color: "#fff",
  fontSize: "18px",
});
