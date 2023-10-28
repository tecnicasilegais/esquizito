import {
  ArchiveRounded,
  ContentCopyRounded,
  EditRounded,
  KeyRounded,
  LeaderboardRounded,
  PublishRounded,
  TagRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { Box, Button, Card, Chip, Divider, Stack } from '@mui/joy';
import ConfirmationModal from 'components/ConfirmationModal';
import ManageQuizModal from 'components/ManageQuizModal';
import { useNavContext } from 'contexts/NavContext';
import { useService } from 'contexts/ServiceContext';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { properties, translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function Quiz({
  amountOfAnswers,
  availableQuestions,
  code,
  gameMode,
  name,
  questions,
  quizId,
  quizStatus,
  refreshPage,
}) {
  const navigate = useNavigate();
  const { setResultData } = useNavContext();
  const { quizService } = useService();
  const [modalEditQuiz, setModalEditQuiz] = useState(false);
  const [modalDeleteQuiz, setModalDeleteQuiz] = useState(false);
  const [modalPublishQuiz, setModalPublishQuiz] = useState(false);
  const [modalFieldsDisabled, setModalFieldsDisabled] = useState(false);

  const handleQuizResultsButton = async () => {
    setResultData({ quizId });
    navigate(urlPaths.quizResultsPage);
  };

  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack
          alignItems='center'
          justifyContent='center'
          maxWidth='130px'
          minWidth='130px'
          spacing={1}
          width='130px'>
          <Chip
            color={translations.manageQuizzes.quizStatus[quizStatus].color}
            size='md'
            variant='solid'
            startDecorator={
              translations.manageQuizzes.quizStatus[quizStatus].icon
            }>
            {translations.manageQuizzes.quizStatus[quizStatus].text}
          </Chip>
          {properties.quizStatus[quizStatus] === 'published' && (
            <Chip
              color='success'
              endDecorator={<ContentCopyRounded />}
              size='sm'
              startDecorator={<KeyRounded />}
              variant='outlined'
              onClick={() => {
                navigator.clipboard.writeText(code);
                toast.message('Código copiado para a área de transferência');
              }}>
              {code}
            </Chip>
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
            {properties.quizStatus[quizStatus] !== 'draft' &&
              amountOfAnswers > 0 && (
                <Chip size='sm' startDecorator={<TagRounded />} variant='solid'>
                  {`${amountOfAnswers} ${translations.manageQuizzes.quizModal.answers}`}
                </Chip>
              )}
          </Stack>
          <Box textAlign='justify'>{name}</Box>
        </Stack>
        <Divider orientation='vertical' />
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='flex-end'
          sx={{ '& button:disabled': { opacity: '0.4' } }}>
          {properties.quizStatus[quizStatus] !== 'draft' &&
            amountOfAnswers > 0 && (
              <Button
                size='sm'
                startDecorator={<LeaderboardRounded />}
                variant='plain'
                onClick={handleQuizResultsButton}>
                {translations.manageQuizzes.button.results}
              </Button>
            )}
          {properties.quizStatus[quizStatus] === 'draft' && (
            <Button
              disabled={properties.quizStatus[quizStatus] !== 'draft'}
              size='sm'
              startDecorator={<PublishRounded />}
              variant='plain'
              onClick={() => setModalPublishQuiz(true)}>
              {translations.manageQuizzes.button.publish}
            </Button>
          )}
          {properties.quizStatus[quizStatus] === 'draft' && (
            <Button
              disabled={properties.quizStatus[quizStatus] !== 'draft'}
              size='sm'
              startDecorator={<EditRounded />}
              variant='plain'
              onClick={() => {
                setModalFieldsDisabled(false);
                setModalEditQuiz(true);
              }}>
              {translations.manageQuizzes.button.edit}
            </Button>
          )}
          {properties.quizStatus[quizStatus] !== 'draft' && (
            <Button
              disabled={properties.quizStatus[quizStatus] === 'draft'}
              size='sm'
              startDecorator={<VisibilityRounded />}
              variant='plain'
              onClick={() => {
                setModalFieldsDisabled(true);
                setModalEditQuiz(true);
              }}>
              {translations.manageQuizzes.button.view}
            </Button>
          )}
          {properties.quizStatus[quizStatus] !== 'archived' && (
            <Button
              color='danger'
              disabled={properties.quizStatus[quizStatus] === 'archived'}
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
  amountOfAnswers: PropTypes.number,
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
  amountOfAnswers: 0,
  code: '',
};
export default Quiz;
