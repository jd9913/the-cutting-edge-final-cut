import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../../assets/salon.jpg";


function Landing() {
  return (
    <div>
      <Card className='landingCard'>
        <Card.Img
        variant="top"
        src={landingImage} className='landingImage' alt='salon' 
        />
        <Card.ImgOverlay className='landingOverlay'>
          <Card.Title ><h1 className='landingTitle text-primary'>Welcome to the Cutting Edge</h1>
          <h2 className='text-dark '><em>Your new style is a click away!</em></h2>
          <Link to='/signup'>
          <Button className='btn btn-outline-warning btn-lg'>Sign Up</Button>
          </Link>
          <Link to='/login'>
          <Button className='btn btn-outline-warning btn-lg'>Login</Button>
          </Link>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      
     
  

    </div>
  );
}

export default Landing;