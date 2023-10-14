import React, { useState } from 'react';
import { Box, Button, Card, Chip, Divider, Stack } from '@mui/joy';
import {
  ArchiveRounded,
  DeleteRounded,
  EditRounded,
  PublishRounded,
  TagRounded,
} from '@mui/icons-material';
import PropTypes from 'prop-types';
import { properties, translations } from 'util/Properties';
import DeleteConfirmationModal from 'components/DeleteQuestionModal/DeleteConfirmationModal';
import ManageQuizModal from 'components/ManageQuizModal/ManageQuizModal';
import * as QuizService from 'apis/services/Quiz';

function Quiz({ gameMode, name, questions, quizId, refreshPage }) {
  const [modalEditQuiz, setModalEditQuiz] = useState(false);
  const [modalDeleteQuiz, setModalDeleteQuiz] = useState(false);
  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack textAlign='left'>
          <Button
            size='sm'
            startDecorator={<PublishRounded />}
            sx={{ height: '100%', justifyContent: 'flex-start' }}
            variant='plain'
            onClick={() => alert('implementa aí vai')}>
            {translations.manageQuizzes.quizModal.button.publish}
          </Button>
          <Button
            size='sm'
            startDecorator={<EditRounded />}
            sx={{ height: '100%', justifyContent: 'flex-start' }}
            variant='plain'
            onClick={() => setModalEditQuiz(true)}>
            {translations.manageQuizzes.quizModal.button.edit}
          </Button>
        </Stack>
        <Divider orientation='vertical' />
        <Stack flexGrow={1} justifyContent='center' px={2} spacing={1}>
          <Stack direction='row' spacing={1}>
            <Chip
              size='md'
              variant='solid'
              startDecorator={
                translations.manageQuizzes.quizModal.gameModes[
                  properties.gameModes[gameMode]
                ].icon
              }>
              {
                translations.manageQuizzes.quizModal.gameModes[
                  properties.gameModes[gameMode]
                ].text
              }
            </Chip>
            <Chip size='md' startDecorator={<TagRounded />} variant='solid'>
              {`${questions.length} ${translations.manageQuizzes.quizModal.questions}`}
            </Chip>
          </Stack>
          <Box textAlign='justify'>{name}</Box>
        </Stack>
        <Divider orientation='vertical' />
        <Stack>
          <Button
            color='danger'
            size='sm'
            startDecorator={<DeleteRounded />}
            sx={{ height: '100%' }}
            variant='plain'
            onClick={() => setModalDeleteQuiz(true)}>
            {translations.manageQuizzes.quizModal.button.delete}
          </Button>
          <Button
            color='danger'
            size='sm'
            startDecorator={<ArchiveRounded />}
            sx={{ height: '100%' }}
            variant='plain'
            onClick={() => setModalDeleteQuiz(true)}>
            {translations.manageQuizzes.quizModal.button.archive}
          </Button>
        </Stack>
      </Stack>
      <ManageQuizModal
        open={modalEditQuiz}
        quizGameMode={gameMode}
        quizName={name}
        quizQuestions={questions}
        title={translations.manageQuizzes.quizModal.headerEdit}
        type='edit'
        onCancel={() => setModalEditQuiz(false)}
        onClose={() => setModalEditQuiz(false)}
        onSave={(questionData) => alert('implementa aí vai')}
      />
      <DeleteConfirmationModal
        open={modalDeleteQuiz}
        title={translations.manageQuizzes.deleteHeader}
        onClose={() => setModalDeleteQuiz(false)}
        onDelete={() => QuizService.archive(quizId).then(() => refreshPage())}
      />
    </Card>
  );
}

Quiz.propTypes = {
  gameMode: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.bool,
      explanation: PropTypes.string,
      statement: PropTypes.string,
      subject: PropTypes.string,
    }),
  ).isRequired,
  quizId: PropTypes.string.isRequired,
  refreshPage: PropTypes.func.isRequired,
};
export default Quiz;
