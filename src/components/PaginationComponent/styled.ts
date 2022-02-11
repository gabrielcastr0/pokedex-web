import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

export default styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  button {
    background: red;
    color: #fff;

    &:hover {
      background: #000;
    }
  }
`;
