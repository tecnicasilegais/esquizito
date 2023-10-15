import { Button, Stack } from '@mui/joy';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';
import { useNavigate } from 'react-router-dom';
import LogoutButton from 'components/LogoutButton';
import React from 'react';

function MainMenu() {
  const navigate = useNavigate();
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Button onClick={() => navigate(urlPaths.joinGamePage)}>
          {translations.menu.button.enterGame}
        </Button>
        <Button>{translations.menu.button.seeResults}</Button>
      </Stack>
      <Stack spacing={2}>
        <Button
          variant='soft'
          onClick={() => navigate(urlPaths.manageQuestionsPage)}>
          {translations.menu.button.manageQuestions}
        </Button>
        <Button
          variant='soft'
          onClick={() => navigate(urlPaths.manageQuizzesPage)}>
          {translations.menu.button.manageQuizzes}
        </Button>
      </Stack>
      <Stack spacing={2}>
        <LogoutButton />
      </Stack>
    </Stack>
  );
}

export default MainMenu;
