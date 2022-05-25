import React, { useState } from 'react'
import '../css/background.css';
import '../css/auth.css'
import { Button } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store'
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  })
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
     }) )
    
  }
   const sendRequest = async (type="login") => {
     const res = await axios
       .post(`http://localhost:2000/api/user/${type}`, {
      name:inputs.name,
      email: inputs.email,
      password:inputs.password,
    }).catch(err => console.log(err))
     const data = await res.data;
     return data;
 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (signup === true) {
      sendRequest("signup").then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()));
       navigate('/blogs')
    }
    else {
      sendRequest().then(() => dispatch(authActions.login())).then((data) => localStorage.setItem("userId", data.user._id));
       navigate('/blogs')
    }
}
  return (
  <React.Fragment>
    
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
          <li></li>
           <li></li>
            </ul>
      </div >
       <div id="container">
         <header>{signup?"SIGNUP": "LOGIN"}</header>
         <form onSubmit={handleSubmit}>
            <fieldset>
               <br/>
            {signup && <input type="text" name="name" id="name" placeholder="Username" onChange={handleChange}   value={inputs.name}  required autoFocus />}
               <br/><br/><br/>
               <input onChange={handleChange}   value={inputs.email} type="email" name="email" id="email" placeholder="E-mail" required />
               <br/><br/><br/>
               <input value={inputs.password} onChange={handleChange}  type="password" name="password" id="password" placeholder="Password" required />
            
            
               <br/> <br/> <br/>
               <label htmlFor="submit"></label>
            <input type="submit" name="submit" id="submit"  />
            <Button onClick={ ()=> setSignup(!signup)}sx={{marginTop:'21px',color:'white'}}>Change to {signup?"Login": "SignUp"}</Button>
          </fieldset>
          
         </form>
      </div>
      </React.Fragment>
  
  )
}

export default Auth;