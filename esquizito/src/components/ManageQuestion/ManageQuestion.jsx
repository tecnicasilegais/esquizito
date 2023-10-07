import React, { useState } from 'react';
import { Box, Button, Card, Chip, Stack } from '@mui/joy';
import { DeleteRounded, EditRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useUser } from 'contexts/UserContext';
import { properties } from 'util/Properties';
import * as DB from 'apis/services/DB';
import DeleteQuestionModal from 'components/DeleteQuestionModal/DeleteQuestionModal';
import ManageQuestionModal from 'components/ManageQuestionModal/ManageQuestionModal';

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
  const { user } = useUser();
  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack>
          <Button
            size='sm'
            sx={{ height: '100%' }}
            variant='plain'
            onClick={() => setModalEditQuestion(true)}>
            <EditRounded />
          </Button>
        </Stack>
        <Stack flexGrow={1} spacing={1}>
          <Box>
            <Chip size='lg' variant='solid'>
              {subject}
            </Chip>
          </Box>
          <Box textAlign='justify'>{statement}</Box>
        </Stack>
        <Stack>
          <Button
            color='danger'
            size='sm'
            sx={{ height: '100%' }}
            variant='plain'
            onClick={() => setModalDeleteQuestion(true)}>
            <DeleteRounded />
          </Button>
        </Stack>
      </Stack>
      <ManageQuestionModal
        open={modalEditQuestion}
        questionData={{ answer, explanation, statement, subject }}
        title={properties.screen.manageQuestions.questionModal.headerEdit}
        type='edit'
        onCancel={() => setModalEditQuestion(false)}
        onClose={() => setModalEditQuestion(false)}
        onSave={(questionData) =>
          DB.updateQuestion({
            questionId,
            userId: user.id,
            ...questionData,
          }).then(() => refreshPage())
        }
      />
      <DeleteQuestionModal
        open={modalDeleteQuestion}
        onClose={() => setModalDeleteQuestion(false)}
        onDelete={() => {
          DB.deleteQuestion(questionId).then(() => refreshPage());
        }}
      />
    </Card>
  );
}

ManageQuestion.propTypes = {
  answer: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  refreshPage: PropTypes.func.isRequired,
  statement: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};
export default ManageQuestion;
