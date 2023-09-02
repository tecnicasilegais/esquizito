import { Button, Stack } from '@mui/joy';
import LogoutButton from 'components/LogoutButton/LogoutButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function MainMenu() {
  const navigate = useNavigate();
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Button onClick={() => navigate(urlPaths.joinGamePage)}>
          {properties.screen.menu.button.enterGame}
        </Button>
        <Button>{properties.screen.menu.button.seeResults}</Button>
      </Stack>
      <Stack spacing={2}>
        <Button variant='soft'>
          {properties.screen.menu.button.manageQuestions}
        </Button>
        <Button variant='soft'>
          {properties.screen.menu.button.manageQuizzes}
        </Button>
      </Stack>
      <Stack spacing={2}>
        <LogoutButton />
      </Stack>
    </Stack>
  );
}

export default MainMenu;
