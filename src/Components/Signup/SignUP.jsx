import React from 'react'
import { Link } from "react-router-dom"
import "./signUp.css"
import {  useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth , createUserWithEmailAndPassword , setDoc , doc ,db} from '../firebase.Config.js'

function SignUp() {
    const [showmsg , setshowmsg] = useState('')
    const navigate = useNavigate()
      const username = useRef();
      const email = useRef();
      const password = useRef(); 
      const confirmPassword = useRef('');
      if(confirmPassword.current?.value !== password.current?.value){
        password.current.setCustomValidity('Password Not Match!')
      }
      const SignUpHanlder = async () =>{
  
        const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value,username.current?.value , confirmPassword.current?.value)
        .then((userCredential) => { 
          const user = userCredential.user;
          if(user){
            adduserhanlder(user?.uid)
            setshowmsg('You are Signup Successfully')
            setTimeout(()=>navigate('/login'),1000)
          }
      
    })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
      }
     async function adduserhanlder(uid){
        try {
           await setDoc(doc(db, "user" ,uid),{
             username : username.current.value,
             email : email.current.value,
             uid
            })
  
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
      <img className="mainImg" src="/assets/main1.png" alt="" />
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Username" ref={username} className="loginInput" />
          <input placeholder="Email" ref={email} className="loginInput" />
          <input placeholder="Password" ref={password} className="loginInput" />
          <input placeholder="Password Again"  ref={confirmPassword} className="loginInput" />
          <button className="loginButton" onClick={SignUpHanlder}>Sign Up</button>
          <Link to="/login">
          <button className="loginRegisterButton">
            Log into Account
          </button>
            </Link>

          
        </div>
      </div>
    </div>
  </div>
  )
}

export default  SignUp






