import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {farmer} from "../axiosConfig";
import Header from "./Header";
import {Form, Container,Row, Col,InputGroup, Button  } from "react-bootstrap";

 class Register extends Component {
     constructor(){
         super();
         this.state = {
            firstname:"",
            lastname:"",
            username:"",
            location:"",
            county:"",
            phone:"",
            email:"",
            photo: null
         };
         this.HandleChange=this.HandleChange.bind(this);
         this.HandleFileChange=this.HandleFileChange.bind(this);
        }

        HandleChange = (e) => {
            this.setState({[e.target.name]:e.target.value});
        }
        HandleFileChange = (e) => {
            this.setState({photo:e.target.files[0],loaded:0,
            });
        }
        onSubmit= (e) => {
            e.preventDefault();
            farmer(
                this.state.firstname,
                this.state.lastname,
                this.state.username,
                this.state.location,
                this.state.county,
                this.state.phone,
                this.state.email,
                this.state.photo
            );
        }
    render() {
        const {firstname, lastname, username,location ,county, phone, email} = this.state;
        return (
            <div>
            <Header/>
            <br></br>
            <Container className="form-reg" >
            <div className="span-s"><h1><em>Register</em> here</h1></div>
                <Row>
                 <Col xs={12} md={12}>
                    <Form  onSubmit={this.onSubmit} >
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label style={{ float:"left"}}>First name:</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            name="firstname"
                                            id="nameid"
                                            value={firstname}
                                            onChange={this.HandleChange}
                                            />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                    <Form.Label style={{ float:"left"}}>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            name="lastname"
                                            id="lastnameid"
                                            value={lastname}
                                            onChange={this.HandleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label style={{ float:"left"}}>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                        <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                                name="username"
                                                id="usernameid"
                                                value={username}
                                                onChange={this.HandleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row> 
                            <Form.Group as={Col} md="6">
                                <Form.Label style={{ float:"left"}}>Location</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Locale" 
                                            required
                                            name="location"
                                            id="locationid"
                                            value={location}
                                            onChange={this.HandleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                    Please provide your farming location
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label style={{ float:"left"}}>County</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="County" 
                                            required
                                            name="county"
                                            id="countyid"
                                            value={county}
                                            onChange={this.HandleChange}
                                            />
                                        <Form.Control.Feedback type="invalid">
                                         Please provide a valid state.
                                        </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label style={{ float:"left"}}>Phone</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Phone" 
                                            required
                                            name="phone"
                                            id="phoneid"
                                            value={phone}
                                            onChange={this.HandleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid phone number.
                                        </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label style={{ float:"left"}}>Email</Form.Label>
                                    <Form.Control 
                                            type="email" 
                                            placeholder="Email" 
                                            required
                                            name="email"
                                            id="emailid"
                                            value={email}
                                            onChange={this.HandleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email address.
                                        </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="3">
                                <Form.Label style={{ float:"left"}} >Upload photo</Form.Label>
                                        <Form.Control 
                                            type="file" 
                                            placeholder="Email" 
                                            name="photo"
                                            id="photoid"
                                            onChange={this.HandleFileChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please upload your photo.
                                        </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Button type="submit">Submit form</Button>
                        </Form.Row>
                        <div className="span-s">
                            <span>Register here | Already has an Account <a href="#sign in">Sign in</a></span>
                        </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Register;
