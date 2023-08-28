import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/joy';
import React from 'react';
import { properties } from '../../util/Properties';

function LogoutButton() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button color='danger' variant='outlined' onClick={handleLogout}>
      {properties.screen.menu.button.logout}
    </Button>
  );
}

export default LogoutButton;
