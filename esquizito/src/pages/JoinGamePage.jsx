import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';
import { useNavigate } from 'react-router-dom';
import LogoCard from 'components/LogoCard';
import React from 'react';

/*
  TODO: Validate input
  Quiz ID won't be readable, so we need to create an unique ID
   that can be written and read and save it to mongoDB as unique, indexed field
  Was thinking of generating a [0-9A-Z] string with 8 characters (nanoid)
  (8^36 combinations) (2.821.109.907.456 combinations) <- this was copilot's calculation
 */
function JoinGamePage() {
  const navigate = useNavigate();
  const [gameCode, setGameCode] = React.useState('');
  return (
    <LogoCard>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>{translations.joinGame.label.gameCode}</FormLabel>
          <Input
            placeholder={translations.joinGame.placeholder.gameCode}
            value={gameCode}
            variant='soft'
            onChange={(event) => {
              setGameCode(event.target.value);
            }}
          />
        </FormControl>
        <Stack spacing={1}>
          <Button onClick={() => gameCode && navigate(urlPaths.gamePage)}>
            {
              // TODO: change gameCode verification to give message wrong code
              translations.joinGame.button.play
            }
          </Button>
          <Button variant='soft' onClick={() => navigate(urlPaths.mainMenu)}>
            {translations.joinGame.button.back}
          </Button>
        </Stack>
      </Stack>
    </LogoCard>
  );
}

export default JoinGamePage;
