import { CardMediaProps, CardProps, TypographyProps } from "@mui/material";

export interface VideoCardProps extends Omit<CardProps, "variant"> {
  thumbnail: string;
  title: string;
  views: string;
  owner: string;
  createdAt: string;
  caption?: string;
  variant?: "vertical" | "horizontal";
  size?: "small" | "large";
  hideChannel?: boolean;
  cardImageProps?: CardMediaProps;
  titleProps?: TypographyProps;
}
