import { extendTheme } from '@mui/joy';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { 500: '#00394e' },
      },
    },
  },
  components: {
    JoyAlert: {
      styleOverrides: {
        root: {
          '--Alert-radius': '16px',
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          '--Button-radius': '50px',
          '&:hover': { transition: 'background-color .1s linear' },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          '--Card-radius': '24px',
        },
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          paddingInlineStart: '8px',
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          '--Input-radius': '50px',
        },
      },
    },
    JoyModalDialog: {
      styleOverrides: {
        root: {
          '--Card-radius': '36px',
        },
      },
    },
    JoyTextarea: {
      styleOverrides: {
        root: {
          '--Input-radius': '24px',
        },
      },
    },
  },
  fontFamily: {
    display: '"Montserrat Variable", var(--joy-fontFamily-fallback)',
    body: '"Montserrat Variable", var(--joy-fontFamily-fallback)',
  },
  radius: {
    sm: '24px',
  },
});
