import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

import { stringAvatar } from "@app/utils";

const SubscriberItem = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"} gap={2}>
        <Avatar
          {...stringAvatar("Kent Dodds")}
          sx={{ width: 42, height: 42 }}
          sizes="8px"
        />
        <Box>
          <Typography variant="body1">Code master</Typography>
          <Typography variant="body2">20K Subscribers</Typography>
        </Box>
      </Stack>
      <Box>
        <Button variant="contained" color="primary" size="small">
          Subscribe
        </Button>
      </Box>
    </Stack>
  );
};

export default SubscriberItem;
