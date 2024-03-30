import { createTheme } from "@mui/material";

import { COLORS } from "./constant";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: COLORS.base_background, paper: COLORS.base_paper },
    primary: { main: "#c00" },
    secondary: { main: "#3ea6ff" }
  },
  typography: {
    body2: {
      color: COLORS.light_text
    },
    caption: {
      color: COLORS.light_text
    }
  }
});
