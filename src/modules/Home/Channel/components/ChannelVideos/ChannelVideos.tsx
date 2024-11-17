import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

import { VideoCard } from "@app/components";
import { videos } from "@app/utils/videos";

const ChannelVideos = () => {
  const router = useRouter();

  return (
    <Stack direction={"row"} flexWrap={"wrap"}>
      {videos.slice(0, 10).map((item) => {
        return (
          <Box
            key={item.thumbnail}
            padding={1}
            width={{ md: "33.33%", lg: "25%", sm: "50%", xs: "100%" }}
          >
            <VideoCard
              createdAt={item.createdAt}
              owner={item.owner}
              thumbnail={item.thumbnail}
              title={item.title}
              views={item.views}
              sx={{ width: "100%" }}
              hideChannel={true}
              onClick={() => {
                router.push("/v/" + item.title);
              }}
              titleProps={{
                variant: "body2"
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
