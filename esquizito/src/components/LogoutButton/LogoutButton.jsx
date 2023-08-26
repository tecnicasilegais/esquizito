import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/joy';
import React from 'react';

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
      Sair
    </Button>
  );
}

export default LogoutButton;
