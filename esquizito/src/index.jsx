import '@fontsource-variable/montserrat';
import { CssVarsProvider } from '@mui/joy';

import { AuthProvider } from 'contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { UserProvider } from 'contexts/UserContext';
import { theme } from 'util/Theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <Toaster richColors />
            <App />
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
);
