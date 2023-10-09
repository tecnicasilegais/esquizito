import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  ListItem,
  Modal,
  ModalClose,
  ModalDialog,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from '@mui/joy';
import {
  CleaningServices,
  Clear,
  InfoOutlined,
  InfoRounded,
  Save,
} from '@mui/icons-material';
import * as PropTypes from 'prop-types';
import { properties, translations } from 'util/Properties';
import GameModeSelector from 'components/GameModeSelector/GameModeSelector';

function ManageQuizModal({ onClose, onSave, open, questionData, title, type }) {
  const [name, setName] = useState('');
  const [gameMode, setGameMode] = useState(properties.gameModes[0]);
  const [questions, setQuestions] = useState([]);

  const clearFields = () => {
    setName('');
    setGameMode(properties.gameModes[0]);
    setQuestions([]);
  };

  const updateFields = (updatedFields) => {
    setName(updatedFields.subject);
    setGameMode(updatedFields.answer);
    setQuestions(updatedFields.statement);
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
              <FormLabel>{translations.manageQuizzes.quizModal.name}</FormLabel>
              <Input
                autoFocus
                required
                value={name}
                variant='soft'
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                {translations.manageQuizzes.quizModal.gameMode}
              </FormLabel>
              <RadioGroup
                orientation='horizontal'
                value={gameMode}
                sx={{
                  '--Radio-actionRadius': '8px',
                  '--RadioGroup-gap': '4px',
                  bgcolor: 'neutral.softBg',
                  borderRadius: '32px',
                  margin: '0',
                  minHeight: 40.5,
                  padding: '4px',
                }}
                onChange={(event) => setGameMode(event.target.value)}>
                {properties.gameModes.map((mode) => (
                  <Radio
                    disableIcon
                    color='neutral'
                    key={mode}
                    name='gameModeRadio'
                    value={mode}
                    variant='plain'
                    label={
                      <GameModeSelector
                        startDecorator={
                          translations.manageQuizzes.quizModal.gameModes[mode]
                            .icon
                        }>
                        {
                          translations.manageQuizzes.quizModal.gameModes[mode]
                            .text
                        }
                      </GameModeSelector>
                    }
                    slotProps={{
                      action: ({ checked }) => ({
                        sx: {
                          ...(checked && {
                            '&:hover': {
                              bgcolor: 'background.surface',
                            },
                            bgcolor: 'background.surface',
                            borderRadius: 24,
                            boxShadow: 'sm',
                            transition: 'all 0.2s ease-in-out',
                          }),
                          ...(!checked && {
                            '&:hover': {
                              bgcolor: 'neutral.softActiveBg',
                              borderRadius: 24,
                              transition: 'background-color 0.2s ease-in-out',
                            },
                          }),
                          '&:active': {
                            borderRadius: 24,
                          },
                        },
                      }),
                      label: ({ checked }) => ({
                        sx: {
                          ...(checked && {
                            color: 'primary.outlinedColor',
                            transition: 'all 0.2s ease-in-out',
                          }),
                        },
                      }),
                    }}
                    sx={{
                      alignItems: 'center',
                      flex: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  />
                ))}
              </RadioGroup>
              <FormHelperText>
                <Stack direction='row' marginInlineStart={1} spacing={1}>
                  <InfoOutlined />
                  <Box>
                    {
                      translations.manageQuizzes.quizModal.gameModes[gameMode]
                        .helperText
                    }
                  </Box>
                </Stack>
              </FormHelperText>
            </FormControl>
            <FormLabel>
              {translations.manageQuizzes.quizModal.questions}
            </FormLabel>
            <Card variant='soft'>
              <List>
                <Card variant='plain'>
                  <Stack direction='row' spacing={2}>
                    <Checkbox />
                    <Box>Teste 1</Box>
                  </Stack>
                </Card>
              </List>
            </Card>
            <FormControl />
            <ButtonGroup buttonFlex={1}>
              <Button
                color='danger'
                startDecorator={<CleaningServices />}
                type='reset'
                variant='solid'
                onClick={() => clearFields()}>
                {translations.manageQuizzes.quizModal.button.clear}
              </Button>
              <Button
                startDecorator={<Clear />}
                variant='soft'
                onClick={handleClose}>
                {translations.manageQuizzes.quizModal.button.cancel}
              </Button>
              <Button
                color='primary'
                startDecorator={<Save />}
                type='submit'
                variant='solid'
                onClick={() => {
                  onSave({
                    gameMode,
                    name,
                    questions,
                  });
                  onClose();
                }}>
                {translations.manageQuizzes.quizModal.button.save}
              </Button>
            </ButtonGroup>
          </Stack>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

ManageQuizModal.propTypes = {
  onClose: PropTypes.func.isRequired,
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

ManageQuizModal.defaultProps = {
  questionData: null,
};

export default ManageQuizModal;
