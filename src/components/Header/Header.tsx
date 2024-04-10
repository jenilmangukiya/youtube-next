import { Menu, Mic, Search } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { RightSideHeaderMenus } from "./components";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      height={56}
      position={"sticky"}
      top={0}
      bgcolor={theme.palette.background.default}
      zIndex={1}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        px={3}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
          flex={1}
        >
          <IconButton onClick={() => setIsSidebarOpen((open) => !open)}>
            <Menu style={{ cursor: "pointer" }} />
          </IconButton>
          <Image
            src="/Youtube-Logo.svg"
            alt="Youtube logo"
            width={90}
            height={90}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          flex={2}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{ width: "70%" }}
            InputProps={{
              endAdornment: <Search />,
              sx: { borderRadius: "50px" }
            }}
            color="secondary"
          />
          <IconButton sx={{ backgroundColor: theme.palette.background.paper }}>
            <Mic />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          flex={1}
        >
          <RightSideHeaderMenus />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
