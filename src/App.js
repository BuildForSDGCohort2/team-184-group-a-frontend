import React, { Component } from "react";
import  "./App.css";
import Landing from "./component/Landing";
//import Notfound from "./component/Notfound";
import Register from "./component/Register";
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
            <Route exact path ="/Register" component={Register}/>
            <Route path = "/Home" component={Landing}/>
            <Redirect to= "/Home"/>
        </Switch>
      </Router>
    );
  }
}
export default App;
