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
import PropTypes from 'prop-types';
import React from 'react';
import logo from 'assets/logo.png';
import { useNavigate } from 'react-router-dom';
import LogoCard from '../../components/LogoCard/LogoCard';

function LandingPage({ authType = 'login' }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
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
      <Button>Entrar</Button>
      <Button onClick={() => navigate('/signup')} variant='soft'>
        Cadastrar
      </Button>
    </>,
  );
  buttonMap.set(
    'signup',
    <>
      <Button>Confirmar</Button>
      <Button onClick={() => navigate('/')} variant='soft'>
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
