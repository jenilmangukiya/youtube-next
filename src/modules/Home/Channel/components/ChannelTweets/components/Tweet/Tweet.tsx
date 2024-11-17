import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";

import { stringAvatar } from "@app/utils";

const Tweet = ({ owner, createdAt, likes, content }: any) => {
  const theme = useTheme();
  console.log("owner", owner);
  return (
    <>
      <Stack direction={"row"} gap={1} mb={2}>
        {" "}
        <Avatar
          {...stringAvatar(owner)}
          sx={{ width: 42, height: 42 }}
          sizes="8px"
        />
        <Box>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <Typography
              variant="subtitle2"
              color={theme.palette.white?.main}
              fontWeight={700}
            >
              @{owner}{" "}
            </Typography>
            <Typography variant="caption">{createdAt}</Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            color={theme.palette.white?.main}
            fontWeight={400}
          >
            {content}
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={2} mt={1}>
            <ThumbUpOutlined fontSize={"small"} />
            <Typography variant="caption" color={"text.secondary"}>
              {likes}
            </Typography>
            <ThumbDownOutlined fontSize={"small"} />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Tweet;
