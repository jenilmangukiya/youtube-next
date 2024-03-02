"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "@app/Auth";
import { SnackbarAlertProvider } from "@app/components";
import "./globals.css";

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
        <SnackbarAlertProvider>
          <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </SnackbarAlertProvider>
      </body>
    </html>
  );
}
