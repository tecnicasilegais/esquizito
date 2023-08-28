import { useAuth0 } from '@auth0/auth0-react';
import { Button, Stack } from '@mui/joy';
import React from 'react';
import { properties } from '../../util/Properties';
import { urlPaths } from '../../util/UrlPaths';

function LoginStack() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: urlPaths.mainMenu,
      },
    });
  };

  return (
    <Stack spacing={2}>
      <Button onClick={handleLogin}>
        {properties.screen.landing.button.login}
      </Button>
    </Stack>
  );
}

export default LoginStack;
