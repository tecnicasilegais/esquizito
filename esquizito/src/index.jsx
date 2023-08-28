import '@fontsource-variable/montserrat';
import { CssVarsProvider } from '@mui/joy';

import { AuthProvider } from 'contexts/AuthProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'util/Theme';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
);
