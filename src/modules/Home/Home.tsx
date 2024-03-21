"use client";
import { Stack, Typography } from "@mui/material";

import { useAuth } from "@app/Auth";
import { VideoCard } from "@app/components";
const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "https://source.unsplash.com/random?wallpapers"
};

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Typography variant="h4">
        Hello {user.fullName} This is A Dashboard
      </Typography>
      <Stack gap={2} m={1} direction={"row"} flexWrap={"wrap"}>
        <VideoCard {...content} />
        <VideoCard {...content} />
        <VideoCard {...content} />
        <VideoCard {...content} />
        <VideoCard {...content} />
        <VideoCard {...content} />
      </Stack>
    </>
  );
};

export default Home;
