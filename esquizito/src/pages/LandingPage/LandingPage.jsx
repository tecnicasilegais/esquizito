import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCard from '../../components/LogoCard/LogoCard';
import { urlPaths } from '../../util/UrlPaths';

function LandingPage({ authType = 'login' }) {
  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const headerMap = new Map();
  headerMap.set('login', 'Entrar');
  headerMap.set('signup', 'Cadastrar');

  const inputMap = new Map();
  inputMap.set(
    'login',
    <>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type='email'
          placeholder='esquizito@email.com'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Senha</FormLabel>
        <Input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type='password'
          placeholder='Sua senha'
        />
      </FormControl>
    </>,
  );
  inputMap.set(
    'signup',
    <>
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          type='text'
          placeholder='EsQUIZito Silva'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type='email'
          placeholder='esquizito@email.com'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Senha</FormLabel>
        <Input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type='password'
          placeholder='Crie uma senha legal'
        />
      </FormControl>
    </>,
  );

  const buttonMap = new Map();
  buttonMap.set(
    'login',
    <>
      <Button onClick={() => navigate(urlPaths.joinGamePage)}>Entrar</Button>
      <Button onClick={() => navigate(urlPaths.landingPage)} variant='soft'>
        Cadastrar
      </Button>
    </>,
  );
  buttonMap.set(
    'signup',
    <>
      <Button onClick={() => navigate(urlPaths.landingPage)}>Confirmar</Button>
      <Button onClick={() => navigate(urlPaths.landingPage)} variant='soft'>
        Voltar
      </Button>
    </>,
  );

  return (
    <LogoCard>
      <Typography level='h1' textAlign='center' textColor='#00394e'>
        {headerMap.get(authType)}
      </Typography>
      <Stack spacing={8}>
        <Stack spacing={1}>{inputMap.get(authType)}</Stack>
        <Stack spacing={2}>{buttonMap.get(authType)}</Stack>
      </Stack>
    </LogoCard>
  );
}

LandingPage.propTypes = {
  authType: PropTypes.string.isRequired,
};
export default LandingPage;
