import AuthenticationGuard from 'components/AuthenticationGuard/AuthenticationGuard';
import { useUser } from 'contexts/UserContext';
import GamePage from 'pages/GamePage/GamePage';

import JoinGamePage from 'pages/JoinGamePage/JoinGamePage';
import LandingPage from 'pages/LandingPage/LandingPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import MainMenu from 'pages/MainMenu/MainMenu';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { urlPaths } from 'util/UrlPaths';
import styles from './App.module.scss';

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
  const { isLoading } = useUser();

  return (
    <div className={styles.app}>
      {isLoading && <LoadingPage />}
      {!isLoading && <AppRoutes />}
    </div>
  );
}
