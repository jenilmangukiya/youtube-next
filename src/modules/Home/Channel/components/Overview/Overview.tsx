import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Overview = () => {
  return (
    <Stack direction={"row"} mt={2} gap={3}>
      <Box>
        <Image
          src={"/img1.jpg"}
          alt="profile pic"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </Box>
      <Stack gap={2}>
        <Typography variant="h4" fontWeight={"bolder"}>
          Frontend Development
        </Typography>
        <Typography variant="body2">
          @frontendmaster ‧ 26.4M subscribers ‧ 192 videos
        </Typography>
        <Typography variant="body2">
          frontendmaster is a channel that chronicles the everyday happenings in
          the lives of BB and his family members.
        </Typography>
        <Typography variant="subtitle2">
          facebook.com/frontendmaster and 2 more links
        </Typography>
        <Box>
          <Button color="white" variant="contained">
            Subscribe
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Overview;
