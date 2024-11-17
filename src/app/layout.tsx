"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SnackbarAlertProvider, theme } from "@app/components";
import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000, gcTime: 5000 } }
  });

  return (
    <html lang="en">
      <head>
        <title>Youtube-Next</title>
      </head>
      <body>
        <SnackbarAlertProvider>
          <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </SnackbarAlertProvider>
      </body>
    </html>
  );
}
