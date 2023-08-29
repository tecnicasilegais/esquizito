import { Button, Stack } from '@mui/joy';
import React from 'react';

import { useUser } from 'contexts/UserContext';

function LoginStack() {
  const { login } = useUser();

  return (
    <Stack spacing={2}>
      <Button onClick={login}>Entrar / Cadastrar</Button>
    </Stack>
  );
}

export default LoginStack;
