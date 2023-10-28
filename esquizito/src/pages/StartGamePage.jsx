import {
  ArrowBackRounded,
  PlayArrowRounded,
  TagRounded,
} from '@mui/icons-material';
import { Button, Card, Chip, Stack, Typography } from '@mui/joy';
import HeaderScreen from 'components/HeaderScreen';
import { useNavContext } from 'contexts/NavContext';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function StartGamePage() {
  const navigate = useNavigate();
  const { gameData, setGameData } = useNavContext();
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState('');
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(0);
  const [gameMode, setGameMode] = React.useState(0);
  const [gameCode, setGameCode] = React.useState('');

  const handleBackButton = () => {
    setGameData(null);
    navigate(urlPaths.joinGamePage);
  };

  useEffect(() => {
    if (gameData) {
      setName(gameData.name);
      setNumberOfQuestions(gameData.questions.length);
      setGameMode(gameData.gameMode);
      setGameCode(gameData.code);
      setLoading(false);
    }
  }, [gameData]);

  return (
    <HeaderScreen headerCenter={translations.startGame.header}>
      {!loading && (
        <Stack alignItems='center' mt={4}>
          <Card>
            <Stack alignItems='stretch' mx={1} spacing={4} textAlign='center'>
              <Stack direction='row' justifyContent='space-evenly' spacing={1}>
                <Chip
                  color='neutral'
                  size='lg'
                  startDecorator={translations.gameModes[gameMode].icon}
                  variant='soft'>
                  {translations.gameModes[gameMode].text}
                </Chip>
                <Chip
                  color='neutral'
                  size='lg'
                  startDecorator={<TagRounded />}
                  variant='soft'>
                  {`${numberOfQuestions} ${translations.startGame.questions}`}
                </Chip>
              </Stack>
              <Typography level='h1'>{name}</Typography>
              <Typography level='h3'>
                {`${translations.startGame.code} ${gameCode}`}
              </Typography>
              <Stack direction='row' justifyContent='center' spacing={2}>
                <Button
                  startDecorator={<ArrowBackRounded />}
                  variant='soft'
                  onClick={handleBackButton}>
                  {translations.startGame.button.back}
                </Button>
                <Button
                  startDecorator={<PlayArrowRounded />}
                  onClick={() => navigate(urlPaths.gamePage)}>
                  {translations.startGame.button.play}
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      )}
    </HeaderScreen>
  );
}

export default StartGamePage;
