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
    label: "John doe",
    icon: <PersonOutline />,
    href: "/c/channel"
  },
  {
    label: "Rock kar",
    icon: <PersonOutline />,
    href: "/c/channel"
  },
  {
    label: "Karl john",
    icon: <PersonOutline />,
    href: "/c/channel"
  },
  {
    label: "Red normal",
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
    icon: <VideoCameraBackOutlined />,
    href: "/c/channel"
  },
  {
    label: "Watch later",
    icon: <WatchLaterOutlined />,
    href: "/pl/list1",
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
