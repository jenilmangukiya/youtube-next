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
import Image from "next/image";

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
  hideChannel = false,
  cardImageProps = {},
  titleProps = {},
  ...rest
}) => {
  const { sx: sxTitleProps, ...restTitleProps } = titleProps;
  const isSmall = size === "small";
  const { sx: sxCardMedia, ...restCardMedia } = cardImageProps;
  const { customTypography, cardContainer, customCaption } = useStyle(
    sx,
    sxTitleProps
  );

  if (variant === "horizontal") {
    return (
      <Card
        sx={{
          ...cardContainer
        }}
        {...rest}
      >
        <Stack direction={"row"}>
          <Box
            sx={{
              borderRadius: "8px",
              width: "100%",
              minWidth: "200px",
              maxWidth: "500px",
              height: "100%",
              ...sxCardMedia
            }}
          >
            <Image
              src={thumbnail}
              alt="profile pic"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px"
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
                  {...restTitleProps}
                >
                  {title}
                </Typography>
                <Stack direction={isSmall ? "column" : "column-reverse"}>
                  <Typography
                    variant="caption"
                    component={"p"}
                    color={"text.secondary"}
                    pt={isSmall ? 0.3 : { lg: 2, xs: 0.2 }}
                  >
                    {!hideChannel && (
                      <Stack direction={"row"} alignItems={"center"} gap={1}>
                        {!isSmall && <Avatar {...stringAvatar(owner)} />}{" "}
                        {owner}
                      </Stack>
                    )}
                  </Typography>
                  <Typography
                    variant="caption"
                    component={"p"}
                    pt={0.3}
                    color={"text.secondary"}
                  >
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
        sx={{ borderRadius: "12px", ...sxCardMedia }}
        {...restCardMedia}
      />
      <CardContent sx={{ backgroundColor: "transparent", px: 0 }}>
        <Stack direction="row" gap={2}>
          <Avatar {...stringAvatar(owner)} />
          <Box>
            <Typography
              variant="body1"
              sx={customTypography}
              {...restTitleProps}
            >
              {title}
            </Typography>
            <Box>
              {!hideChannel && (
                <Typography variant="body2" mt={0.3} color={"text.secondary"}>
                  {owner}
                </Typography>
              )}
              <Typography variant="caption" mt={0.3} color={"text.secondary"}>
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  {views} views <FiberManualRecord sx={{ width: 8 }} />{" "}
                  {createdAt}
                </Stack>
              </Typography>
              <Typography variant="caption" sx={customCaption}>
                {caption}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
