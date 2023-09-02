import { Button, Stack } from '@mui/joy';
import { useUser } from 'contexts/UserContext';
import React from 'react';
import { properties } from '../../util/Properties';

function LoginStack() {
  const { login } = useUser();

  return (
    <Stack spacing={2}>
      <Button onClick={login}>{properties.screen.landing.button.login}</Button>
    </Stack>
  );
}

export default LoginStack;
