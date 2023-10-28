import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import FormErrorMsg from 'components/FormErrorMsg';
import LogoCard from 'components/LogoCard';
import { useNavContext } from 'contexts/NavContext';
import { useService } from 'contexts/ServiceContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

/*
  Quiz ID won't be readable, so we need to create an unique ID
   that can be written and read and save it to mongoDB as unique, indexed field
  Was thinking of generating a [0-9A-Z] string with 8 characters (nanoid)
  (8^36 combinations) (2.821.109.907.456 combinations) <- this was copilot's calculation
 */
function JoinGamePage() {
  const navigate = useNavigate();
  const { gameData, setGameData } = useNavContext();
  const [gameCode, setGameCode] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [showError, setShowError] = React.useState(false);
  const { quizService } = useService();

  const handleJoinGame = async () => {
    if (!gameCode) {
      setErrorMessage(translations.joinGame.gameCode.error.invalidCode);
      setShowError(true);
      return;
    }
    try {
      const quiz = await quizService.getByCode(gameCode);
      if (quiz.data.questions.length % 2 !== 0) {
        setErrorMessage(translations.joinGame.gameCode.error.oddQuestions);
        setShowError(true);
        return;
      }
      setErrorMessage(null);
      setShowError(false);
      setGameData(quiz.data);
    } catch (error) {
      setErrorMessage(translations.joinGame.gameCode.error.notFound);
      setShowError(true);
    }
  };

  useEffect(() => {
    if (gameData) {
      navigate(urlPaths.startGamePage);
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
          {showError && <FormErrorMsg errorMessage={errorMessage} />}
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
