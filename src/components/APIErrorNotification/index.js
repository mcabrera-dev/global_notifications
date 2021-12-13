import React, { useEffect } from "react";
import useAPIError from "../../common/hooks/useAPIError";
import { Snackbar } from '@mui/material';

function APIErrorNotification() {
  const { error, removeError } = useAPIError();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(!!error)
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    removeError();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={error ? error.message : ""}

    />
  );
}

export default APIErrorNotification;
