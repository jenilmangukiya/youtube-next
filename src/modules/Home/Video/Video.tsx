"use client";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

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
              <Stack direction={"row"} gap={2} mt={1}>
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
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: 18, fontWeight: 700 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
            <Box></Box>
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
