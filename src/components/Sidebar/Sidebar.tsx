import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack, useTheme } from "@mui/material";
import Image from "next/image";

import { SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const theme = useTheme();
  return (
    <Drawer anchor={"left"} open={isSidebarOpen}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          height: "100vh",
          width: "230px"
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          pl={3}
          width={"100%"}
          gap={2}
        >
          <IconButton onClick={() => setIsSidebarOpen((open) => !open)}>
            <Menu style={{ cursor: "pointer" }} />
          </IconButton>
          <Image
            src={"/Youtube-Logo.svg"}
            alt="Youtube logo"
            width={90}
            height={60}
            style={{ cursor: "pointer" }}
          />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
