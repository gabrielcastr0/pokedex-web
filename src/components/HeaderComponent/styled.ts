import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  height: 80px;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  color: #fff;
  text-transform: uppercase;
  background: #000;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
`;
