import { extendTheme } from '@mui/joy';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        neutral: {
          softDisabledBg: 'var(--joy-palette-neutral-softBg)',
        },
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
          '&:hover': { transition: 'background-color .1s linear' },
          '--Button-radius': '50px',
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          '--Card-radius': '20px',
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
    JoyList: {
      styleOverrides: {
        root: {
          '--List-radius': '24px',
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
    JoyTable: {
      styleOverrides: {
        root: {
          '--TableCell-headBackground': 'none',
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
    JoyTooltip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
  fontFamily: {
    body: '"Montserrat Variable", var(--joy-fontFamily-fallback)',
    display: '"Montserrat Variable", var(--joy-fontFamily-fallback)',
  },
  radius: {
    sm: '24px',
  },
});
