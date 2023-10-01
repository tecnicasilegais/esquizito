import React, { useEffect, useState } from 'react';
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

function ManageQuestionModal({ onCancel, onClose, onSave, open, title }) {
  const [answer, setAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [statement, setStatement] = useState('');
  const [subject, setSubject] = useState('');

  const clearFields = () => {
    setAnswer('');
    setExplanation('');
    setStatement('');
    setSubject('');
  };

  const updateFields = ({
    updatedAnswer,
    updatedExplanation,
    updatedStatement,
    updatedSubject,
  }) => {
    setAnswer(updatedAnswer);
    setExplanation(updatedExplanation);
    setStatement(updatedStatement);
    setSubject(updatedSubject);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
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
                checked={answer === 'T'}
                label='Verdadeiro'
                name='answerRadio'
                value='T'
                onChange={handleAnswerChange}
              />
              <Radio
                checked={answer === 'F'}
                label='Falso'
                name='answerRadio'
                value='F'
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
                variant='soft'
                onClick={() => clearFields()}>
                Limpar
              </Button>
              <Button
                startDecorator={<Clear />}
                variant='soft'
                onClick={onCancel}>
                Cancelar
              </Button>
              <Button
                color='primary'
                startDecorator={<Save />}
                type='submit'
                variant='soft'
                onClick={() =>
                  onSave({
                    answer: answer === 'T',
                    explanation,
                    statement,
                    subject,
                  })
                }>
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
  onCancel: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default ManageQuestionModal;
