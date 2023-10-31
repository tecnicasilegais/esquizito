import {
  AlarmRounded,
  CheckRounded,
  CloseRounded,
  HomeRounded,
  LeaderboardRounded,
} from '@mui/icons-material';
import {
  Button,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from '@mui/joy';
import format from 'format-duration';
import PropTypes from 'prop-types';
import React from 'react';
import { translations } from 'util/Properties';

function GameEndModal({
  correctAnswers,
  goToHome,
  goToResults,
  incorrectAnswers,
  isSaving,
  open,
  quizDuration,
}) {
  return (
    <Modal open={open}>
      <ModalDialog sx={{ alignItems: 'center', textAlign: 'center' }}>
        <DialogTitle>{translations.gameEndModal.header}</DialogTitle>
        <DialogContent>
          <Stack
            alignItems='stretch'
            justifyContent='center'
            mt={1}
            spacing={1}>
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='flex-start'
              spacing={1}>
              <CheckRounded color='success' fontSize='xl3' />
              <Typography variant='h3'>{`${correctAnswers} ${translations.gameEndModal.correctAnswers(
                correctAnswers,
              )}`}</Typography>
            </Stack>
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='flex-start'
              spacing={1}>
              <CloseRounded color='danger' fontSize='xl3' />
              <Typography variant='h3'>{`${incorrectAnswers} ${translations.gameEndModal.incorrectAnswers(
                incorrectAnswers,
              )}`}</Typography>
            </Stack>
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='center'
              pb={1}
              spacing={1}>
              <AlarmRounded color='primary' fontSize='xl3' />
              <Typography variant='h3'>
                {format(quizDuration * 1000)}
              </Typography>
            </Stack>
            <Button
              loading={isSaving}
              startDecorator={<LeaderboardRounded />}
              variant='soft'
              onClick={goToResults}>
              {translations.gameEndModal.button.results}
            </Button>
            <Button
              loading={isSaving}
              startDecorator={<HomeRounded />}
              variant='solid'
              onClick={goToHome}>
              {translations.gameEndModal.button.home}
            </Button>
          </Stack>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

GameEndModal.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  goToHome: PropTypes.func.isRequired,
  goToResults: PropTypes.func.isRequired,
  incorrectAnswers: PropTypes.number.isRequired,
  isSaving: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  quizDuration: PropTypes.number.isRequired,
};

GameEndModal.defaultProps = {
  isSaving: false,
};

export default GameEndModal;
