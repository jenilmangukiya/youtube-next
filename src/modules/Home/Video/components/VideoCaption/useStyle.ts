import { Theme } from "@mui/material";

import { IStyle } from "@app/types";

export const useStyle = (theme: Theme, open: boolean): IStyle => ({
  caption: {
    mt: 2,
    p: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    position: "relative"
  },
  captionContent: {
    height: open ? "auto" : "80px",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  loadMoreButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    background: theme.palette.background.paper,
    px: 1,
    color: theme.palette.white?.main,
    cursor: "pointer"
  }
});
