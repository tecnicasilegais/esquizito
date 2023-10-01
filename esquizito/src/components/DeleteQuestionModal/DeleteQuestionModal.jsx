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

function DeleteQuestionModal({ onClose, onDelete, open }) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <DialogTitle>Tem certeza que deseja deletar essa pergunta?</DialogTitle>
        <DialogContent>
          <ButtonGroup buttonFlex={1} sx={{ mt: '12px' }}>
            <Button variant='soft' onClick={onClose}>
              Não
            </Button>
            <Button color='danger' variant='solid' onClick={onDelete}>
              Sim
            </Button>
          </ButtonGroup>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

DeleteQuestionModal.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

DeleteQuestionModal.defaultProps = {
  onClose: null,
};
export default DeleteQuestionModal;
