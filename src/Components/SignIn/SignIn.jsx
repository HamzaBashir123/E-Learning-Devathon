import { Link } from "react-router-dom"
import "./signIn.css"


import React, { useRef } from 'react'

import { getAuth, signInWithEmailAndPassword } from "../firebase.Config";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

  

  



const Login = () => {
  const [showmsg , setshowmsg] = useState('')
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate()

  const LoginHanlder = ()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
    .then((userCredential) => {
      const user = userCredential.user;
      if(user){
        alert('You are Login Successfully')
        setTimeout(()=>navigate('/MainPage'),1000)
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
    }
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
     <img className="mainImg" src="/assets/main1.png" alt="" />
          
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" ref={email} className="loginInput" />
            <input placeholder="Password" ref={password} className="loginInput" />
            <button className="loginButton" onClick={LoginHanlder}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link  to="/signUp">
              <button className="loginRegisterButton">
              Create a New Account
            </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


