import { HomeRounded, LeaderboardRounded } from '@mui/icons-material';
import {
  Button,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from '@mui/joy';
import incorrect from 'assets/cancel.svg';
import correct from 'assets/check.svg';
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
}) {
  return (
    <Modal open={open}>
      <ModalDialog sx={{ alignItems: 'center', textAlign: 'center' }}>
        <DialogTitle>{translations.gameEndModal.header}</DialogTitle>
        <DialogContent>
          <Stack alignItems='center' justifyContent='center' mt={1} spacing={1}>
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='center'
              spacing={1}>
              <img alt='correct' src={correct} />
              <Typography variant='h3'>{`${correctAnswers} ${translations.gameEndModal.correctAnswers(
                correctAnswers,
              )}`}</Typography>
            </Stack>
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='center'
              spacing={1}>
              <img alt='correct' src={incorrect} />
              <Typography variant='h3'>{`${incorrectAnswers} ${translations.gameEndModal.incorrectAnswers(
                incorrectAnswers,
              )}`}</Typography>
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
};

GameEndModal.defaultProps = {
  isSaving: false,
};

export default GameEndModal;
