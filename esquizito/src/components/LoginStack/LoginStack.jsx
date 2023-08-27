import { useAuth0 } from '@auth0/auth0-react';
import { Button, Stack } from '@mui/joy';
import React from 'react';

function LoginStack() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
    });
  };

  return (
    <Stack spacing={2}>
      <Button onClick={handleLogin}>Entrar / Cadastrar</Button>
    </Stack>
  );
}

export default LoginStack;
