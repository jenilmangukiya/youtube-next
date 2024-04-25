import {
  Download,
  MoreVert,
  Share,
  ThumbDown,
  ThumbUp
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import Link from "next/link";

import { useScreenSize } from "@app/hooks";
import { stringAvatar } from "@app/utils";

const VideoActions = () => {
  const theme = useTheme();
  const { isXs: isMobile, isSm } = useScreenSize();
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        mt={1}
      >
        <Stack direction={"row"} justifyContent={"flex-start"} width={"100%"}>
          <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={{ xs: "space-between", sm: "flex-start" }}
            width={"100%"}
          >
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
                    color={"text.primary"}
                    fontWeight={700}
                  >
                    SR Music Official{" "}
                  </Typography>{" "}
                  <Typography variant="caption" color={"text.secondary"}>
                    1.41M subscribers
                  </Typography>
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
        </Stack>
        <Stack
          alignItems={"center"}
          direction={"row"}
          gap={1}
          width={"100%"}
          justifyContent={{ xs: "space-between", sm: "flex-end" }}
        >
          <Stack direction={"row"} gap={1}>
            <ButtonGroup
              disableElevation
              color="gray"
              variant="contained"
              aria-label=" button group"
            >
              <Button sx={{ textTransform: "none" }} startIcon={<ThumbUp />}>
                20k
              </Button>
              <Button startIcon={<ThumbDown />}></Button>
            </ButtonGroup>
            {!(isSm || isMobile) && (
              <Button variant="contained" color="gray" startIcon={<Share />}>
                {!isMobile && "Share"}
              </Button>
            )}
            {!(isSm || isMobile) && (
              <Button variant="contained" color="gray" startIcon={<Download />}>
                {!isMobile && "Download"}
              </Button>
            )}
          </Stack>
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
