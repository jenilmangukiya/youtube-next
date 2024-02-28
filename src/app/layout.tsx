"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";
import { AuthProvider } from "@app/Auth";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({ palette: { mode: "dark" } });
  const client = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000, gcTime: 5000 } }
  });
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
