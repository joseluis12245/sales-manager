import { Alert, Snackbar,Stack  } from '@mui/material';
import React, {useState } from 'react';

type BarStatusProps = {
    open: boolean
}

const BarStatus: React.FC<BarStatusProps> = (props) => {
    const [open, setOpen] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    const handleClick = () => {
        setOpen(true);
      };

    return( 
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={props.open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           User Successfully Created!
          </Alert>
        </Snackbar>
      </Stack>
    )
}

export default BarStatus;
