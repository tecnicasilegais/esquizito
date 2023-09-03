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
import Question from 'components/Question/Question';
import React from 'react';
import { properties } from 'util/Properties';

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
      p: 3,
      boxSizing: 'border-box',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      '&:hover': {
        bgcolor: 'primary.100',
        transition: 'background-color .1s linear',
      },
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
      <Stack mx={2} spacing={4} mt={1} mb={2}>
        <Card>
          <Question number='I' text={properties.example.screen.game.question} />
          <Box>
            <Divider />
          </Box>
          <Question
            number='II'
            text={properties.example.screen.game.question}
          />
        </Card>
        <Box>
          <Grid
            container
            spacing={1}
            sx={{
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.action}`]: {
                  inset: -1,
                  border: '3px solid',
                  borderColor: 'primary.500',
                  transition: 'border .1s linear',
                },
              },
            }}>
            {properties.example.screen.game.answer.map((text, i) => (
              <Grid xs={12} sm={6} key={text}>
                <Card name={`radioCard-${i}`} sx={radioCardStyle}>
                  <Radio
                    sx={{ alignItems: 'center' }}
                    overlay
                    value={i}
                    checked={selectedAnswer === i.toString()}
                    onChange={handleAnswerChange}
                    name='answerRadio'
                    label={text}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button
            onClick={checkAnswer}
            disabled={!selectedAnswer}
            sx={{ px: 6, py: 3, fontSize: 'md' }}>
            {properties.screen.game.button.confirm}
          </Button>
        </Box>
      </Stack>
    </HeaderScreen>
  );
}

export default GamePage;
