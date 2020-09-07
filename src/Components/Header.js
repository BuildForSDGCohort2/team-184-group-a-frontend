import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'
import brand from './../Assets/brand.jpg';

 function Header() {
    return (
        <Navbar expand="lg" style={{backgroundColor:'#09C833'}}>
        <Navbar.Brand href="#home"> <img src={brand} alt=' Mazao Direct' style={{width:'100px', height:'50px',borderRadius:'3px'}}  /> Mazao Direct</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end"  style={{width:'100%'}} >
            <Nav.Link href="#home" style={{color:'#FFFBFB'}} >HOME</Nav.Link>
            <Nav.Link href="#link"style={{color:'#FFFBFB'}} >PRODUCTS</Nav.Link>
            <Nav.Link href="#home" style={{color:'#FFFBFB'}}>FARMERS</Nav.Link>
            <Nav.Link href="#link" style={{color:'#FFFBFB'}}>CONTACTS</Nav.Link>
            <Nav.Link href="#home" style={{color:'#FFFBFB'}}>REGISTER</Nav.Link>
            <Nav.Link href="#link" style={{color:'#FFFBFB'}}>LOGIN</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    )
}
export default Header