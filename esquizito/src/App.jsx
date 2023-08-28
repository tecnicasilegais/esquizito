import { useAuth0 } from '@auth0/auth0-react';

import AuthenticationGuard from 'components/AuthenticationGuard/AuthenticationGuard';

import JoinGamePage from 'pages/JoinGamePage/JoinGamePage';
import LandingPage from 'pages/LandingPage/LandingPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import MainMenu from 'pages/MainMenu/MainMenu';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import GamePage from './pages/GamePage/GamePage';
import { urlPaths } from './util/UrlPaths';

function AppRoutes() {
  return (
    <Routes>
      <Route path={urlPaths.mainMenu} element={<MainMenu />} />
      <Route
        path={urlPaths.landingPage}
        element={<LandingPage authType='signup' />}
      />
      <Route
        path={urlPaths.joinGamePage}
        element={<AuthenticationGuard component={JoinGamePage} />}
      />
      <Route path={urlPaths.loadingPage} element={<LoadingPage />} />
      <Route path={urlPaths.gamePage} element={<GamePage />} />
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
