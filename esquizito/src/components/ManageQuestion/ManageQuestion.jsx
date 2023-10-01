import React, { useState } from 'react';
import { Box, Button, Card, Chip, Stack } from '@mui/joy';
import { Delete, Edit } from '@mui/icons-material';
import PropTypes from 'prop-types';
import ManageQuestionModal from '../ManageQuestionModal/ManageQuestionModal';
import * as DB from '../../apis/services/DB';
import DeleteQuestionModal from '../DeleteQuestionModal/DeleteQuestionModal';

function ManageQuestion({
  answer,
  explanation,
  questionId,
  statement,
  subject,
}) {
  const [modalEditQuestion, setModalEditQuestion] = useState(false);
  const [modalDeleteQuestion, setModalDeleteQuestion] = useState(false);
  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack>
          <Button
            size='sm'
            sx={{ height: '100%' }}
            variant='plain'
            onClick={() => setModalEditQuestion(true)}>
            <Edit />
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
            <Delete />
          </Button>
        </Stack>
      </Stack>
      <ManageQuestionModal
        open={modalEditQuestion}
        questionData={{ answer, explanation, statement, subject }}
        title='Editar pergunta'
        type='edit'
        onCancel={() => setModalEditQuestion(false)}
        onClose={() => setModalEditQuestion(false)}
        onSave={(questionData) =>
          DB.updateQuestion({ questionId, ...questionData })
        }
      />
      <DeleteQuestionModal
        open={modalDeleteQuestion}
        onClose={() => setModalDeleteQuestion(false)}
      />
    </Card>
  );
}

ManageQuestion.propTypes = {
  answer: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};
export default ManageQuestion;
