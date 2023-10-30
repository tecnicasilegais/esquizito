import { Card, Chip, Divider, Stack, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';
import { translations } from 'util/Properties';

function AnswerDetails({ correctAnswer, explanation, givenAnswer, statement }) {
  return (
    <Stack direction='row' spacing={1}>
      <Card variant='soft'>
        <Stack
          flex={1}
          fontWeight={600}
          justifyContent='space-evenly'
          spacing={1}>
          <Stack
            direction='row'
            justifyContent='space-between'
            minWidth='260px'
            spacing={1}
            width='260px'>
            <Typography>{translations.resultDetails.yourAnswer}</Typography>
            <Chip
              color={givenAnswer === correctAnswer ? 'success' : 'danger'}
              size='sm'>
              {translations.resultDetails.answer[givenAnswer]}
            </Chip>
          </Stack>
          <Divider />
          <Stack
            direction='row'
            justifyContent='space-between'
            minWidth='260px'
            spacing={1}
            width='260px'>
            <Typography>{translations.resultDetails.correctAnswer}</Typography>
            <Chip
              color={givenAnswer === correctAnswer ? 'success' : 'danger'}
              size='sm'>
              {translations.resultDetails.answer[correctAnswer]}
            </Chip>
          </Stack>
        </Stack>
      </Card>
      <Card sx={{ flex: 1, justifyContent: 'center' }} variant='soft'>
        <Stack flex={1} justifyContent='space-evenly' spacing={1}>
          <Stack direction='row'>
            <Typography fontWeight='lg' minWidth='120px' width='120px'>
              {translations.resultDetails.statement}
            </Typography>
            <Typography>{statement}</Typography>
          </Stack>
          <Divider />
          <Stack direction='row'>
            <Typography fontWeight='lg' minWidth='120px' width='120px'>
              {translations.resultDetails.explanation}
            </Typography>
            <Typography>{explanation}</Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

AnswerDetails.propTypes = {
  correctAnswer: PropTypes.bool.isRequired,
  explanation: PropTypes.string.isRequired,
  givenAnswer: PropTypes.bool.isRequired,
  statement: PropTypes.string.isRequired,
};

export default AnswerDetails;
