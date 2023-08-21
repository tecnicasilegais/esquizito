import LandingPage from 'pages/LandingPage/LandingPage';
import React from 'react';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import styles from './App.module.scss';

function Layout() {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
}

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage authType='login' />,
      },
      {
        path: '/signup',
        element: <LandingPage authType='signup' />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
