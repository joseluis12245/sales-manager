import React, {useState, useEffect} from 'react';
import './../../styles/App.css';
import { TextField, Button } from '@mui/material';
import  BarStatus  from '../elements/BarStatus';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Link } from "react-router-dom";
import { checkUserInformation } from '../../features/userManagement/user-management-slice';
import { useAuth } from '../../auth/authContext'
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const userInformation = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();
  const auth = useAuth();

  useEffect(()=>{
    WelcomeMessage();
  },[])

  const WelcomeMessage = () =>{
    const hour = new Date();
    if(hour.getHours() < 12){
      setWelcomeMessage("Morning");
    }else if(hour.getHours() >= 12 && hour.getHours() < 18){
      setWelcomeMessage("Afternoon");
    }else{
      setWelcomeMessage("Night")
    }
  }

  const Validatedata = () =>{
     dispatch(checkUserInformation({
      id: '',
      user: userName,
      password: password
    }))
  }

  useEffect(()=>{
    if(userInformation.userIsValid){
      auth.signin(userInformation.userManagement.user, () => {
         navigate('/', {replace:true});
      });
    }
  },[userInformation.userIsValid])
  
  return (
    <div className="App">
       <header>
        <BarStatus open={userInformation.user_created}/>
      </header>
      <div className="App-body">
      <div className='App-Div-Login'>
         <div className='App-Format'><strong>Welcome Back, Good {welcomeMessage}!</strong></div>
         <div className='App-Format'><TextField fullWidth id="outlined-basic" label="User" variant="outlined" value={userName} onChange={(e)=> {setUserName(e.target.value)}} /></div>
         <div className='App-Format'><TextField fullWidth id="outlined-basic" label="Password" variant="outlined" value={password} type="password" onChange={(e)=> {setPassword(e.target.value)}} /></div>
         <div className='parent'>
           <div className='child inline-block-child'><Button type="submit" variant="contained" onClick={() => {Validatedata()}}>Login</Button></div>
        </div>
        <div className='parent'>
      <div className='child inline-block-child New-User'><p>Are you a new user? 
        <Link to="/register" className=''> Click Here!</Link></p></div>
        { /* <Button variant="text" onClick={() => <Navigate to="/register" />}>Click Here!</Button> */ }
      </div>
      </div>
      </div>
      </div>
  );
}
export default Login;