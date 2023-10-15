import AuthenticationGuard from 'components/AuthenticationGuard/AuthenticationGuard';
import { useUser } from 'contexts/UserContext';
import GamePage from 'pages/GamePage/GamePage';

import JoinGamePage from 'pages/JoinGamePage/JoinGamePage';
import LandingPage from 'pages/LandingPage/LandingPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import MainMenu from 'pages/MainMenu/MainMenu';
import RankingPage from 'pages/RankingPage/RankingPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { urlPaths } from 'util/UrlPaths';
import styles from './App.module.scss';
import ManageQuestionsPage from './pages/ManageQuestionsPage/ManageQuestionsPage';
import ManageQuizzesPage from './pages/ManageQuizzesPage/ManageQuizzesPage';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainMenu />} path={urlPaths.mainMenu} />
      <Route
        element={<LandingPage authType='signup' />}
        path={urlPaths.landingPage}
      />
      <Route
        element={<AuthenticationGuard component={JoinGamePage} />}
        path={urlPaths.joinGamePage}
      />
      <Route element={<LoadingPage />} path={urlPaths.loadingPage} />
      <Route
        element={<AuthenticationGuard component={GamePage} />}
        path={urlPaths.gamePage}
      />
      <Route
        element={<AuthenticationGuard component={RankingPage} />}
        path={urlPaths.rankingPage}
      />
      <Route
        element={<AuthenticationGuard component={ManageQuestionsPage} />}
        path={urlPaths.manageQuestionsPage}
      />
      <Route
        element={<AuthenticationGuard component={ManageQuizzesPage} />}
        path={urlPaths.manageQuizzesPage}
      />
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
