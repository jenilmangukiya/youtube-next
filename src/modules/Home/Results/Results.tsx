"use client";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

import { VideoCard } from "@app/components";
import { useScreenSize } from "@app/hooks";
import { videos } from "@app/utils/videos";

export const Results = () => {
  const { isXs } = useScreenSize();
  const router = useRouter();
  return (
    <>
      <Stack width={"90%"} mx={"auto"} mt={4} gap={2}>
        {videos.map((item, index) => {
          return (
            <VideoCard
              createdAt={item.createdAt}
              owner={item.owner}
              thumbnail={item.thumbnail}
              title={item.title}
              views={item.views}
              key={index}
              variant={isXs ? "vertical" : "horizontal"}
              size="large"
              onClick={() => {
                router.push("/v/" + item.title);
              }}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Results;
