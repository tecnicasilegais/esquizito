import '@fontsource-variable/montserrat';
import { CssVarsProvider } from '@mui/joy';

import { AuthProvider } from 'contexts/AuthContext';
import { ServiceProvider } from 'contexts/ServiceContext';
import { UserProvider } from 'contexts/UserContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { theme } from 'util/Theme';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <ServiceProvider>
              <Toaster richColors />
              <App />
            </ServiceProvider>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
);
