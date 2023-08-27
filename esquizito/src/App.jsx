import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import JoinGamePage from 'pages/JoinGamePage/JoinGamePage';
import LandingPage from 'pages/LandingPage/LandingPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import MainMenu from 'pages/MainMenu/MainMenu';

import AuthenticationGuard from 'components/AuthenticationGuard/AuthenticationGuard';

import styles from './App.module.scss';
import ScreenWithHeader from './components/ScreenWithHeader/ScreenWithHeader';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainMenu />} />
      <Route path='/signup' element={<LandingPage authType='signup' />} />
      <Route
        path='/jogar'
        element={<AuthenticationGuard component={JoinGamePage} />}
      />
      <Route path='/callback' element={<LoadingPage />} />
      <Route path='/header' element={<ScreenWithHeader />} />
      <Route path='/loading' element={<LoadingPage />} />
    </Routes>
  );
}

export default function App() {
  const { isLoading } = useAuth0();

  return (
    <div className={styles.app}>
      {isLoading && <LoadingPage />}
      {!isLoading && <AppRoutes />}
    </div>
  );
}
