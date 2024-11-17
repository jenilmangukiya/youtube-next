import { Stack } from "@mui/material";

import { SubscriberItem } from "./components";

const subscriber = [
  {
    name: "Code Master",
    subscriberCount: "20K"
  },
  {
    name: "Tech Guru",
    subscriberCount: "50K"
  },
  {
    name: "Dev Insider",
    subscriberCount: "30K"
  },
  {
    name: "Frontend Focus",
    subscriberCount: "15K"
  },
  {
    name: "Backend Wizard",
    subscriberCount: "40K"
  },
  {
    name: "JS Explorer",
    subscriberCount: "25K"
  },
  {
    name: "React Expert",
    subscriberCount: "35K"
  },
  {
    name: "Code Enthusiast",
    subscriberCount: "10K"
  },
  {
    name: "Debug Hero",
    subscriberCount: "18K"
  },
  {
    name: "Tech Ninja",
    subscriberCount: "22K"
  },
  {
    name: "Code Mentor",
    subscriberCount: "28K"
  },
  {
    name: "Dev Visionary",
    subscriberCount: "33K"
  },
  {
    name: "Full Stack Fanatic",
    subscriberCount: "45K"
  },
  {
    name: "Design Pro",
    subscriberCount: "12K"
  },
  {
    name: "Coding Sprinter",
    subscriberCount: "8K"
  },
  {
    name: "Algorithm Ace",
    subscriberCount: "19K"
  }
];

const ChannelSubscribers = () => {
  return (
    <Stack gap={2} mx={"auto"} mt={2}>
      {subscriber.map((item) => {
        return <SubscriberItem key={item.name} {...item} />;
      })}
    </Stack>
  );
};

export default ChannelSubscribers;
