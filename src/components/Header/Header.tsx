"use client";
import { useState } from "react";

import { Menu, Mic, Search } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { useScreenSize } from "@app/Hooks";

import { RightSideHeaderMenus } from "./components";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  const theme = useTheme();
  const router = useRouter();
  const { isXs } = useScreenSize();
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [searchText, setSearchText] = useState(search);

  return (
    <Box
      height={56}
      position={"sticky"}
      top={0}
      bgcolor={theme.palette.background.default}
      zIndex={10}
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
          {!isXs && (
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
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          flex={{ xs: 5, sm: 2 }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{ width: { xs: "100%", lg: "70%" } }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(`/results?q=${searchText}`);
              }
            }}
            InputProps={{
              endAdornment: (
                <Search
                  sx={{ cursor: "pointer" }}
                  onClick={() => router.push(`/results?q=${searchText}`)}
                />
              ),
              sx: { borderRadius: "50px" }
            }}
          />
          <IconButton
            sx={{
              backgroundColor: theme.palette.background.paper,
              cursor: "pointer"
            }}
          >
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
