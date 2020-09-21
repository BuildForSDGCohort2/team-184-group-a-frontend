import React, { Component } from "react"
import {Image, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "./Header";

class farmers extends Component {
        constructor(){
         super()
            this.state={
                farmer:[]
            }
        }
                componentDidMount(){
                    axios.get("https://mazao-app.herokuapp.com/viewsModel/farmers/",) 
                    .then(res => {
                        this.setState({ farmer:res.data});
                        //this.setState({farmer:res.file})
                    })
                    .catch(err => {
                        console.error(err); 
                    })
                }

    render() {
        return (
            <>
            <Header/>
            <br></br>
               <div className="span-s" id ="farm"> <h2>Our Farmers</h2></div>
                <hr></hr>
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>
                <th>Phone</th>
                <th>E_mail</th>
              </tr>
            </thead>

            { this.state.farmer.map(farmer => 
            
            <tbody  key={farmer.id} > 
                <tr>
                    <td>{farmer.id}</td>
                    <td><Image src={farmer.photo} style={{width:"100px", height:"100px",borderRadius:"3px"}} /></td>
                    <td>{farmer.firstname} {farmer.lastname} </td>
                    <td>{farmer.username}</td>
                    <td>{farmer.location}</td>
                    <td>{farmer.phone}</td>
                    <td>{farmer.email}</td>
                </tr>     
         </tbody>
            )   
            }
  </Table>
  </> 
        )
    }
}
export default farmers;



