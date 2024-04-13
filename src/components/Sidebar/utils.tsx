import {
  AccountBoxOutlined,
  FeedbackOutlined,
  FlagOutlined,
  HelpOutline,
  HistoryOutlined,
  HomeOutlined,
  PersonOutline,
  SettingsOutlined,
  SubscriptionsOutlined,
  VideoCameraBackOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";

const subscriptionsMenu = [
  {
    label: "Jenil Mangukiya",
    icon: <PersonOutline />,
    href: "/c/channel"
  },
  {
    label: "Raj jasoliya",
    icon: <PersonOutline />,
    href: "/c/channel"
  },
  {
    label: "Bhautik maniya",
    icon: <PersonOutline />,
    href: "/c/channel"
  },
  {
    label: "Yash kakadiya",
    icon: <PersonOutline />,
    href: "/c/channel",
    isLast: true
  }
];
export const sidebarMenu = [
  {
    label: "Home",
    icon: <HomeOutlined />,
    href: "/"
  },
  {
    label: "Subscription",
    icon: <SubscriptionsOutlined />,
    isLast: true
  },

  {
    label: "Your channel",
    icon: <AccountBoxOutlined />,
    href: "/c/channel"
  },
  {
    label: "History",
    icon: <HistoryOutlined />,
    href: "/results"
  },
  {
    label: "Your videos",
    icon: <VideoCameraBackOutlined />
  },
  {
    label: "Watch later",
    icon: <WatchLaterOutlined />,
    isLast: true
  },
  ...subscriptionsMenu,
  {
    label: "Setting",
    icon: <SettingsOutlined />
  },
  {
    label: "Report history",
    icon: <FlagOutlined />
  },
  {
    label: "Help",
    icon: <HelpOutline />
  },
  {
    label: "Send feedback",
    icon: <FeedbackOutlined />
  }
];
