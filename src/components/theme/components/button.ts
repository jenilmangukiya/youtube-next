import { Components, Theme } from "@mui/material/styles";

export const button: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "18px",
        textTransform: "none",
        paddingLeft: "16px",
        paddingRight: "16px"
      },
      sizeSmall: {
        height: "36px"
      }
    },
    variants: [
      {
        props: { color: "white" },
        style: {
          backgroundColor: "#fff",
          color: "#000"
        }
      }
    ]
  }
};
