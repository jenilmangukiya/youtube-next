export interface VideoCardProps {
  thumbnail: string;
  title: string;
  views: string;
  owner: string;
  createdAt: string;
  caption?: string;
  variant?: "vertical" | "horizontal";
  size?: "small" | "large";
}
