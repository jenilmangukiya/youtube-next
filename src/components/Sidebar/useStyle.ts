import { Theme } from "@mui/material";

export const useStyle = (theme: Theme) => ({
  drawer: {
    width: "240px",
    ".MuiPaper-root": {
      scrollbarWidth: "none",
      backgroundColor: theme.palette.background.default,
      border: 0
    }
  }
});
