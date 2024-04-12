import { Components, Theme } from "@mui/material";

export const textfield: Components<Theme> = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        ":hover": {
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "gray"
          }
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray"
          }
        }
      }
    }
  }
};
