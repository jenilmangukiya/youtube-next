"use client";
import { useLayoutEffect } from "react";

import { Box, Chip } from "@mui/material";
import { useRouter } from "next/navigation";

import { VideoCard, useDrawer } from "@app/components";
import { useScreenSize } from "@app/hooks";
import { videos } from "@app/utils/videos";

import { useStyle } from "./useStyle";

const categories = [
  "Funny",
  "Pets & Animals",
  "Tutorial",
  "Music",
  "Travel",
  "Gaming",
  "Food",
  "Sports",
  "Technology",
  "Education",
  "Fashion",
  "Science",
  "Documentary",
  "Art",
  "Entertainment",
  "Fitness",
  "DIY & Crafts",
  "Comedy",
  "Health & Wellness",
  "News & Politics"
];

const Home = () => {
  const router = useRouter();
  const { chipsContainer, videosContainer } = useStyle();

  const { setIsSidebarOpen } = useDrawer() as any;
  const { isLg: isLargeScreen } = useScreenSize();

  useLayoutEffect(() => {
    isLargeScreen && setIsSidebarOpen(true);
  }, [isLargeScreen, setIsSidebarOpen]);

  return (
    <>
      <Box sx={chipsContainer}>
        {categories.map((item) => {
          return <Chip label={item} key={item} />;
        })}
      </Box>
      <Box sx={videosContainer}>
        {videos.map((item) => {
          return (
            <Box
              key={item.title}
              sx={{
                padding: 1,
                width: { md: "33.33%", lg: "33.33%", sm: "50%", xs: "100%" }
              }}
            >
              <VideoCard
                createdAt={item.createdAt}
                owner={item.owner}
                thumbnail={item.thumbnail}
                title={item.title}
                views={item.views}
                sx={{ width: "100%" }}
                onClick={() => {
                  router.push("/v/" + item.title);
                }}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Home;
