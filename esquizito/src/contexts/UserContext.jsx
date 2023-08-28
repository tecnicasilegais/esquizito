import { useAuth0 } from '@auth0/auth0-react';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import User from 'apis/services/User';
import { extractAuth0Id } from 'util/util';

const UserContext = createContext(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser was called outside of its Provider');
  }

  return context;
};

export function UserProvider({ children }) {
  const {
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    user: userAuth0,
  } = useAuth0();

  const [user, setUser] = useState({});

  const handleLogout = useCallback(() => {
    setUser(null);
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }, [logout]);

  const handleLogin = useCallback(async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
    });
  }, [loginWithRedirect]);

  const getUserApiId = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const { data, status } = await User.getUserByAuth0(
      extractAuth0Id(userAuth0.sub),
      token,
    );

    if (status === 200) {
      setUser((prevUser) => ({
        ...prevUser,
        // eslint-disable-next-line no-underscore-dangle
        id: data._id,
      }));
    }
    if (status === 404) {
      // eslint-disable-next-line no-shadow
      const { data, status } = await User.register(
        {
          auth0Id: extractAuth0Id(userAuth0.sub),
          email: userAuth0.email,
          name: userAuth0.name,
        },
        token,
      );
      if (status === 201) {
        setUser((prevUser) => ({
          ...prevUser,
          // eslint-disable-next-line no-underscore-dangle
          id: data._id,
        }));
      } else {
        // TODO: Probably the services are down or something very wrong happened
        // Do we logout or display a "try again later" component?
        console.log('Error registering user: ', data);
      }
    }
  }, [getAccessTokenSilently, userAuth0]);

  useEffect(() => {
    if (isAuthenticated) {
      setUser((prevUser) => ({
        ...prevUser,
        auth0UserId: extractAuth0Id(userAuth0.sub),
        name: userAuth0.name,
        email: userAuth0.email,
      }));
      if (!user.id) {
        getUserApiId();
      }
    } else {
      setUser({});
    }
  }, [isAuthenticated, userAuth0]);

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login: handleLogin,
      logout: handleLogout,
    }),
    [user, isAuthenticated, isLoading, handleLogin, handleLogout],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
