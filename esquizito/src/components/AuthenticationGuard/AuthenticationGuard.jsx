import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import PropTypes from 'prop-types';

function AuthenticationGuard({ component }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: LoadingPage,
  });

  return <Component />;
}

AuthenticationGuard.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AuthenticationGuard;
