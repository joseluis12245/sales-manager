import React, {useEffect, useState, useCallback} from 'react';
import './../../styles/App.css';
import {
  useNavigate
} from "react-router-dom";
import { TextField, Button, Box, CircularProgress, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import  BarStatus  from '../elements/BarStatus';
import { setInformationUser, uploadUserInformation, setInitialState } from '../../features/userManagement/user-management-slice';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const userInformation = useAppSelector((state) => state.user)
  const [user, setUser] = useState('');
  const [password, setPassowrd] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(setInitialState())
  },[])

  const RegisterData = () => {
    if(password !== checkPassword || user === ''){
      setErrorPassword(true);
    }else{
      setErrorPassword(false);
      dispatch(setInformationUser({
        id: '',
        user: user,
        password: password
      }))
      dispatch(uploadUserInformation());
      navigate('/');
    }
  }

  return (
    <div className="App">
    <header>
     <BarStatus open={userInformation.user_created}/>
   </header>
   <div className="App-body">
      <div className='App-Div-Login'>
    <Box 
    sx={{
      display: 'static',
      flexDirection: 'column'
    }}>
      {userInformation.loading_record ? 
      <CircularProgress /> : 
      <>
      <p><strong>Enter your information!</strong></p>
      <div className='App-Format'>
        <TextField fullWidth id="outlined-basic" value={user} onChange={(e)=>{setUser(e.target.value)}} label="User" variant="outlined" /></div>
      <div className='App-Format'>
        <TextField fullWidth id="outlined-basic" value={password} onChange={(e)=>{setPassowrd(e.target.value)}} label="Password" type="password" variant="outlined" /></div>
      <div className='App-Format'>
        <TextField fullWidth error={errorPassword} value={checkPassword} id="outlined-basic" onChange={(e)=>{setCheckPassword(e.target.value)}} label="Re-entry Password" type="password" variant="outlined" helperText={errorPassword && "Incorrect password."}/></div>
      <div className='App-Format'><Button type="submit" variant="contained"  onClick={RegisterData}>Register</Button></div>
      {(!userInformation.user_created && userInformation.sentToApi) &&
      <Alert severity="error">There was an error creating the user</Alert>
      }
      </>
      }
    </Box>
    </div>
      </div>
      </div>
  );
}

export default Register;