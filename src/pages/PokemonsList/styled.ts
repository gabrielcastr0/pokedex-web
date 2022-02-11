import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledGrid = styled(Grid)`
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const BodyArea = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

export const CardArea = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1100px;
  gap: 15px;
  flex-wrap: wrap;
  margin: 25px 0 150px 0;

  @media screen and (max-width: 768px) {
    margin-bottom: 230px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: #fff;
`;

export const StyledTextField = styled(TextField)`
  color: #fff !important;
`;
