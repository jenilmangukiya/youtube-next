"use client";
import { Stack } from "@mui/material";

import { VideoCard } from "@app/components";
import { useScreenSize } from "@app/hooks";

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "/img.jpg",
  caption:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis delectus autem voluptatum! Minus non nemo sed esse sequi nulla reiciendis possimus itaque architecto placeat numquam repellendus ipsa, vitae amet!"
};
const resultList = [
  content,
  content,
  content,
  content,
  content,
  content,
  content,
  content
];

const Results = () => {
  const { isXs } = useScreenSize();
  return (
    <>
      <Stack width={"90%"} mx={"auto"} mt={4} gap={2}>
        {resultList.map((item, index) => {
          return (
            <VideoCard
              {...item}
              key={index}
              variant={isXs ? "vertical" : "horizontal"}
              size="large"
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Results;
