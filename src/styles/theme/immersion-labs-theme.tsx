import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#366dec',
      light: '#5e86ff',
      dark: '#0053cc',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#0e1025',
      light: '#36384f',
      dark: '#333333',
      contrastText: '#ffffff'
    },
    background: {
      default: '#0e1025',
    },
    text: {
      primary: '#ffffff'
    }
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: 'var(--body-font-family)',
  },
});

export default theme;