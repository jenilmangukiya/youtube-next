import { createTheme } from "@mui/material";

import { componentOverride } from "./components";
import { COLORS } from "./constant";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: COLORS.base_background, paper: COLORS.base_paper },
    primary: { main: "#2196f3", contrastText: "#fff" },
    secondary: { main: "#f50057" },
    white: {
      main: "#fff",
      dark: "#fff"
    },
    gray: {
      main: "#2c2727",
      dark: "#424242"
    }
  },
  components: componentOverride
});
