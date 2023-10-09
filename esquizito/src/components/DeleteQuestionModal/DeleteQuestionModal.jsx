import React from 'react';
import {
  Button,
  ButtonGroup,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
} from '@mui/joy';
import * as PropTypes from 'prop-types';
import { translations } from 'util/Properties';
import { DeleteRounded } from '@mui/icons-material';

function DeleteQuestionModal({ onClose, onDelete, open }) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <DialogTitle sx={{ textAlign: 'center' }}>
          {translations.manageQuestions.deleteModal.header}
        </DialogTitle>
        <DialogContent>
          <ButtonGroup buttonFlex={1} sx={{ mt: '12px' }}>
            <Button variant='soft' onClick={onClose}>
              {translations.manageQuestions.deleteModal.button.cancel}
            </Button>
            <Button
              color='danger'
              startDecorator={<DeleteRounded />}
              variant='solid'
              onClick={() => {
                onDelete();
                onClose();
              }}>
              {translations.manageQuestions.deleteModal.button.delete}
            </Button>
          </ButtonGroup>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

DeleteQuestionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default DeleteQuestionModal;
