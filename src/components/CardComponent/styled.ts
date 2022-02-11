import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333 !important;
`;

export const StyledCardMedia = styled(CardMedia)`
  width: 130px;
  height: 130px;
`;

export const StyledCardContent = styled(CardContent)``;

export const StyledTypography = styled(Typography)`
  color: #fff;
  font-weight: bold;
`;
