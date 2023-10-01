import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from '@mui/joy';
import { CleaningServices, Clear, Save } from '@mui/icons-material';
import * as PropTypes from 'prop-types';

function ManageQuestionModal({
  onClose,
  onSave,
  open,
  questionData,
  title,
  type,
}) {
  const [answer, setAnswer] = useState(
    type === 'edit' ? questionData.answer : false,
  );
  const [explanation, setExplanation] = useState(
    type === 'edit' ? questionData.explanation : '',
  );
  const [statement, setStatement] = useState(
    type === 'edit' ? questionData.statement : '',
  );
  const [subject, setSubject] = useState(
    type === 'edit' ? questionData.subject : '',
  );

  const clearFields = () => {
    setAnswer(false);
    setExplanation('');
    setStatement('');
    setSubject('');
  };

  const updateFields = (updatedFields) => {
    setAnswer(updatedFields.answer);
    setExplanation(updatedFields.explanation);
    setStatement(updatedFields.statement);
    setSubject(updatedFields.subject);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleClose = () => {
    if (type === 'edit') {
      updateFields(questionData);
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalDialog>
        <ModalClose variant='plain' />
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Stack minWidth='60vw' mt={1} spacing={2}>
            <FormControl>
              <FormLabel>Assunto</FormLabel>
              <Input
                autoFocus
                required
                value={subject}
                variant='soft'
                onChange={(event) => setSubject(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pergunta</FormLabel>
              <Textarea
                required
                minRows={5}
                value={statement}
                variant='soft'
                onChange={(event) => setStatement(event.target.value)}
              />
            </FormControl>
            <FormLabel>Resposta</FormLabel>
            <RadioGroup orientation='horizontal'>
              <Radio
                value
                checked={answer}
                label='Verdadeiro'
                name='answerRadio'
                onChange={handleAnswerChange}
              />
              <Radio
                checked={!answer}
                label='Falso'
                name='answerRadio'
                value={false}
                onChange={handleAnswerChange}
              />
            </RadioGroup>
            <FormControl />
            <FormControl>
              <FormLabel>Explicação</FormLabel>
              <Textarea
                required
                minRows={5}
                value={explanation}
                variant='soft'
                onChange={(event) => setExplanation(event.target.value)}
              />
            </FormControl>
            <ButtonGroup buttonFlex={1}>
              <Button
                color='danger'
                startDecorator={<CleaningServices />}
                type='reset'
                variant='solid'
                onClick={() => clearFields()}>
                Limpar
              </Button>
              <Button
                startDecorator={<Clear />}
                variant='soft'
                onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                color='primary'
                startDecorator={<Save />}
                type='submit'
                variant='solid'
                onClick={() => {
                  onSave({
                    answer,
                    explanation,
                    statement,
                    subject,
                  });
                  onClose();
                }}>
                Salvar
              </Button>
            </ButtonGroup>
          </Stack>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

ManageQuestionModal.propTypes = {
  onClose: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  questionData: PropTypes.shape({
    answer: PropTypes.bool,
    explanation: PropTypes.string,
    statement: PropTypes.string,
    subject: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['create', 'edit']).isRequired,
};

ManageQuestionModal.defaultProps = {
  onClose: null,
  questionData: null,
};

export default ManageQuestionModal;
