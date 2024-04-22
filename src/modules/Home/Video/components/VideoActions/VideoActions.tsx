import {
  Download,
  MoreVert,
  Share,
  ThumbDown,
  ThumbUp
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import Link from "next/link";

import { stringAvatar } from "@app/utils";

const VideoActions = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        direction={{ sm: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Stack direction={"row"} gap={2} mt={1} alignItems={"center"}>
            <Link href={"/c/channel"} style={{ textDecoration: "none" }}>
              <Stack direction={"row"} gap={2} sx={{ cursor: "pointer" }}>
                <Avatar
                  {...stringAvatar("Kent Dodds")}
                  sx={{ width: 42, height: 42 }}
                  sizes="8px"
                />
                <Stack direction={"column"}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.white?.main }}
                    fontWeight={700}
                  >
                    SR Music Official{" "}
                  </Typography>{" "}
                  <Typography variant="caption">1.41M subscribers</Typography>
                </Stack>
              </Stack>
            </Link>
            <Button
              color="white"
              variant="contained"
              size="small"
              sx={{ fontWeight: 700, ml: 2 }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <ButtonGroup
            disableElevation
            color="gray"
            variant="contained"
            aria-label=" button group"
          >
            <Button sx={{ textTransform: "none" }} startIcon={<ThumbUp />}>
              Like
            </Button>
            <Button startIcon={<ThumbDown />}></Button>
          </ButtonGroup>
          <Button variant="contained" color="gray" startIcon={<Share />}>
            Share
          </Button>
          <Button variant="contained" color="gray" startIcon={<Download />}>
            Download
          </Button>
          <IconButton
            sx={{
              backgroundColor: theme.palette.gray?.main,
              "&:hover": {
                backgroundColor: theme.palette.gray?.dark
              }
            }}
          >
            <MoreVert />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default VideoActions;
