import { Button, Stack } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from 'components/LogoutButton/LogoutButton';

function MainMenu() {
  const navigate = useNavigate();
  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <Button onClick={() => navigate('/jogar')}>Entrar em um jogo</Button>
        <Button>Meus resultados</Button>
      </Stack>
      <Stack spacing={2}>
        <Button variant='soft'>Gerenciar banco de perguntas</Button>
        <Button variant='soft'>Gerenciar questionários</Button>
      </Stack>
      <Stack spacing={2}>
        <LogoutButton />
      </Stack>
    </Stack>
  );
}

export default MainMenu;
