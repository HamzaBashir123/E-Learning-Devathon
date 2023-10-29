import { Link } from "react-router-dom"
import "./mainPage.css"
import React from 'react'
import data from './fakeData'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

console.log(data)
function BasicExample() {
  return (
    <div className="courseContainer">

    {data.map((item , index)=>(
          <Card className="singleCard" style={{ width: '18rem' }}>
          <Card.Img className="cardImg" variant="top" src={item.Image} />
          <Card.Body>
            <Card.Title className="title">{item.course}</Card.Title>
            <Card.Text className="details">
              {item.details}
            </Card.Text>
            <Button className="cardBTn" variant="primary">Click</Button>
          </Card.Body>
        </Card>
    )

    )}
    
    
    </div>
  );
}


function MainPage() {
  return (
    <>
    <div className="upperBtn">
    <Link to="" >
    <button className="btnLogin">Courses</button>
    </Link>
    <Link to="" >
    <button className="btnSignUP">Profile</button>
    </Link>
    
    

    </div>
    <h1 className='mainHeading'>Welcome to <span>e-learning </span> explore us</h1>
     <img className="mainImg" src="/assets/main.png" alt="" />
     <BasicExample/>
   </>


  )
}

export default MainPage