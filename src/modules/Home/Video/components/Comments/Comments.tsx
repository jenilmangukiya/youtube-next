import { Sort } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme
} from "@mui/material";

import { stringAvatar } from "@app/utils";

import { Comment } from "./components";

const Comments = () => {
  const theme = useTheme();
  return (
    <Box mt={2}>
      <Stack direction={"row"} gap={2}>
        <Typography variant="h6" fontWeight={"700"}>
          36,324 Comments
        </Typography>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Sort />
          <Typography
            variant="body2"
            fontWeight={"400"}
            color={theme.palette.white?.main}
          >
            {" "}
            Sort by
          </Typography>
        </Stack>
      </Stack>
      <Stack mt={2} direction={"row"} gap={2} alignItems={"center"}>
        <Avatar
          {...stringAvatar("Kent Dodds")}
          sx={{ width: 42, height: 42 }}
          sizes="6px"
        />
        <TextField
          id="standard-basic"
          label="Write your comment"
          variant="standard"
          multiline
          fullWidth
          size="medium"
        />
      </Stack>
      <Stack direction={"row"} justifyContent={"end"} mt={1} gap={1}>
        <Button variant="text" color="inherit">
          Cancel
        </Button>
        <Button variant="contained">Comment</Button>
      </Stack>

      <Stack mt={2} gap={4}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Stack>
    </Box>
  );
};

export default Comments;
