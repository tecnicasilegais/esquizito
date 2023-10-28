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
import GameEndModal from 'components/GameEndModal';
import GameQuestion from 'components/GameQuestion';
import HeaderScreen from 'components/HeaderScreen';
import { useNavContext } from 'contexts/NavContext';
import { useService } from 'contexts/ServiceContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { properties, translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function GamePage() {
  const navigate = useNavigate();
  const { gameData, setGameData } = useNavContext();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [openEndModal, setOpenEndModal] = useState(false);
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);
  const { resultService } = useService();

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const checkAnswer = () => {
    setDisabled(true);

    const userAnswers = [selectedAnswer[0] === 'v', selectedAnswer[1] === 'v'];

    setNumberCorrectAnswers(
      (storedNumber) =>
        storedNumber + userAnswers.count((answer) => answer === true),
    );

    setAnswers((storedAnswers) => [
      ...storedAnswers,
      {
        correctAnswer: questions[questionIndex].answer,
        elapsedTime: 10,
        givenAnswer: userAnswers[0],
        questionId: questions[questionIndex]._id,
      },
      {
        correctAnswer: questions[questionIndex + 1].answer,
        elapsedTime: 10,
        givenAnswer: userAnswers[1],
        questionId: questions[questionIndex + 1]._id,
      },
    ]);

    if (
      userAnswers[0] === questions[questionIndex].answer &&
      userAnswers[1] === questions[questionIndex + 1].answer
    ) {
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }
  };

  const endGame = () => {
    resultService
      .create({
        answers,
        elapsedTime: questions.length * 10,
        quizId: gameData._id,
      })
      .then(() => navigate(urlPaths.mainMenu));
  };

  const nextQuestion = () => {
    setSelectedAnswer('');
    setAnswerCorrect(null);
    if (questionIndex + 2 < questions.length) {
      setQuestionIndex(questionIndex + 2);
      setDisabled(false);
    } else {
      setOpenEndModal(true);
    }
  };

  useEffect(() => {
    if (gameData) {
      setQuestions(gameData.questions);
      setLoading(false);
    }
  }, [gameData]);

  return (
    <HeaderScreen>
      {!loading && (
        <Stack mb={2} mt={1} mx={2} spacing={4} sx={{ userSelect: 'none' }}>
          <Card>
            <GameQuestion
              number='I'
              text={questions[questionIndex].statement}
            />
            <Box>
              <Divider />
            </Box>
            <GameQuestion
              number='II'
              text={questions[questionIndex + 1].statement}
            />
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
              {properties.answers.map((value) => (
                <Grid key={value} sm={6} xs={12}>
                  <Card
                    name={`radioCard-${value}`}
                    sx={{
                      '&:hover': {
                        bgcolor: 'primary.100',
                        transition: 'background-color .1s linear',
                      },
                      boxSizing: 'border-box',
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'center',
                      p: 3,
                    }}>
                    <Radio
                      overlay
                      checked={selectedAnswer === value}
                      disabled={disabled}
                      label={translations.game.answers[value]}
                      name='answerRadio'
                      sx={{ alignItems: 'center' }}
                      value={value}
                      slotProps={{
                        action: ({ checked }) => ({
                          sx: (theme) => ({
                            ...(checked &&
                              answerCorrect === true && {
                                bgcolor: `rgba(${theme.vars.palette.success.mainChannel} / 0.7)`,
                              }),
                            ...(checked &&
                              answerCorrect === false && {
                                bgcolor: `rgba(${theme.vars.palette.danger.mainChannel} / 0.7)`,
                              }),
                            zIndex: 0,
                          }),
                        }),
                        icon: { sx: { zIndex: 1 } },
                        label: { sx: { zIndex: 1 } },
                      }}
                      onChange={handleAnswerChange}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box display='flex' justifyContent='center'>
            {answerCorrect === null && (
              <Button
                disabled={!selectedAnswer}
                sx={{ fontSize: 'md', px: 4, py: 2 }}
                onClick={checkAnswer}>
                {translations.game.button.confirm}
              </Button>
            )}
            {answerCorrect !== null && (
              <Button
                sx={{ fontSize: 'md', px: 4, py: 2 }}
                onClick={nextQuestion}>
                {translations.game.button.next}
              </Button>
            )}
          </Box>
        </Stack>
      )}
      <GameEndModal
        clearGameData={() => setGameData(undefined)}
        correctAnswers={numberCorrectAnswers}
        incorrectAnswers={questions.length - numberCorrectAnswers}
        open={openEndModal}
      />
    </HeaderScreen>
  );
}

export default GamePage;
