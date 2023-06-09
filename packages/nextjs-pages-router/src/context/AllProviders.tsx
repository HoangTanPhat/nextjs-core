import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createEmotionCache } from "@/lib/emotion";
import dynamic from "next/dynamic";

const clientSideEmotionCache = createEmotionCache();

interface AllProvidersProps {
  children: React.ReactNode;
}
export default function AllProviders({ children }: AllProvidersProps) {
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

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={clientSideEmotionCache}>
        <CssBaseline />
        {children}
      </CacheProvider>
    </ThemeProvider>
  );
}
