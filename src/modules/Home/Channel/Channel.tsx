"use client";
import { useLayoutEffect, useState } from "react";

import { Box, Tab, Tabs } from "@mui/material";
import Image from "next/image";

import { useDrawer } from "@app/components";
import { useScreenSize } from "@app/hooks";

import { ChannelSubscribers, ChannelVideos, Overview } from "./components";
import { ChannelPlaylist } from "./components";
import { ChannelTweets } from "./components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const Channel = () => {
  const [value, setValue] = useState(0);

  const { isLg: isLargeScreen } = useScreenSize();
  const { setIsSidebarOpen } = useDrawer();

  useLayoutEffect(() => {
    isLargeScreen && setIsSidebarOpen(true);
  }, [isLargeScreen, setIsSidebarOpen]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box mx={"6%"}>
        <Image
          src={"/img.jpg"}
          alt="profile pic"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "172px",
            objectFit: "cover",
            borderRadius: "12px"
          }}
        />
        <Overview />
        <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Videos" {...a11yProps(0)} />
            <Tab label="Playlists" {...a11yProps(1)} />
            <Tab label="Tweets" {...a11yProps(2)} />
            <Tab label="Subscribed" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ChannelVideos />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ChannelPlaylist />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ChannelTweets />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ChannelSubscribers />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Channel;
