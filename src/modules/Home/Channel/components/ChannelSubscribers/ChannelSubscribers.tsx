import { Stack } from "@mui/material";

import { SubscriberItem } from "./components";

const ChannelSubscribers = () => {
  return (
    <Stack gap={2} mx={"auto"} mt={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 90].map((item) => {
        return <SubscriberItem key={item} />;
      })}
    </Stack>
  );
};

export default ChannelSubscribers;
