import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from '@mui/joy';
import { InfoOutlined } from '@mui/icons-material';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';
import { useNavigate } from 'react-router-dom';
import GameContext from 'contexts/GameContext';
import LogoCard from 'components/LogoCard';
import QuizService from 'apis/services/QuizService';
import React, { useEffect } from 'react';

/*
  TODO: Validate input
  Quiz ID won't be readable, so we need to create an unique ID
   that can be written and read and save it to mongoDB as unique, indexed field
  Was thinking of generating a [0-9A-Z] string with 8 characters (nanoid)
  (8^36 combinations) (2.821.109.907.456 combinations) <- this was copilot's calculation
 */
function JoinGamePage() {
  const navigate = useNavigate();
  const { gameData, setGameData } = React.useContext(GameContext);
  const [gameCode, setGameCode] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [showError, setShowError] = React.useState(false);

  const handleJoinGame = async () => {
    if (!gameCode) {
      setShowError(true);
      setErrorMessage(translations.joinGame.gameCode.error.invalidCode);
      return;
    }
    try {
      const quiz = await QuizService.getByCode(gameCode);
      setShowError(false);
      setErrorMessage(null);
      setGameData(quiz.data);
    } catch (error) {
      setShowError(true);
      setErrorMessage(translations.joinGame.gameCode.error.notFound);
    }
  };

  useEffect(() => {
    if (gameData) {
      navigate(urlPaths.gamePage);
    }
  }, [gameData, navigate]);

  return (
    <LogoCard>
      <Stack spacing={4}>
        <FormControl error={showError}>
          <FormLabel>{translations.joinGame.gameCode.label}</FormLabel>
          <Input
            placeholder={translations.joinGame.gameCode.placeholder}
            value={gameCode}
            variant='soft'
            onChange={(event) => {
              setGameCode(event.target.value);
            }}
          />
          {showError && (
            <FormHelperText>
              <Stack direction='row' spacing={1}>
                <InfoOutlined />
                <Box>{errorMessage}</Box>
              </Stack>
            </FormHelperText>
          )}
        </FormControl>
        <Stack spacing={1}>
          <Button onClick={handleJoinGame}>
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
