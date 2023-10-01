import React, { useState } from 'react';
import { Box, Button, Card, Checkbox, Stack } from '@mui/joy';
import { Edit } from '@mui/icons-material';
import PropTypes from 'prop-types';
import ManageQuestionModal from '../ManageQuestionModal/ManageQuestionModal';
import * as DB from '../../util/DB';

function ManageQuestion({
  answer,
  explanation,
  questionId,
  statement,
  subject,
}) {
  const [modalEditQuestion, setModalEditQuestion] = useState(false);
  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack
          alignItems='center'
          justifyContent='space-between'
          py={1}
          spacing={1}>
          <Checkbox variant='outlined' />
          <Button
            size='sm'
            sx={{ height: '100%' }}
            variant='plain'
            onClick={() => setModalEditQuestion(true)}>
            <Edit />
          </Button>
        </Stack>
        <Box>{statement}</Box>
      </Stack>
      <ManageQuestionModal
        open={modalEditQuestion}
        title='Editar pergunta'
        onCancel={() => setModalEditQuestion(false)}
        onClose={() => setModalEditQuestion(false)}
        onSave={(questionData) =>
          DB.updateQuestion({ questionId, ...questionData })
        }
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
