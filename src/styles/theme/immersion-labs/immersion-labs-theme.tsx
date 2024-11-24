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
      contrastText: '#333333',
    },
    action: {
      disabledBackground: '#333',
      disabled: '#3e4051'
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
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#ededed',
          color: '#333333',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#ededed',
          },
          '&:after': {
            border: 'none',
          }
        },
        select: {
          minWidth: '100px',
          backgroundColor: '#ededed',
          color: '#333333',
          padding: '6px 40px 6px 16px',
          borderRadius: '4px',
          lineHeight: '1.75',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#333333',
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          background: 'transparent',
          marginBottom: 'var(--space-16)',
          padding: 'var(--space-16)',
          border: '1px solid #454555'
        }
      }
    }
  }
});

export default theme;