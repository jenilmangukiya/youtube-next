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
  size = "small",
  sx,
  ...rest
}) => {
  const { customTypography, cardContainer } = useStyle();
  const isSmall = size === "small";

  if (variant === "horizontal") {
    return (
      <Card
        sx={{
          maxWidth: isSmall ? 365 : 964,
          ...cardContainer,
          ...sx
        }}
        {...rest}
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
                  <Stack direction={isSmall ? "column" : "column-reverse"}>
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
                  <Typography variant="caption" component={"p"} pt={2}>
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
        ...cardContainer,
        ...sx
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
