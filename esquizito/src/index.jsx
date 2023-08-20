import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssVarsProvider } from '@mui/joy';
import App from './App';
import theme from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
);
