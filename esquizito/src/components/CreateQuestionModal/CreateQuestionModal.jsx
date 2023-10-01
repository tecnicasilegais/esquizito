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
import * as DB from '../../util/DB';

function CreateQuestionModal({ open, onClose }) {
  const [subject, setSubject] = useState('');
  const [statement, setStatement] = useState('');
  const [answer, setAnswer] = useState('');
  const [explanation, setExplanation] = useState('');

  const clearFields = () => {
    setSubject('');
    setStatement('');
    setAnswer('');
    setExplanation('');
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <ModalClose variant='plain' />
        <DialogTitle>Criar nova pergunta</DialogTitle>
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
                onClick={onClose}>
                Cancelar
              </Button>
              <Button
                color='primary'
                startDecorator={<Save />}
                type='submit'
                variant='soft'
                onClick={() =>
                  DB.createQuestion({
                    subject,
                    statement,
                    answer: answer === 'T',
                    explanation,
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

CreateQuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateQuestionModal;
