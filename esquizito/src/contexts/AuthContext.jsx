import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const onRedirectCallback = useCallback(
    (appState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    },
    [navigate],
  );

  return (
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      authorizationParams={{
        audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
