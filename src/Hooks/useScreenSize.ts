import { Theme, useMediaQuery } from "@mui/material";

export const useScreenSize = () => {
  const isXs = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const isSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const isMd = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const isLg = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("lg", "xl")
  );

  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  return { isXs, isSm, isMd, isLg, isXl };
};
