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
        {isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        <DrawerContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
          <Box sx={{ width: isSidebarOpen ? "calc(100% - 240px)" : "100%" }}>
            {children}
          </Box>
        </DrawerContext.Provider>
      </Stack>
    </>
  );
}
