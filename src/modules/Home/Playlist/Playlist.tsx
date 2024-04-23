"use client";
import {
  Download,
  MoreVert,
  PlayArrow,
  PlaylistAdd,
  Share,
  Shuffle
} from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { VideoCard } from "@app/components";

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg"
};

const Playlist = () => {
  return (
    <Stack
      direction={"row"}
      mx={"auto"}
      mt={3}
      sx={{ height: "calc(100vh - 100px)", maxWidth: "calc(100vw - 25%)" }}
    >
      <Box
        width={"40%"}
        maxWidth={"360px"}
        p={3}
        sx={{
          background:
            "linear-gradient(to bottom, rgba(89,76,65,0.800) 0%, rgba(89,76,65,0.298) 33%, rgba(15,15,15,1.000) 100%)",
          borderRadius: 4
        }}
      >
        <Image
          src="/img2.jpg"
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "12px"
          }}
        />
        <Typography variant="h5" fontWeight={"900"} mt={3}>
          Facebook Cartoons
        </Typography>
        <Typography mt={2}>Triggered Insaan</Typography>
        <Typography variant="caption">
          6 videos 555,473 views Last updated on May 14, 2021
        </Typography>
        <Stack direction={"row"} gap={1} mt={2}>
          <IconButton sx={{ background: "#ffffff1a" }}>
            <PlaylistAdd />
          </IconButton>
          <IconButton sx={{ background: "#ffffff1a" }}>
            <Share />
          </IconButton>
          <IconButton sx={{ background: "#ffffff1a" }}>
            <Download />
          </IconButton>
          <IconButton sx={{ background: "#ffffff1a" }}>
            <MoreVert />
          </IconButton>
        </Stack>
        <Stack direction={"row"} mt={3} gap={1}>
          <Button
            variant="contained"
            color="white"
            startIcon={<PlayArrow />}
            fullWidth
          >
            Play All
          </Button>
          <Button
            fullWidth
            sx={{ background: "#ffffff1a", color: "#fff" }}
            startIcon={<Shuffle />}
          >
            Shuffle
          </Button>
        </Stack>
      </Box>
      <Stack
        width={"70%"}
        p={1}
        sx={{ overflowY: "scroll", scrollbarWidth: "none" }}
      >
        {[1, 2, 3, 4, 5, 6, 78, 8, 90, 0, 8].map((item) => {
          return (
            <Box key={item}>
              <VideoCard
                {...content}
                key={item}
                variant="horizontal"
                size="small"
              />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Playlist;
