import { Button, Stack } from '@mui/joy';
import { translations } from 'util/Properties';
import { useUser } from 'contexts/UserContext';
import React from 'react';

function LoginStack() {
  const { login } = useUser();

  return (
    <Stack spacing={2}>
      <Button onClick={login}>{translations.landing.button.login}</Button>
    </Stack>
  );
}

export default LoginStack;
