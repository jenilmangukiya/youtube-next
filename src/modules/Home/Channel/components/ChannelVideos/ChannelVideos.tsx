import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

import { VideoCard } from "@app/components";

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg"
};

const ChannelVideos = () => {
  const router = useRouter();
  return (
    <Stack direction={"row"} flexWrap={"wrap"}>
      {[1, 2, 3, 4, 5, 6, 12, 7, 8, 9, 0].map((item) => {
        return (
          <Box
            key={item}
            padding={1}
            width={{ md: "33.33%", lg: "25%", sm: "50%", xs: "100%" }}
          >
            <VideoCard
              {...content}
              sx={{ width: "100%" }}
              hideChannel={true}
              onClick={() => {
                router.push("/v/" + item);
              }}
              cardImageProps={{
                sx: {
                  maxHeight: 140
                }
              }}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default ChannelVideos;
