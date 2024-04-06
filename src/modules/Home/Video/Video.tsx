"use client";
import { Box, Stack, Typography } from "@mui/material";

import { VideoCard } from "@app/components";

import { VideoPlayer, VideoActions, VideoCaption } from "./components";

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg"
};

const videoTitle =
  "End Year Gangsters Mashup 2023 | 1 Hour Nonstop Mashup | DJ Sumit Rajwanshi | Nonstop Jukebox 2023";

const Video = () => {
  return (
    <Box mx={8} mt={2}>
      <Stack direction={{ md: "column", lg: "row" }}>
        <Box width={"100%"} mb={8} pr={4}>
          <VideoPlayer />
          <Typography variant="h6" mt={1} fontWeight={"700"}>
            {videoTitle}
          </Typography>
          <VideoActions />
          <VideoCaption />
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
