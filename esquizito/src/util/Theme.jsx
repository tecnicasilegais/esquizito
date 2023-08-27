import { extendTheme } from '@mui/joy';

const theme = extendTheme({
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
        root: { borderRadius: '50px' },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '38px',
        },
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
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

export default theme;
