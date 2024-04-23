import { Box, Divider, Stack } from "@mui/material";

import { Tweet } from "./components";

const ChannelTweets = () => {
  return (
    <Stack gap={2} mt={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => {
        return (
          <Box key={item}>
            <Tweet key={item} mb={2} />
            <Divider />
          </Box>
        );
      })}
    </Stack>
  );
};

export default ChannelTweets;
