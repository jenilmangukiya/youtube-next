import { Theme } from "@mui/material";

export const useStyle = (theme: Theme) => ({
  popupRoot: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: "none",
    borderRadius: 3
  },
  avatarStyle: {
    width: 32,
    height: 32,
    backgroundColor: "gray"
  }
});
