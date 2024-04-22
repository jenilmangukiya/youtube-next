import { IStyle } from "@app/types";

export const useStyle = (sx: any, sxTitleProps: any): IStyle => ({
  cardContainer: {
    background: "none",
    cursor: "pointer",
    ...sx
  },
  customTypography: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    lineHeight: "1.4rem",
    fontWeight: "bold",
    color: "white",
    ...sxTitleProps
  },
  customCaption: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2
  }
});
