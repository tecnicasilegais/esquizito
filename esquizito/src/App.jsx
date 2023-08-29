import React from 'react';
import { Route, Routes } from 'react-router-dom';

import JoinGamePage from 'pages/JoinGamePage/JoinGamePage';
import LandingPage from 'pages/LandingPage/LandingPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import MainMenu from 'pages/MainMenu/MainMenu';

import AuthenticationGuard from 'components/AuthenticationGuard/AuthenticationGuard';

import styles from './App.module.scss';
import { useUser } from './contexts/UserContext';

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
