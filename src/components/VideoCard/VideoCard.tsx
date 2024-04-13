import { FiberManualRecord } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from "@mui/material";

import { stringAvatar } from "@app/utils";

import { VideoCardProps } from "./types";
import { useStyle } from "./useStyle";

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  owner,
  views,
  createdAt,
  variant = "vertical",
  caption,
  size = "small",
  sx,
  ...rest
}) => {
  const { customTypography, cardContainer, customCaption } = useStyle(sx);
  const isSmall = size === "small";

  if (variant === "horizontal") {
    return (
      <Card
        sx={{
          ...cardContainer
        }}
        {...rest}
      >
        <Stack direction={"row"}>
          <Box>
            <CardMedia
              component="img"
              image={thumbnail}
              alt="Not Found"
              sx={{
                borderRadius: "8px",
                maxHeight: "820px",
                maxWidth: "1200px"
              }}
            />
          </Box>
          <CardContent
            sx={{
              backgroundColor: "transparent",
              py: 0,
              "&.MuiCardContent-root": {
                pb: 0
              }
            }}
          >
            <Stack direction="row" gap={2}>
              <Box>
                <Typography
                  variant={isSmall ? "subtitle2" : "inherit"}
                  sx={customTypography}
                >
                  {title}
                </Typography>
                <Stack direction={isSmall ? "column" : "column-reverse"}>
                  <Typography
                    variant="caption"
                    component={"p"}
                    pt={isSmall ? 0.3 : { lg: 2, xs: 0.2 }}
                  >
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                      {!isSmall && <Avatar {...stringAvatar("Kent Dodds")} />}{" "}
                      {owner}
                    </Stack>
                  </Typography>
                  <Typography variant="caption" component={"p"} pt={0.3}>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                      {views} views <FiberManualRecord sx={{ width: 8 }} />{" "}
                      {createdAt}
                    </Stack>
                  </Typography>
                </Stack>
                {caption && !isSmall && (
                  <Typography
                    variant="caption"
                    component={"p"}
                    pt={{ lg: 2, xs: 0.2 }}
                    sx={customCaption}
                  >
                    {caption}
                  </Typography>
                )}
              </Box>
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        ...cardContainer
      }}
      {...rest}
    >
      <CardMedia
        component="img"
        height="210"
        image={thumbnail}
        alt="Not Found"
        sx={{ borderRadius: "12px" }}
      />
      <CardContent sx={{ backgroundColor: "transparent", px: 0 }}>
        <Stack direction="row" gap={2}>
          <Avatar {...stringAvatar("John Doe")} />
          <Box>
            <Typography variant="body1" sx={customTypography}>
              {title}
            </Typography>
            <Box>
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
    </Card>
  );
};

export default VideoCard;
