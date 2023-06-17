import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

interface AllProvidersProps {
  children: React.ReactNode;
}
export default function AllProviders({ children }: AllProvidersProps) {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "#FFBA00 !important",
            ":hover": {
              backgroundColor: "rgb(178, 130, 0) !important",
            },
          },
        },
      },
    },
    typography: {
      fontFamily: "Gilroy",
    },
    palette: {
      primary: {
        main: "#FFBA00",
        light: "#FFBA00",
        contrastText: "#fff",
      },
      secondary: {
        main: "#02807D",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}
