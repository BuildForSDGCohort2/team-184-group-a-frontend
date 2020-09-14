import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from "react-bootstrap";
import brand from  "./../Assets/brand.jpg";

 class Header extends Component {
  render() {
    return (
          <Navbar expand="lg"  style={{backgroundColor:"#09C833"}}>
          <Navbar.Brand href="#home"> <img src={brand} alt= "Mazao Direct" style={{width:"100px", height:"50px",borderRadius:"3px"}}  /> Mazao Direct</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end"  style={{width:"100%"}} >
              <Nav.Link href="/Landing" style={{color:"#FFFBFB"}} >Home</Nav.Link>
              <Nav.Link href="#link"style={{color:"#FFFBFB"}} >Products</Nav.Link>
              <Nav.Link href="#Farmers" style={{color:"#FFFBFB"}}>Our Farmers</Nav.Link>
              <Nav.Link style={{color:"#FFFBFB"}}>Contact us</Nav.Link>
              <Nav.Link href="/Register"  style={{color:"#FFFBFB"}}>Register</Nav.Link>
              <Nav.Link href="#link" style={{color:"#FFFBFB"}}>Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
