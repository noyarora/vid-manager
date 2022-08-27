import React, { useEffect, useState } from 'react';
import { CANCEL_BUTTON_TEXT, OK_BUTTON_TEXT } from '../../common/constants';
import { DialogProps } from '../../common/interfaces';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '../../common/mui';

export const ConfirmationDialog: React.FC<DialogProps> = ({ isOpen, title, content, onConfirm, onCancel }) => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onConfirm}>
            {OK_BUTTON_TEXT}
          </Button>
          <Button onClick={onCancel} autoFocus>
            {CANCEL_BUTTON_TEXT}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
