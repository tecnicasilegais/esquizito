import React from 'react';
import LoginCard from 'components/LoginCard/LoginCard';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import styles from './App.module.scss';
import SignUp from './components/SignUp/SignUp';

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
        element: <LoginCard />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
