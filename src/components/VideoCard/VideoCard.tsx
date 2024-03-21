import { FiberManualRecord } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from "@mui/material";

import { VideoCardProps } from "./types";
import { useStyle } from "./useStyle";
import { stringAvatar } from "./utils/stringAvatar";

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  owner,
  views,
  createdAt,
  variant = "vertical",
  caption,
  size = "small"
}) => {
  const { customTypography } = useStyle();
  const isSmall = size === "small";

  if (variant === "horizontal") {
    return (
      <Card
        sx={{
          maxWidth: isSmall ? 365 : 964,
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          flex: 1
        }}
      >
        <CardActionArea>
          <Stack direction={"row"}>
            <CardMedia
              component="img"
              height={isSmall ? 96 : 240}
              width={isSmall ? 172 : 1072}
              image={thumbnail}
              alt="Not Found"
              sx={{ borderRadius: "8px", width: "50%" }}
            />
            <CardContent
              sx={{ backgroundColor: "transparent", py: 0, width: "50%" }}
            >
              <Stack direction="row" gap={2}>
                <Box>
                  <Typography
                    variant={isSmall ? "body2" : "h6"}
                    sx={customTypography}
                  >
                    {title}
                  </Typography>
                  <Stack
                    direction={isSmall ? "column" : "column-reverse"}
                    sx={{ color: "#aaa" }}
                  >
                    <Typography
                      variant="caption"
                      component={"p"}
                      pt={isSmall ? 0.3 : 2}
                    >
                      <Stack direction={"row"} alignItems={"center"} gap={1}>
                        {!isSmall && (
                          <Avatar
                            {...stringAvatar("Kent Dodds")}
                            sx={{ width: 22, height: 22 }}
                            sizes="8px"
                          />
                        )}{" "}
                        {owner}
                      </Stack>
                    </Typography>
                    <Typography
                      variant="caption"
                      component={"p"}
                      pt={isSmall ? 0.3 : 0.3}
                    >
                      <Stack direction={"row"} alignItems={"center"} gap={1}>
                        {views} views <FiberManualRecord sx={{ width: 8 }} />{" "}
                        {createdAt}
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    variant="caption"
                    component={"p"}
                    pt={2}
                    sx={{ color: "#aaa" }}
                  >
                    {caption}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 365,
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        background: "none"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={thumbnail}
          alt="Not Found"
          sx={{ borderRadius: "12px" }}
        />
        <CardContent sx={{ backgroundColor: "transparent", px: 0 }}>
          <Stack direction="row" gap={2}>
            <Avatar {...stringAvatar("Kent Dodds")} />
            <Box>
              <Typography variant="body1" sx={customTypography}>
                {title}
              </Typography>
              <Box sx={{ color: "#aaa" }}>
                <Typography variant="body2" mt={0.3}>
                  {owner}
                </Typography>
                <Typography variant="caption" mt={0.3}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    {views} views <FiberManualRecord sx={{ width: 8 }} />{" "}
                    {createdAt}
                  </Stack>
                </Typography>
                <Typography variant="caption">{caption}</Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
