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
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          '&:hover': { transition: 'background-color .1s linear' },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
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
          borderRadius: '50px',
        },
      },
    },
  },
  fontFamily: {
    display: '"Montserrat Variable", var(--joy-fontFamily-fallback)',
    body: '"Montserrat Variable", var(--joy-fontFamily-fallback)',
  },
});
