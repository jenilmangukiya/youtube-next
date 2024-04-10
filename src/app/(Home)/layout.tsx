"use client";
import { useState } from "react";

import { Box, Stack } from "@mui/material";

import { DrawerContext, Header, Sidebar } from "@app/components";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Stack direction={"row"}>
        <Box width={isSidebarOpen ? 240 : 0}>
          {isSidebarOpen && (
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          )}
        </Box>
        <Box flex={1}>
          <DrawerContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
          </DrawerContext.Provider>
        </Box>
      </Stack>
    </>
  );
}
