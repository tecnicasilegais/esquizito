import { Box, Button, Card, Divider, Grid, Radio, Stack } from '@mui/joy';
import React from 'react';
import logo from 'assets/logo.png';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen';
import { properties } from '../../util/Properties';

function GamePage() {
  const [selectedAnswer, setSelectedAnswer] = React.useState('');
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  return (
    <HeaderScreen>
      <Stack mx={2} spacing={4}>
        <Card sx={{ borderRadius: 24 }}>
          <Box>
            <Box fontWeight='xl' component='span'>
              {'I. '}
            </Box>
            <Box fontWeight='md' component='span'>
              {properties.example.screen.game.question}
            </Box>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Box>
            <Box fontWeight='xl' component='span'>
              {'II. '}
            </Box>
            <Box fontWeight='md' component='span'>
              {properties.example.screen.game.question}
            </Box>
          </Box>
        </Card>
        <Box>
          <Grid container spacing={1}>
            {properties.example.screen.game.answer.map((text, i) => (
              <Grid xs={12} sm={6}>
                <Card sx={{ borderRadius: 24, p: 3 }}>
                  <Radio
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
