import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";

const theme = createTheme({
  typography,
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 765,
      lg: 1275,
      xl: 1600,
    }
  }
});

export default theme;