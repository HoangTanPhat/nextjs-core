import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface AllProvidersProps {
  children: React.ReactNode;
}
export default function AllProviders({ children }: AllProvidersProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "Gilroy",
    },
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
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
