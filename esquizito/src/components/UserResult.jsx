import {
  CalendarMonthRounded,
  CheckRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { Button, Card, Chip, Divider, Stack, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { translations } from 'util/Properties';

function UserResult({
  answers,
  openResultDetails,
  quizName,
  resultId,
  savedAt,
}) {
  const [correctPercentage, setCorrectPercentage] = useState(0);
  const colorByPercentage = (percentage) => {
    if (percentage < 40) {
      return 'danger';
    }
    if (percentage < 75) {
      return 'warning';
    }
    return 'success';
  };

  useEffect(() => {
    let numberCorrectAnswers = 0;
    for (let i = 0; i <= answers.length - 2; i += 2) {
      if (
        answers[i].answer === answers[i].question.answer &&
        answers[i + 1].answer === answers[i + 1].question.answer
      ) {
        numberCorrectAnswers++;
      }
    }
    setCorrectPercentage((numberCorrectAnswers / (answers.length / 2)) * 100);
  }, [answers]);

  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Chip
          color={colorByPercentage(correctPercentage)}
          size='md'
          startDecorator={<CheckRounded />}
          sx={{ minWidth: '80px', textAlign: 'center', width: '80px' }}
          variant='solid'>
          {`${Math.round(correctPercentage)}%`}
        </Chip>
        <Divider orientation='vertical' />
        <Stack
          alignItems='center'
          justifyContent='center'
          minWidth='110px'
          width='110px'>
          <Chip
            color='neutral'
            size='sm'
            startDecorator={<CalendarMonthRounded />}
            variant='soft'>
            {new Date(savedAt).toLocaleDateString()}
          </Chip>
        </Stack>
        <Divider orientation='vertical' />
        <Stack flex={1} justifyContent='center'>
          <Typography>{quizName}</Typography>
        </Stack>
        <Divider orientation='vertical' />
        <Button
          size='sm'
          startDecorator={<VisibilityRounded />}
          variant='plain'
          onClick={openResultDetails}>
          {translations.userResults.button.details}
        </Button>
      </Stack>
    </Card>
  );
}

UserResult.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.bool.isRequired,
      question: PropTypes.shape({
        answer: PropTypes.bool.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  openResultDetails: PropTypes.func.isRequired,
  quizName: PropTypes.string.isRequired,
  resultId: PropTypes.string.isRequired,
  savedAt: PropTypes.string.isRequired,
};

export default UserResult;
