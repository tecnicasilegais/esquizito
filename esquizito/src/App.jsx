import AuthenticationGuard from 'components/AuthenticationGuard';
import { NavContextProvider } from 'contexts/NavContext';
import { useUser } from 'contexts/UserContext';
import GamePage from 'pages/GamePage';
import JoinGamePage from 'pages/JoinGamePage';
import LandingPage from 'pages/LandingPage';
import LoadingPage from 'pages/LoadingPage';
import MainMenu from 'pages/MainMenu';
import ManageQuestionsPage from 'pages/ManageQuestionsPage';
import ManageQuizzesPage from 'pages/ManageQuizzesPage';
import NotFoundPage from 'pages/NotFoundPage';
import QuizResultsPage from 'pages/QuizResultsPage';
import StartGamePage from 'pages/StartGamePage';
import UserResultsPage from 'pages/UserResultsPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { urlPaths } from 'util/UrlPaths';
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
        element={<AuthenticationGuard component={UserResultsPage} />}
        path={urlPaths.userResultsPage}
      />
      <Route
        element={<AuthenticationGuard component={StartGamePage} />}
        path={urlPaths.startGamePage}
      />
      <Route
        element={<AuthenticationGuard component={QuizResultsPage} />}
        path={urlPaths.quizResultsPage}
      />
      <Route
        element={<AuthenticationGuard component={ManageQuestionsPage} />}
        path={urlPaths.manageQuestionsPage}
      />
      <Route
        element={<AuthenticationGuard component={ManageQuizzesPage} />}
        path={urlPaths.manageQuizzesPage}
      />
      <Route element={<NotFoundPage />} path={urlPaths.notFoundPage} />
      <Route element={<Navigate to={urlPaths.notFoundPage} />} path='*' />
    </Routes>
  );
}

export default function App() {
  const { isLoading } = useUser();

  return (
    <NavContextProvider>
      <div className={styles.app}>
        {isLoading && <LoadingPage />}
        {!isLoading && <AppRoutes />}
      </div>
    </NavContextProvider>
  );
}
