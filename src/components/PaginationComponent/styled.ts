import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export const StyledButton = styled(Button, { name: "Button" })({
  background: "rgba(0, 0, 0, 0.3)",
});

export const StyledTextField = styled(TextField, { name: "TextField" })({
  label: {
    color: "#fff !important",
  },

  input: {
    "&:focus": {
      color: "#fff !important",
    },
  },
});
