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

const comments = [
  {
    owner: "Tech Simplified",
    createdAt: "1 day ago",
    likes: "1M",
    content: "It is an good tweet that i am doing, How is every one"
  },
  {
    owner: "AI Explorer",
    createdAt: "2 days ago",
    likes: "500K",
    content: "The future of AI is here! How are you preparing for it?"
  },
  {
    owner: "JavaScript Guru",
    createdAt: "3 days ago",
    likes: "800K",
    content: "Learning JavaScript can open so many doors for developers!"
  },
  {
    owner: "Frontend Ninja",
    createdAt: "4 days ago",
    likes: "1.2M",
    content: "React or Angular? Which one do you prefer and why?"
  },
  {
    owner: "Clean Coder",
    createdAt: "5 days ago",
    likes: "600K",
    content: "Coding tip of the day: Always write clean and maintainable code."
  },
  {
    owner: "Code Wizard",
    createdAt: "6 days ago",
    likes: "700K",
    content: "What’s your favorite programming language and why?"
  },
  {
    owner: "Daily Dev Tips",
    createdAt: "1 week ago",
    likes: "450K",
    content:
      "Start your day with a small coding challenge. It makes a difference!"
  },
  {
    owner: "Curious Coder",
    createdAt: "1 week ago",
    likes: "1.5M",
    content: "Tech is evolving fast. Stay curious and keep learning!"
  },
  {
    owner: "Debug Specialist",
    createdAt: "10 days ago",
    likes: "300K",
    content:
      "Remember, debugging is twice as hard as writing the code in the first place."
  },
  {
    owner: "Tech Learner",
    createdAt: "12 days ago",
    likes: "900K",
    content: "What’s your go-to resource for learning new tech skills?"
  },
  {
    owner: "Programming Pro",
    createdAt: "2 weeks ago",
    likes: "1.1M",
    content:
      "Programming isn’t about what you know; it’s about what you can figure out."
  }
];

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
        {comments.map((item) => {
          return <Comment {...item} key={item.owner} />;
        })}
      </Stack>
    </Box>
  );
};

export default Comments;
