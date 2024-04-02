import "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
    gray: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    white: true;
    gray: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    white: true;
    gray: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    white?: Palette["primary"];
    gray?: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
  }
}
