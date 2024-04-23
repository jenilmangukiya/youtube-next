import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Stack,
  StackProps,
  Typography,
  useTheme
} from "@mui/material";

import { stringAvatar } from "@app/utils";

const Tweet = (props: StackProps) => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} gap={1} {...props}>
        {" "}
        <Avatar
          {...stringAvatar("Kent Dodds")}
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
              @Nopeaceforluffy{" "}
            </Typography>
            <Typography variant="caption">2 years ago</Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            color={theme.palette.white?.main}
            fontWeight={400}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quis! Ad animi ea aperiam quam maxime debitis saepe illo aliquam
            sapiente delectus quae totam aliquid architecto, modi recusandae,
            repudiandae cum.
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={2} mt={1}>
            <ThumbUpOutlined fontSize={"small"} />
            <Typography variant="caption" color={"text.secondary"}>
              896
            </Typography>
            <ThumbDownOutlined fontSize={"small"} />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Tweet;
