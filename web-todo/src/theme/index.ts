import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { spacing } from "./spacing";

const theme = createTheme({
  palette,
  spacing,
  typography: {
    fontFamily: "Nunito",
    allVariants: {
      color: palette.text.primary,
    },
  },
});

export default theme;
