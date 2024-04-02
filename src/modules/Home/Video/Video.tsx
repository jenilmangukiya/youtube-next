"use client";
import {
  Download,
  MoreVert,
  Share,
  ThumbDown,
  ThumbUp
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";

import { VideoCard } from "@app/components";
import { stringAvatar } from "@app/components/VideoCard/utils/stringAvatar";

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg"
};
const Video = () => {
  const theme = useTheme();
  return (
    <Box mx={8} mt={2}>
      <Stack direction={{ md: "column", lg: "row" }}>
        <Box width={"100%"} mb={8} pr={4}>
          <Box
            sx={{
              // mr: 4,
              aspectRatio: "8/4",
              background: "gray",
              borderRadius: "12px"
            }}
          ></Box>
          <Typography variant="h6" mt={1} fontWeight={"700"}>
            End Year Gangsters Mashup 2023 | 1 Hour Nonstop Mashup | DJ Sumit
            Rajwanshi | Nonstop Jukebox 2023
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Stack direction={"row"} gap={2} mt={1} alignItems={"center"}>
                <Avatar
                  {...stringAvatar("Kent Dodds")}
                  sx={{ width: 42, height: 42 }}
                  sizes="8px"
                />
                <Stack direction={"column"}>
                  <Typography variant="subtitle2">
                    SR Music Official{" "}
                  </Typography>{" "}
                  <Typography variant="caption">1.41M subscribers</Typography>
                </Stack>
                <Button
                  color="white"
                  variant="contained"
                  size="small"
                  sx={{ fontWeight: 700, ml: 2 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
            <Stack alignItems={"center"} direction={"row"} gap={2}>
              <ButtonGroup
                disableElevation
                color="gray"
                variant="contained"
                aria-label=" button group"
              >
                <Button sx={{ textTransform: "none" }} startIcon={<ThumbUp />}>
                  Like
                </Button>
                <Button startIcon={<ThumbDown />}></Button>
              </ButtonGroup>
              <Button variant="contained" color="gray" startIcon={<Share />}>
                Share
              </Button>
              <Button variant="contained" color="gray" startIcon={<Download />}>
                Download
              </Button>
              <IconButton
                sx={{
                  backgroundColor: theme.palette.gray?.main,
                  "&:hover": {
                    backgroundColor: theme.palette.gray?.dark
                  }
                }}
              >
                <MoreVert />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        <Stack width={"602px"} gap={2} sx={{ overflow: "hidden" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <VideoCard
                {...content}
                variant="horizontal"
                size="small"
                key={item}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Video;
