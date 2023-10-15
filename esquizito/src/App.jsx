import { useUser } from 'contexts/UserContext';
import AuthenticationGuard from 'components/AuthenticationGuard';
import GamePage from 'pages/GamePage';

import { Route, Routes } from 'react-router-dom';
import { urlPaths } from 'util/UrlPaths';
import JoinGamePage from 'pages/JoinGamePage';
import LandingPage from 'pages/LandingPage';
import LoadingPage from 'pages/LoadingPage';
import MainMenu from 'pages/MainMenu';
import ManageQuestionsPage from 'pages/ManageQuestionsPage';
import ManageQuizzesPage from 'pages/ManageQuizzesPage';
import RankingPage from 'pages/RankingPage';
import React, { useMemo } from 'react';
import GameContext from 'contexts/GameContext';
import styles from './App.module.scss';

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
  const [gameData, setGameData] = React.useState(null);
  const { isLoading } = useUser();

  const gameContext = useMemo(
    () => ({ gameData, setGameData }),
    [gameData, setGameData],
  );

  return (
    <GameContext.Provider value={gameContext}>
      <div className={styles.app}>
        {isLoading && <LoadingPage />}
        {!isLoading && <AppRoutes />}
      </div>
    </GameContext.Provider>
  );
}
