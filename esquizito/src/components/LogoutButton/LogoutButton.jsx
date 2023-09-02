import { Button } from '@mui/joy';
import { useUser } from 'contexts/UserContext';
import React from 'react';
import { properties } from '../../util/Properties';

function LogoutButton() {
  const { logout } = useUser();

  return (
    <Button color='danger' variant='outlined' onClick={logout}>
      {properties.screen.menu.button.logout}
    </Button>
  );
}

export default LogoutButton;
