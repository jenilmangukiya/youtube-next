"use client";
import { Box, Chip } from "@mui/material";

import { VideoCard } from "@app/components";

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
  const { chipsContainer, videosContainer } = useStyle();

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
                width: { md: "33.33%", lg: "25%", sm: "50%", xs: "100%" }
              }}
            >
              <VideoCard {...content} sx={{ width: "100%" }} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Home;
