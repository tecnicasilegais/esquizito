import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import LogoCard from 'components/LogoCard/LogoCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

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
          <FormLabel>{properties.screen.joinGame.label.gameCode}</FormLabel>
          <Input
            value={gameCode}
            onChange={(event) => {
              setGameCode(event.target.value);
            }}
            variant='soft'
            placeholder={properties.screen.joinGame.placeholder.gameCode}
          />
        </FormControl>
        <Stack spacing={1}>
          <Button onClick={() => gameCode && navigate(urlPaths.gamePage)}>
            {
              // TODO: change gameCode verification to give message wrong code
              properties.screen.joinGame.button.play
            }
          </Button>
          <Button onClick={() => navigate(urlPaths.mainMenu)} variant='soft'>
            {properties.screen.joinGame.button.back}
          </Button>
        </Stack>
      </Stack>
    </LogoCard>
  );
}

export default JoinGamePage;
