import {
  AccountBox,
  Feedback,
  Flag,
  Help,
  History,
  Home,
  Person,
  Settings,
  Subscriptions,
  VideoCameraBack,
  WatchLater
} from "@mui/icons-material";

const subscriptionsMenu = [
  {
    label: "Jenil Mangukiya",
    icon: <Person />
  },
  {
    label: "Raj jasoliya",
    icon: <Person />
  },
  {
    label: "Bhautik maniya",
    icon: <Person />
  },
  {
    label: "Yash kakadiya",
    icon: <Person />,
    isLast: true
  }
];
export const sidebarMenu = [
  {
    label: "Home",
    icon: <Home />
  },
  {
    label: "Subscription",
    icon: <Subscriptions />,
    isLast: true
  },

  {
    label: "Your channel",
    icon: <AccountBox />
  },
  {
    label: "History",
    icon: <History />
  },
  {
    label: "Your videos",
    icon: <VideoCameraBack />
  },
  {
    label: "Watch later",
    icon: <WatchLater />,
    isLast: true
  },
  ...subscriptionsMenu,
  {
    label: "Setting",
    icon: <Settings />
  },
  {
    label: "Report history",
    icon: <Flag />
  },
  {
    label: "Help",
    icon: <Help />
  },
  {
    label: "Send feedback",
    icon: <Feedback />
  }
];
