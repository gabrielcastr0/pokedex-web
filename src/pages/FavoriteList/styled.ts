import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const StyledContainer = styled(Container, { name: "Container" })({
  padding: "35px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const StyledGrid = styled(Grid, { name: "Grid" })({
  paddingTop: "20px",
  paddingLeft: "50px",
  paddingRight: "50px",
});

export const StyledBox1 = styled(Box, { name: "Box1" })({
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  gap: "25px",
  borderRadius: "5px",
  textAlign: "center",

  a: {
    textDecoration: "none",
  },
});

export const StyledTypography = styled(Typography)`
  color: #fff;
`;

export const StyledTextField = styled(TextField)`
  color: #fff !important;
`;

export const StyledBox2 = styled(Box, { name: "Box2" })({
  marginTop: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
