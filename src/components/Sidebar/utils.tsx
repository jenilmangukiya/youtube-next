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
    icon: <PersonOutline />
  },
  {
    label: "Raj jasoliya",
    icon: <PersonOutline />
  },
  {
    label: "Bhautik maniya",
    icon: <PersonOutline />
  },
  {
    label: "Yash kakadiya",
    icon: <PersonOutline />,
    isLast: true
  }
];
export const sidebarMenu = [
  {
    label: "Home",
    icon: <HomeOutlined />
  },
  {
    label: "Subscription",
    icon: <SubscriptionsOutlined />,
    isLast: true
  },

  {
    label: "Your channel",
    icon: <AccountBoxOutlined />
  },
  {
    label: "History",
    icon: <HistoryOutlined />
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
