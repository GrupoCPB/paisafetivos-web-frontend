import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fa80c1",
      main: "#FF40A7",
      dark: "#ff0b8d",
    },
    secondary: {
      light: "#58b5f8",
      main: "#38ACFF",
      dark: "#0F6FFF",
    },
    ligth: {
      light: "#FAFAFA",
      main: "#FAFAFA",
      dark: "#FAFAFA",
    },
    text: {
      primary: "#262626",
      secondary: "#404040",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#F78C2C",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Manrope",
  },
  // shape: {
  //   borderRadius: "3px",
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
