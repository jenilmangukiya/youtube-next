"use client";

import { useLayoutEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { VideoCard, useDrawer } from "@app/components";
import { useScreenSize } from "@app/hooks";

import {
  VideoPlayer,
  VideoActions,
  VideoCaption,
  Comments
} from "./components";

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg",
  caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci tempore rerum repellendus assumenda maiores quisquam laborum, odit libero at, nulla hic totam. Officia sapiente, doloremque nulla debitis modi iure!"
};

const videoTitle =
  "End Year Gangsters Mashup 2023 | 1 Hour Nonstop Mashup | DJ Sumit Rajwanshi | Nonstop Jukebox 2023";

const Video = () => {
  const router = useRouter();
  const { setIsSidebarOpen } = useDrawer() as any;
  const { isLg: isLargeScreen } = useScreenSize();

  useLayoutEffect(() => {
    setIsSidebarOpen(false);
  }, [setIsSidebarOpen]);

  return (
    <Box mx={4} mt={2}>
      <Stack direction={{ md: "column", lg: "row" }}>
        <Box width={"100%"} mb={8} pr={4}>
          <VideoPlayer />
          <Typography variant="h6" mt={1} fontWeight={"700"}>
            {videoTitle}
          </Typography>
          <VideoActions />
          <VideoCaption />
          <Comments />
        </Box>
        <Stack width={{ lg: "602px" }} gap={2} sx={{ overflow: "hidden" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <VideoCard
                {...content}
                variant="horizontal"
                size={isLargeScreen ? "small" : "large"}
                key={item}
                onClick={() => {
                  router.push("/v/" + item);
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Video;
