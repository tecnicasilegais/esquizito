import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import App from './App';

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
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
);
