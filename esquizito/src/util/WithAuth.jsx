import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  function AuthRoute() {
    const isAuth = !!localStorage.getItem('token');
    // TODO: token verification logic, currently just checking for cookie named 'token'
    if (isAuth) {
      return <Component />;
    }
    return <Navigate replace to='/' />;
  }

  return AuthRoute;
};

export default withAuth;
