import {
  Button,
  Card,
  CardOverflow,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import React from 'react';
import logo from 'assets/logo.png';
import styles from './LoginCard.module.scss';

function LoginCard() {
  return (
    <Card className={styles.loginCard}>
      <CardOverflow>
        <img src={logo} alt='EsQUIZito logo' loading='lazy' />
      </CardOverflow>
      <Typography level='h1' textAlign='center' textColor='#00394e'>
        Entrar
      </Typography>
      <Stack spacing={10}>
        <Stack spacing={1}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='esquizito@email.com' />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input type='password' placeholder='Sua senha aqui' />
          </FormControl>
        </Stack>
        <Stack spacing={2}>
          <Button>Entrar</Button>
          <Button variant='soft'>Cadastrar</Button>
        </Stack>
      </Stack>
    </Card>
  );
}

export default LoginCard;
