import React from "react";

import {
  Feedback,
  Google,
  Help,
  Language,
  Logout,
  DarkMode,
  NotificationsOutlined,
  Settings,
  VideoCall
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  useTheme
} from "@mui/material";

import { MenuUserDetails } from "./components";
import { useRightSideHeaderMenus } from "./useRightSideHeaderMenus";
import { useStyle } from "./useStyle";

const RightSideHeaderMenus = () => {
  const theme = useTheme();
  const { popupRoot, avatarStyle } = useStyle(theme);
  const { handleClick, handleClose, open, anchorEl } =
    useRightSideHeaderMenus();
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <VideoCall />
        <NotificationsOutlined />
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={avatarStyle}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{
          paper: {
            sx: popupRoot
          }
        }}
      >
        <MenuItem onClick={handleClose}>
          <MenuUserDetails />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Google fontSize="small" />
          </ListItemIcon>
          Google Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Language fontSize="small" />
          </ListItemIcon>
          Language: English
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DarkMode fontSize="small" />
          </ListItemIcon>
          Mode: Dark
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Help fontSize="small" />
          </ListItemIcon>
          Help
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Feedback fontSize="small" />
          </ListItemIcon>
          Send feedback
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default RightSideHeaderMenus;
