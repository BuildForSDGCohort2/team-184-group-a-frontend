import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Button, Image, Jumbotron,Col, Carousel } from "react-bootstrap";
import Dairyinfield from  "./../Assets/Dairyinfield.jpg";
import inarticle from  "./../Assets/inarticle.jpg";
import carrots from  "./../Assets/carrots.jpg";
import tomato3 from  "./../Assets/tomato3.jpg";
import  "../App.css";


function Landing() {
    return (
        <>
        <Container fluid  className='caroimg'>
            <Row className='rw'>
                <Col>
            <Carousel >
                <Carousel.Item className='item'>
                    <Image
                    rounded
                    className="d-block w-100"
                    src={Dairyinfield}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Mazao products fresh from farm</h3>
                    <p>Be the first to get</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item'>
                    <Image
                    rounded
                    className="d-block w-100"
                    src={inarticle}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Mazao products fresh from farm</h3>
                    <p>Be the first to get</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item'>
                    <Image
                    rounded
                    className="d-block w-100"
                    src={carrots}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Mazao products fresh from farm</h3>
                    <p>Be the first to get</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item'>
                    <Image
                    rounded
                    className="d-block w-100"
                    src={tomato3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Mazao products fresh from farm</h3>
                    <p>Be the first to get</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Col>                
            </Row>
    </Container>
      <Jumbotron>
            <h1> <u>ABOUT</u> US</h1>
            <p>
           
                Mazao direct is an online platform that assist farmers to reach and sell their agricultural products directely to end
                consumers
            </p> 
            <p>
                It allow farmers to do direct markerting of their produces to consumer and retailers withoiut middleman or intermediary.
                In addition consumers can buy fresh products directely from the farmer
            </p>
            
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
</Jumbotron>
</>
    );
}
export default Landing;
