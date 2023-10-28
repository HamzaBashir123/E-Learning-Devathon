import "./dashboard.css"
import React from 'react'

function Dashboard() {
  return (
    <>
    <div className="upperBtn">
    <button className="btnLogin">Log In</button>
    <button className="btnSignUP">SignUp</button>

    </div>
    <h1 className='mainHeading'>Welcome to <span>e-learning </span> explore us</h1>
     <img className="mainImg" src="/assets/main.png" alt="" />
    </>

  )
}

export default Dashboard