import { createTheme } from "@mui/material";

import { componentOverride } from "./components";
import { COLORS } from "./constant";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: COLORS.base_background, paper: COLORS.base_paper },
    primary: { main: COLORS.primary_main, contrastText: COLORS.primary_text },
    secondary: { main: COLORS.secondary_main },
    text: {
      primary: COLORS.white,
      secondary: COLORS.light_text
    },
    white: {
      main: COLORS.white,
      dark: COLORS.white
    },
    gray: {
      main: COLORS.gray_main,
      dark: COLORS.gray_dark
    }
  },
  components: componentOverride
});
