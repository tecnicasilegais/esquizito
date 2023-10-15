import { Button } from '@mui/joy';
import { translations } from 'util/Properties';
import { useUser } from 'contexts/UserContext';
import React from 'react';

function LogoutButton() {
  const { logout } = useUser();

  return (
    <Button color='danger' variant='outlined' onClick={logout}>
      {translations.menu.button.logout}
    </Button>
  );
}

export default LogoutButton;
