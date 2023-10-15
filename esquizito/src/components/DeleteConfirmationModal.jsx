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

function DeleteConfirmationModal({
  onClose,
  onDelete,
  open,
  primaryIcon,
  primaryText,
  title,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
        <DialogContent>
          <ButtonGroup buttonFlex={1} sx={{ mt: '12px' }}>
            <Button variant='soft' onClick={onClose}>
              {translations.deleteModal.button.cancel}
            </Button>
            <Button
              color='danger'
              startDecorator={primaryIcon || <DeleteRounded />}
              variant='solid'
              onClick={() => {
                onDelete();
                onClose();
              }}>
              {primaryText || translations.deleteModal.button.delete}
            </Button>
          </ButtonGroup>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

DeleteConfirmationModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  primaryIcon: PropTypes.element,
  primaryText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

DeleteConfirmationModal.defaultProps = {
  primaryIcon: null,
  primaryText: null,
};

export default DeleteConfirmationModal;
