import { Components, Theme } from "@mui/material";

import { COLORS } from "../constant";

export const typography: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      body2: {
        color: COLORS.light_text
      },
      caption: {
        color: COLORS.light_text
      }
    }
  }
};
