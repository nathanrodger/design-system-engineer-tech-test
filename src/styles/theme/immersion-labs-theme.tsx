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
      main: '#ededed',
      light: '#ffffff',
      dark: '#eeeeee',
      contrastText: '#333333'
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
  // components: {
  //   MuiSelect: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: '#cccccc',
  //         color: '#fff'
  //       }
  //     }
  //   },
  //   MuiMenuItem: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: '#000000',
  //         color: '#fff'
  //       }
  //     }
  //   }
  // }
});

export default theme;