"use client";
import { useState } from "react";

import { Box, Stack } from "@mui/material";

import { Header, Sidebar } from "@app/components";
import { DrawerContext } from "@app/context";
import { useScreenSize } from "@app/hooks";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isLg: isLargeScreen } = useScreenSize();

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    isLargeScreen ? true : false
  );

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Stack direction={"row"}>
        {isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        <DrawerContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
          <Box
            sx={{
              width:
                isSidebarOpen && isLargeScreen ? "calc(100% - 240px)" : "100%"
            }}
          >
            {children}
          </Box>
        </DrawerContext.Provider>
      </Stack>
    </>
  );
}
