import { Button, Input, Stack } from '@mui/joy';
import React from 'react';
import LogoCard from 'components/LogoCard/LogoCard';

/*
  TODO: Validate input
  Quiz ID won't be readable, so we need to create an unique ID
   that can be written and read and save it to mongoDB as unique, indexed field
  Was thinking of generating a [0-9A-Z] string with 8 characters (nanoid)
  (8^36 combinations) (2.821.109.907.456 combinations) <- this was copilot's calculation
 */
function JoinGamePage() {
  return (
    <LogoCard>
      <Stack spacing={2}>
        <Input variant='soft' placeholder='Insira o código do quizz...' />
        <Button>Jogar</Button>
      </Stack>
    </LogoCard>
  );
}

export default JoinGamePage;
