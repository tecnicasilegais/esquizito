import { Button, Stack } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCard from '../../components/LogoCard/LogoCard';

function MainMenu() {
  const navigate = useNavigate();
  return (
    <LogoCard>
      <Stack spacing={8}>
        <Stack spacing={2}>
          <Button>Entrar em um jogo</Button>
          <Button>Meus resultados</Button>
        </Stack>
        <Stack spacing={2}>
          <Button variant='soft'>Gerenciar banco de perguntas</Button>
          <Button variant='soft'>Gerenciar questionários</Button>
        </Stack>
      </Stack>
    </LogoCard>
  );
}

export default MainMenu;
