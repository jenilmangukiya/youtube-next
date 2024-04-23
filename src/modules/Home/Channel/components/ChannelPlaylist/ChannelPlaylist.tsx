import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ChannelPlaylist = () => {
  const theme = useTheme();
  return (
    <Box width={"100%"}>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Box width={"25%"} key={item} padding={1}>
              <Link href={"/pl/list1"} style={{ textDecoration: "none" }}>
                <Image
                  src="/img2.jpg"
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
                  This is the title
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
