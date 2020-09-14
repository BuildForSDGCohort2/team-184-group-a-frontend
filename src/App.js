import React, { Component } from 'react'
import  "./App.css";
import Header from "./Components/Header";
import Notfound from "./Components/Notfound";
import Register from "./Components/Register";
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  Redirect} from 'react-router-dom'
import Landing from "./Components/Landing";
//import Register from "./Components/Register";


 class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
      <Route exact path ="/" Components={Header}/>
        <Route  path ="/Register" Components={Register}/>
        <Route path = "/404" Components={Notfound}/>
        <Redirect to= "/404"/>
      </Switch>
    </Router>
    )
  }
}


export default App;
