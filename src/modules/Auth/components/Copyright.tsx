import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";

export const Copyright = (props: TypographyProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8, mb: 4 }}
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        YouTubeNext
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
