import { Theme } from "@mui/material";

export const useStyle = (theme: Theme) => ({
  drawer: {
    ".MuiPaper-root": {
      scrollbarWidth: "none",
      backgroundColor: theme.palette.background.default
    }
  }
});
