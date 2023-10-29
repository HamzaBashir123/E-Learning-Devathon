import { Link } from "react-router-dom"
import "./dashboard.css"
import React from 'react'

function Dashboard() {
  return (
    <>
    <div className="upperBtn">
    <Link to="/login" >
    <button className="btnLogin">Log In</button>
    </Link>
    <Link to="/signUp" >
    <button className="btnSignUP">SignUp</button>
    </Link>
    
    

    </div>
    <h1 className='mainHeading'>Welcome to <span>e-learning </span> explore us</h1>
     <img className="mainImg" src="/assets/main.png" alt="" />
    </>

  )
}

export default Dashboard