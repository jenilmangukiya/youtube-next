import { IStyle } from "@app/types";

export const useStyle = (): IStyle => ({
  chipsContainer: {
    mt: 1,
    px: 3,
    gap: 2,
    display: "flex",
    overflowX: "scroll",
    "::-webkit-scrollbar": { width: 0 }
  },
  videosContainer: {
    px: 2,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
