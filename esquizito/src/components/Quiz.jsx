import {
  ArchiveRounded,
  EditRounded,
  KeyRounded,
  PublishRounded,
  TagRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { Box, Button, Card, Chip, Divider, Stack } from '@mui/joy';
import { properties, translations } from 'util/Properties';
import ConfirmationModal from 'components/ConfirmationModal';
import ManageQuizModal from 'components/ManageQuizModal';
import PropTypes from 'prop-types';
import { useService } from 'contexts/ServiceContext';
import React, { useState } from 'react';

function Quiz({
  availableQuestions,
  code,
  gameMode,
  name,
  questions,
  quizId,
  quizStatus,
  refreshPage,
}) {
  const [modalEditQuiz, setModalEditQuiz] = useState(false);
  const [modalDeleteQuiz, setModalDeleteQuiz] = useState(false);
  const [modalPublishQuiz, setModalPublishQuiz] = useState(false);
  const [modalFieldsDisabled, setModalFieldsDisabled] = useState(false);
  const { quizService } = useService();

  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack alignItems='stretch' justifyContent='center' width='130px'>
          {properties.quizStatus[quizStatus] === 'draft' && (
            <Button
              size='sm'
              startDecorator={<PublishRounded />}
              sx={{ justifyContent: 'flex-start' }}
              variant='plain'
              onClick={() => setModalPublishQuiz(true)}>
              {translations.manageQuizzes.button.publish}
            </Button>
          )}
          {properties.quizStatus[quizStatus] === 'draft' && (
            <Button
              size='sm'
              startDecorator={<EditRounded />}
              sx={{ justifyContent: 'flex-start' }}
              variant='plain'
              onClick={() => {
                setModalFieldsDisabled(false);
                setModalEditQuiz(true);
              }}>
              {translations.manageQuizzes.button.edit}
            </Button>
          )}
          {(properties.quizStatus[quizStatus] === 'published' ||
            properties.quizStatus[quizStatus] === 'archived') && (
            <Button
              size='sm'
              startDecorator={<VisibilityRounded />}
              sx={{ justifyContent: 'flex-start' }}
              variant='plain'
              onClick={() => {
                setModalFieldsDisabled(true);
                setModalEditQuiz(true);
              }}>
              {translations.manageQuizzes.button.view}
            </Button>
          )}
        </Stack>
        <Divider orientation='vertical' />
        <Stack flexGrow={1} justifyContent='space-around' px={2}>
          <Stack direction='row' spacing={1}>
            <Chip
              size='sm'
              startDecorator={translations.gameModes[gameMode].icon}
              variant='solid'>
              {translations.gameModes[gameMode].text}
            </Chip>
            <Chip size='sm' startDecorator={<TagRounded />} variant='solid'>
              {`${questions.length} ${translations.manageQuizzes.quizModal.questions}`}
            </Chip>
            {properties.quizStatus[quizStatus] === 'published' && (
              <Chip
                size='sm'
                startDecorator={<KeyRounded />}
                variant='solid'
                onClick={() => navigator.clipboard.writeText(code)}>
                {code}
              </Chip>
            )}
          </Stack>
          <Box textAlign='justify'>{name}</Box>
        </Stack>
        <Divider orientation='vertical' />
        <Stack alignItems='center' justifyContent='space-around' width='130px'>
          <Chip
            size='md'
            variant='solid'
            startDecorator={
              translations.manageQuizzes.quizStatus[quizStatus].icon
            }>
            {translations.manageQuizzes.quizStatus[quizStatus].text}
          </Chip>
          {properties.quizStatus[quizStatus] !== 'archived' && (
            <Button
              color='danger'
              size='sm'
              startDecorator={<ArchiveRounded />}
              variant='plain'
              onClick={() => setModalDeleteQuiz(true)}>
              {translations.manageQuizzes.button.archive}
            </Button>
          )}
        </Stack>
      </Stack>
      <ManageQuizModal
        formDisabled={modalFieldsDisabled}
        initialCheckedQuestions={questions}
        open={modalEditQuiz}
        quizGameMode={gameMode}
        quizName={name}
        quizQuestions={availableQuestions}
        type='edit'
        title={
          modalFieldsDisabled
            ? translations.manageQuizzes.quizModal.headerView
            : translations.manageQuizzes.quizModal.headerEdit
        }
        onCancel={() => setModalEditQuiz(false)}
        onClose={() => setModalEditQuiz(false)}
        onSave={(questionData) =>
          quizService
            .update({ quizId, ...questionData })
            .then(() => refreshPage())
        }
      />
      <ConfirmationModal
        open={modalDeleteQuiz}
        primaryIcon={<ArchiveRounded />}
        primaryText={translations.manageQuizzes.button.archive}
        title={translations.manageQuizzes.deleteHeader}
        onClose={() => setModalDeleteQuiz(false)}
        onConfirm={() => quizService.archive(quizId).then(() => refreshPage())}
      />
      <ConfirmationModal
        negative={false}
        open={modalPublishQuiz}
        primaryIcon={<PublishRounded />}
        primaryText={translations.manageQuizzes.button.publish}
        title={translations.manageQuizzes.publishHeader}
        onClose={() => setModalPublishQuiz(false)}
        onConfirm={() => quizService.publish(quizId).then(() => refreshPage())}
      />
    </Card>
  );
}

Quiz.propTypes = {
  availableQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.bool,
      explanation: PropTypes.string,
      statement: PropTypes.string,
      subject: PropTypes.string,
    }),
  ).isRequired,
  code: PropTypes.string,
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
  quizStatus: PropTypes.number.isRequired,
  refreshPage: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  code: '',
};
export default Quiz;
