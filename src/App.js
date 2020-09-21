import React, { Component } from "react";
import  "./App.css";
import Landing from "./component/Landing";
import ProductForm from "./component/ProductForm";
import Register from "./component/Register";
import Farmers from "./component/Farmers";
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  Redirect} from "react-router-dom";

 class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path ="/" component={Landing}/>
            <Route exact path ="/Farmers" component={Farmers}/>
            <Route exact path ="/Register" component={Register}/>
            <Route exact path ="/ProductForm" component={ProductForm}/>
            <Route path = "/Home" component={Landing}/>
            <Redirect to= "/Home"/>
        </Switch>
      </Router>
    );
  }
}
export default App;
