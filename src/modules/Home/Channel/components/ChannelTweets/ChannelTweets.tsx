import { Box, Divider, Stack } from "@mui/material";

import { Tweet } from "./components";

const tweets = [
  {
    owner: "Tech Simplified",
    createdAt: "1 day ago",
    likes: "1M",
    content: "It is an good tweet that i am doing, How is every one"
  },
  {
    owner: "Tech Simplified",
    createdAt: "2 days ago",
    likes: "500K",
    content: "The future of AI is here! How are you preparing for it?"
  },
  {
    owner: "Tech Simplified",
    createdAt: "3 days ago",
    likes: "800K",
    content: "Learning JavaScript can open so many doors for developers!"
  },
  {
    owner: "Tech Simplified",
    createdAt: "4 days ago",
    likes: "1.2M",
    content: "React or Angular? Which one do you prefer and why?"
  },
  {
    owner: "Tech Simplified",
    createdAt: "5 days ago",
    likes: "600K",
    content: "Coding tip of the day: Always write clean and maintainable code."
  },
  {
    owner: "Tech Simplified",
    createdAt: "6 days ago",
    likes: "700K",
    content: "What’s your favorite programming language and why?"
  },
  {
    owner: "Tech Simplified",
    createdAt: "1 week ago",
    likes: "450K",
    content:
      "Start your day with a small coding challenge. It makes a difference!"
  },
  {
    owner: "Tech Simplified",
    createdAt: "1 week ago",
    likes: "1.5M",
    content: "Tech is evolving fast. Stay curious and keep learning!"
  },
  {
    owner: "Tech Simplified",
    createdAt: "10 days ago",
    likes: "300K",
    content:
      "Remember, debugging is twice as hard as writing the code in the first place."
  },
  {
    owner: "Tech Simplified",
    createdAt: "12 days ago",
    likes: "900K",
    content: "What’s your go-to resource for learning new tech skills?"
  },
  {
    owner: "Tech Simplified",
    createdAt: "2 weeks ago",
    likes: "1.1M",
    content:
      "Programming isn’t about what you know; it’s about what you can figure out."
  }
];

const ChannelTweets = () => {
  return (
    <Stack gap={2} mt={3}>
      {tweets.map((item) => {
        return (
          <Box key={item.createdAt}>
            <Tweet {...item} />
            <Divider />
          </Box>
        );
      })}
    </Stack>
  );
};

export default ChannelTweets;
