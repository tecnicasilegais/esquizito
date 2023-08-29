import { Button } from '@mui/joy';
import React from 'react';

import { useUser } from 'contexts/UserContext';

function LogoutButton() {
  const { logout } = useUser();

  return (
    <Button color='danger' variant='outlined' onClick={logout}>
      Sair
    </Button>
  );
}

export default LogoutButton;
