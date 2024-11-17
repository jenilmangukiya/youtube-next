import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const playlist = [
  {
    title: "Frontend Development",
    thumbnail: "/img25.jpg"
  },
  {
    title: "Backend Development",
    thumbnail: "/img24.jpeg"
  },
  {
    title: "Full Stack Crash Course",
    thumbnail: "/img23.jpg"
  },
  {
    title: "Responsive Web Design",
    thumbnail: "/img22.jpg"
  },
  {
    title: "JavaScript Fundamentals",
    thumbnail: "/img21.avif"
  },
  {
    title: "React for Beginners",
    thumbnail: "/img20.jpeg"
  }
];

const ChannelPlaylist = () => {
  return (
    <Box width={"100%"}>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {playlist.map((item) => {
          return (
            <Box width={"25%"} key={item.title} padding={1}>
              <Link href={"/pl/list1"} style={{ textDecoration: "none" }}>
                <Image
                  src={item.thumbnail}
                  alt="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
                <Typography
                  variant="body1"
                  fontWeight={700}
                  mb={1}
                  color={"text.primary"}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  View full playlist
                </Typography>
              </Link>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ChannelPlaylist;
