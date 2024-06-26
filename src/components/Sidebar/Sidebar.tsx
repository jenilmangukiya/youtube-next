import { Menu } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useScreenSize } from "@app/hooks";

import { SidebarProps } from "./types";
import { useStyle } from "./useStyle";
import { sidebarMenu } from "./utils";

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const theme = useTheme();
  const router = useRouter();
  const { drawer } = useStyle(theme);
  const { isLg: isLargeScreen } = useScreenSize();

  return (
    <Drawer
      anchor={"left"}
      open={isSidebarOpen}
      onClose={() => setIsSidebarOpen(false)}
      sx={drawer}
      variant={!isLargeScreen ? "temporary" : "persistent"}
    >
      <Box width={240}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          pl={3}
          width={"240px"}
          gap={2}
          position={"fixed"}
          bgcolor={theme.palette.background.default}
          zIndex={1}
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
            onClick={() => {
              router.push("/");
            }}
          />
        </Stack>
        <List sx={{ top: 60, bgcolor: theme.palette.background.default }}>
          {sidebarMenu.map((item: any) => (
            <>
              <ListItem
                key={item.label}
                disablePadding
                onClick={() => {
                  if (item?.href) {
                    router.push(item?.href);
                  }
                }}
              >
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                  />
                </ListItemButton>
              </ListItem>

              {item.isLast ? (
                <Divider variant="middle" sx={{ opacity: 0.6, my: 2 }} />
              ) : null}
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
