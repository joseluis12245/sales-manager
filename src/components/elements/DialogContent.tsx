import React, {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentProps } from './../../interfaces/elements/DialogContent';
import { addUserToList } from './../../features/userManagement/user-management-slice';
import { useAppSelector, useAppDispatch } from './../../app/hooks';
import utils from '../../utils/utils';

const DialogContentComponent: React.FC<DialogContentProps> = (props: DialogContentProps) => {
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [remainingDays, setRemainingDays] = useState(0);
    const userInformation = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch();
    
      const handleChange = () => {
        dispatch(addUserToList({
            id: id,
            firstName: firstName,
            lastName: lastName,
            admissionDay: admissionDate,
            remainingDays: 0
        }))
        props.handleClose();
      };

    useEffect(()=>{
        setAdmissionDate(utils.formatDate(new Date()));
    },[])

    useEffect(()=> {
      console.log(admissionDate)
    }, [admissionDate])
    
    useEffect(()=>{
        setRemainingDays(utils.calculateRemaininDays())
    },[userInformation.userList])

    return( 
          <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle><strong>Please add the user information</strong></DialogTitle>
            <DialogContent style={{padding: '50px'}}>
              <DialogContentText>
                Make sure all fields are correct
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="ID"
                type="number"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                fullWidth
                variant="standard"
                onChange={(e)=>{setId(Number(e.target.value))}}
              />
              <TextField
                margin="dense"
                id="name"
                label="First Name"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e)=>{setFirstName(e.target.value)}}
              />
              <TextField
                margin="dense"
                id="name"
                label="Last Name"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e)=>{setLastName(e.target.value)}}
              />
              &nbsp;
                 <TextField
                 id="date"
                 label="Date of admission"
                 type="date"
                 defaultValue={admissionDate}
                 fullWidth
                 InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e)=>{setAdmissionDate(utils.formatDate(new Date(e.target.value)))}}
      />    
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose}>Cancel</Button>
              <Button onClick={handleChange}>Add user</Button>
            </DialogActions>
          </Dialog>
    )
    }

export default DialogContentComponent;