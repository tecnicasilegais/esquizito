import * as PropTypes from 'prop-types';
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
import { translations } from 'util/Properties';
import React, { useEffect, useState } from 'react';

function ManageQuestionModal({
  formDisabled,
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
    setAnswer(event.target.value === 'true');
  };

  const handleClose = () => {
    if (type === 'edit') {
      updateFields(questionData);
    }
    onClose();
  };

  useEffect(() => {
    if (questionData) {
      updateFields(questionData);
    }
  }, [questionData]);

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalDialog>
        <ModalClose variant='plain' />
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Stack minWidth='60vw' mt={1} spacing={2}>
            <FormControl>
              <FormLabel>
                {translations.manageQuestions.questionModal.subject}
              </FormLabel>
              <Input
                autoFocus
                required
                disabled={formDisabled}
                value={subject}
                variant='soft'
                onChange={(event) => setSubject(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                {translations.manageQuestions.questionModal.statement}
              </FormLabel>
              <Textarea
                required
                disabled={formDisabled}
                minRows={5}
                value={statement}
                variant='soft'
                onChange={(event) => setStatement(event.target.value)}
              />
            </FormControl>
            <FormLabel>
              {translations.manageQuestions.questionModal.answer}
            </FormLabel>
            <RadioGroup orientation='horizontal'>
              <Radio
                value
                checked={answer}
                disabled={formDisabled}
                label={translations.manageQuestions.questionModal.answerTrue}
                name='answerRadio'
                onChange={handleAnswerChange}
              />
              <Radio
                checked={!answer}
                disabled={formDisabled}
                label='Falso'
                name='answerRadio'
                value={false}
                onChange={handleAnswerChange}
              />
            </RadioGroup>
            <FormControl />
            <FormControl>
              <FormLabel>
                {translations.manageQuestions.questionModal.explanation}
              </FormLabel>
              <Textarea
                required
                disabled={formDisabled}
                minRows={5}
                value={explanation}
                variant='soft'
                onChange={(event) => setExplanation(event.target.value)}
              />
            </FormControl>
            {!formDisabled && (
              <ButtonGroup buttonFlex={1}>
                <Button
                  color='danger'
                  startDecorator={<CleaningServices />}
                  type='reset'
                  variant='solid'
                  onClick={() => clearFields()}>
                  {translations.manageQuestions.questionModal.button.clear}
                </Button>
                <Button
                  startDecorator={<Clear />}
                  variant='soft'
                  onClick={handleClose}>
                  {translations.manageQuestions.questionModal.button.cancel}
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
                  {translations.manageQuestions.questionModal.button.save}
                </Button>
              </ButtonGroup>
            )}
          </Stack>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

ManageQuestionModal.propTypes = {
  formDisabled: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
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
  formDisabled: false,
  onSave: null,
  questionData: null,
};

export default ManageQuestionModal;
