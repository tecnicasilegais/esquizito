import React, { useEffect, useState } from 'react';
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
  ListDivider,
  ListItem,
  Modal,
  ModalClose,
  ModalDialog,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/joy';
import {
  CleaningServices,
  Clear,
  InfoOutlined,
  Save,
  VisibilityRounded,
} from '@mui/icons-material';
import * as PropTypes from 'prop-types';
import { properties, translations } from 'util/Properties';
import GameModeSelector from 'components/GameModeSelector/GameModeSelector';
import * as Question from 'apis/services/Question';
import { useUser } from 'contexts/UserContext';

function ManageQuizModal({
  onClose,
  onSave,
  open,
  quizGameMode,
  quizName,
  quizQuestions,
  title,
  type,
}) {
  const [name, setName] = useState('');
  const [gameMode, setGameMode] = useState(properties.gameModes[0]);
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const updateCheckedQuestion = (questionId, checked) => {
    setCheckedQuestions({ ...checkedQuestions, [questionId]: checked });
  };

  const clearFields = () => {
    setName('');
    setGameMode(properties.gameModes[0]);
    const newCheckedQuestions = {};
    Object.keys(checkedQuestions).forEach((questionId) => {
      newCheckedQuestions[questionId] = false;
    });
    setCheckedQuestions(newCheckedQuestions);
  };

  const resetEditedValues = () => {
    setName(quizName);
    setGameMode(properties.gameModes[quizGameMode]);

    const checkedValue = type === 'edit';
    const newCheckedQuestions = {};
    quizQuestions.forEach((question) => {
      newCheckedQuestions[question._id] = checkedValue;
    });
    setCheckedQuestions({ ...newCheckedQuestions });
  };

  const handleClose = () => {
    if (type === 'edit') {
      resetEditedValues();
    }
    onClose();
  };

  useEffect(() => {
    if (type === 'edit') {
      setName(quizName);
      setGameMode(properties.gameModes[quizGameMode]);
    }
  }, [quizName, quizGameMode]);

  useEffect(() => {
    if (quizQuestions) {
      resetEditedValues();
      setLoading(false);
    }
  }, [quizQuestions]);

  if (loading) return <div>Loading...</div>;
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalDialog>
        <ModalClose variant='plain' />
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Stack mt={1} spacing={2} width='450px'>
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
            <Card
              sx={{ maxHeight: '40vh', overflow: 'auto', p: 1 }}
              variant='soft'>
              <List>
                {quizQuestions.map((question, i) => (
                  <React.Fragment key={`fragment_${question._id}`}>
                    {i !== 0 && (
                      <ListDivider
                        inset='gutter'
                        key={`divider_${question._id}`}
                      />
                    )}
                    <ListItem key={question._id} variant='plain'>
                      <Stack
                        alignItems='center'
                        direction='row'
                        flex={1}
                        justifyContent='space-between'
                        spacing={2}>
                        <Checkbox
                          checked={checkedQuestions[question._id]}
                          label={question.statement}
                          onChange={(event) =>
                            updateCheckedQuestion(
                              question._id,
                              event.target.checked,
                            )
                          }
                        />
                        <Button size='sm' variant='plain'>
                          <VisibilityRounded />
                        </Button>
                      </Stack>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Card>
            <FormControl />
            <ButtonGroup buttonFlex={1}>
              <Button
                color='danger'
                startDecorator={<CleaningServices />}
                type='reset'
                variant='solid'
                onClick={clearFields}>
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
                    gameMode: properties.gameModes.indexOf(gameMode),
                    name,
                    questionIds: Object.keys(checkedQuestions).filter(
                      (key) => checkedQuestions[key],
                    ),
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
  quizGameMode: PropTypes.number,
  quizName: PropTypes.string,
  quizQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.bool,
      explanation: PropTypes.string,
      statement: PropTypes.string,
      subject: PropTypes.string,
    }),
  ),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['create', 'edit']).isRequired,
};

ManageQuizModal.defaultProps = {
  quizGameMode: 0,
  quizName: '',
  quizQuestions: [],
};

export default ManageQuizModal;
