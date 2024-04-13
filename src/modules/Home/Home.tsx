"use client";
import { useLayoutEffect } from "react";

import { Box, Chip } from "@mui/material";
import { useRouter } from "next/navigation";

import { VideoCard, useDrawer } from "@app/components";
import { useScreenSize } from "@app/Hooks";

import { useStyle } from "./useStyle";
const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg"
};

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
        {[1, 2, 3, 4, 5, 6, 12, 7, 8, 9, 0].map((item) => {
          return (
            <Box
              key={item}
              sx={{
                padding: 1,
                width: { md: "33.33%", lg: "33.33%", sm: "50%", xs: "100%" }
              }}
            >
              <VideoCard
                {...content}
                sx={{ width: "100%" }}
                onClick={() => {
                  router.push("/v/" + item);
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
