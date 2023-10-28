import { ArrowBackRounded, HomeRounded } from '@mui/icons-material';
import {
  Button,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';
import { useNavigate } from 'react-router-dom';
import correct from 'assets/check.svg';
import incorrect from 'assets/cancel.svg';

function GameEndModal({
  clearGameData,
  correctAnswers,
  incorrectAnswers,
  open,
}) {
  const navigate = useNavigate();
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
              <Typography variant='h3'>{`${correctAnswers} ${translations.gameEndModal.correctAnswers}`}</Typography>
            </Stack>
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='center'
              spacing={1}>
              <img alt='correct' src={incorrect} />
              <Typography variant='h3'>{`${incorrectAnswers} ${translations.gameEndModal.incorrectAnswers}`}</Typography>
            </Stack>
            <Button
              startDecorator={<HomeRounded />}
              variant='solid'
              onClick={() => {
                clearGameData();
                navigate(urlPaths.mainMenu);
              }}>
              {translations.gameEndModal.button.home}
            </Button>
          </Stack>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

GameEndModal.propTypes = {
  clearGameData: PropTypes.func.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  incorrectAnswers: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
};

export default GameEndModal;
