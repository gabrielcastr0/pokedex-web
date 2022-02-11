import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const StyledAppBar = styled(AppBar, { name: "AppBar" })({
  height: "80px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
});

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTypography = styled(Typography, { name: "Typography" })({
  fontFamily: "Bangers",
  color: "#fff",
  textTransform: "uppercase",
});
