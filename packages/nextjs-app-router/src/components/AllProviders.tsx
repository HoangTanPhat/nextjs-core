"use client";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { PropTypes, ThemeProvider, createTheme, useTheme } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/lib/emotion/createEmotionCache";
import { useSSR } from "@nextui-org/react";
import SplashScreen from "./SplashScreen";

const clientSideEmotionCache = createEmotionCache();

interface AllProvidersProps {
  children: React.ReactNode;
}
export default function AllProviders({ children }: AllProvidersProps) {
  const { isBrowser } = useSSR();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFBA00",
        contrastText: "#fff",
      },
      secondary: {
        main: "#02807D",
      },
    },
  });

  if (!isBrowser) {
    return <SplashScreen />;
  }
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
