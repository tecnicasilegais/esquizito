import { DeleteRounded } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
} from '@mui/joy';
import * as PropTypes from 'prop-types';
import React from 'react';
import { translations } from 'util/Properties';

function ConfirmationModal({
  negative,
  onClose,
  onConfirm,
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
              {translations.confirmationModal.button.cancel}
            </Button>
            <Button
              color={negative ? 'danger' : 'primary'}
              startDecorator={primaryIcon || <DeleteRounded />}
              variant='solid'
              onClick={() => {
                onConfirm();
                onClose();
              }}>
              {primaryText || translations.confirmationModal.button.delete}
            </Button>
          </ButtonGroup>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  negative: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  primaryIcon: PropTypes.element,
  primaryText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ConfirmationModal.defaultProps = {
  negative: true,
  primaryIcon: null,
  primaryText: null,
};

export default ConfirmationModal;
