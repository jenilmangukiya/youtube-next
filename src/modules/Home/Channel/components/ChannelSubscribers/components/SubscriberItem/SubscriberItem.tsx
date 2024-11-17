import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

import { stringAvatar } from "@app/utils";

const SubscriberItem = ({
  name,
  subscriberCount
}: {
  name: string;
  subscriberCount: string;
}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"} gap={2}>
        <Avatar {...stringAvatar(name)} sizes="8px" />
        <Box>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2">{subscriberCount} Subscribers</Typography>
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
