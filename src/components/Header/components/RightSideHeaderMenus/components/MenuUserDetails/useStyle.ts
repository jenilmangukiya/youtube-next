import { Theme } from "@mui/material";

export const useStyle = (theme: Theme) => ({
  avatarStyle: {
    width: 32,
    height: 32,
    backgroundColor: "gray"
  },
  linkStyle: {
    color: theme.palette.primary.main,
    fontSize: 14,
    textDecoration: "none"
  }
});
