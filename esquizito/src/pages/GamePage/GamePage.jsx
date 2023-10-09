import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Radio,
  radioClasses,
  Stack,
} from '@mui/joy';
import HeaderScreen from 'components/HeaderScreen/HeaderScreen';
import GameQuestion from 'components/GameQuestion/GameQuestion';
import React from 'react';
import { translations, examples } from 'util/Properties';

function GamePage() {
  const [selectedAnswer, setSelectedAnswer] = React.useState('');
  const [answerState, setAnswerState] = React.useState('');
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const checkAnswer = () => {
    setAnswerState(selectedAnswer === '1' ? 'correct' : 'incorrect');
  };
  const radioCardStyle = (theme) => {
    const mainStyle = {
      '&:hover': {
        bgcolor: 'primary.100',
        transition: 'background-color .1s linear',
      },
      boxSizing: 'border-box',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      p: 3,
    };
    const specialStyle = {};
    if (answerState === 'correct') {
      specialStyle.bgcolor = `rgba(${theme.vars.palette.success.mainChannel} / 0.8)`;
    } else if (answerState === 'incorrect') {
      specialStyle.bgcolor = `rgba(${theme.vars.palette.danger.mainChannel} / 0.8)`;
    }
    return { ...mainStyle, ...specialStyle };
  };
  return (
    <HeaderScreen>
      <Stack mb={2} mt={1} mx={2} spacing={4} sx={{ userSelect: 'none' }}>
        <Card>
          <GameQuestion number='I' text={examples.screen.game.question} />
          <Box>
            <Divider />
          </Box>
          <GameQuestion number='II' text={examples.screen.game.question} />
        </Card>
        <Box>
          <Grid
            container
            spacing={1}
            sx={{
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.action}`]: {
                  border: '3px solid',
                  borderColor: 'primary.500',
                  inset: -1,
                  transition: 'border .1s linear',
                },
              },
            }}>
            {examples.screen.game.answer.map((text, i) => (
              <Grid key={text} sm={6} xs={12}>
                <Card name={`radioCard-${i}`} sx={radioCardStyle}>
                  <Radio
                    overlay
                    checked={selectedAnswer === i.toString()}
                    label={text}
                    name='answerRadio'
                    sx={{ alignItems: 'center' }}
                    value={i}
                    onChange={handleAnswerChange}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button
            disabled={!selectedAnswer}
            sx={{ fontSize: 'md', px: 6, py: 3 }}
            onClick={checkAnswer}>
            {translations.game.button.confirm}
          </Button>
        </Box>
      </Stack>
    </HeaderScreen>
  );
}

export default GamePage;
