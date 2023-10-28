import { DeleteRounded, EditRounded } from '@mui/icons-material';
import { Box, Button, Card, Chip, Divider, Stack } from '@mui/joy';
import ConfirmationModal from 'components/ConfirmationModal';
import ManageQuestionModal from 'components/ManageQuestionModal';
import { useService } from 'contexts/ServiceContext';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { translations } from 'util/Properties';

function ManageQuestion({
  answer,
  explanation,
  questionId,
  refreshPage,
  statement,
  subject,
}) {
  const [modalEditQuestion, setModalEditQuestion] = useState(false);
  const [modalDeleteQuestion, setModalDeleteQuestion] = useState(false);
  const { questionService } = useService();

  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack alignItems='stretch' justifyContent='center'>
          <Button
            size='sm'
            startDecorator={<EditRounded />}
            sx={{ justifyContent: 'flex-start' }}
            variant='plain'
            onClick={() => setModalEditQuestion(true)}>
            {translations.manageQuestions.button.edit}
          </Button>
        </Stack>
        <Divider orientation='vertical' />
        <Stack flexGrow={1} justifyContent='center' px={2} spacing={1}>
          <Box>
            <Chip size='sm' variant='solid'>
              {subject}
            </Chip>
          </Box>
          <Box textAlign='justify'>{statement}</Box>
        </Stack>
        <Divider orientation='vertical' />
        <Stack alignItems='center' justifyContent='space-around'>
          <Button
            color='danger'
            size='sm'
            startDecorator={<DeleteRounded />}
            variant='plain'
            onClick={() => setModalDeleteQuestion(true)}>
            {translations.manageQuestions.button.delete}
          </Button>
        </Stack>
      </Stack>
      <ManageQuestionModal
        open={modalEditQuestion}
        questionData={{ answer, explanation, statement, subject }}
        title={translations.manageQuestions.questionModal.headerEdit}
        type='edit'
        onCancel={() => setModalEditQuestion(false)}
        onClose={() => setModalEditQuestion(false)}
        onSave={(questionData) =>
          questionService
            .update({
              questionId,
              ...questionData,
            })
            .then(() => refreshPage())
        }
      />
      <ConfirmationModal
        open={modalDeleteQuestion}
        title={translations.manageQuestions.deleteHeader}
        onClose={() => setModalDeleteQuestion(false)}
        onConfirm={() => {
          questionService.remove(questionId).then(() => refreshPage());
        }}
      />
    </Card>
  );
}

ManageQuestion.propTypes = {
  answer: PropTypes.bool.isRequired,
  explanation: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  refreshPage: PropTypes.func.isRequired,
  statement: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};
export default ManageQuestion;
