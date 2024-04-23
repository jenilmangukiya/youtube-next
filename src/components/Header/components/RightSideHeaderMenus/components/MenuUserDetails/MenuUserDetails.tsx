import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import Link from "next/link";

import { useStyle } from "./useStyle";

const MenuUserDetails = () => {
  const theme = useTheme();
  const { avatarStyle, linkStyle } = useStyle(theme);
  return (
    <Stack direction={"row"} gap={1} width={268}>
      <Box>
        <IconButton size="small">
          <Avatar sx={avatarStyle}>M</Avatar>
        </IconButton>
      </Box>
      <Box>
        <strong>
          <Typography variant="subtitle1">jenil mangukiya</Typography>
          <Typography variant="subtitle1" mt={-1}>
            @jenilmangukiya
          </Typography>
        </strong>
        <Link href={"/"} style={linkStyle}>
          <Typography variant="subtitle2" fontWeight={700}>
            View your channel
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default MenuUserDetails;
