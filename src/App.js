import React from "react";
import  "./App.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Register from "./Components/Register";


function App() {
  return (
    <div className="App">
   < Header/>
   <section><Landing/></section>
   <Register/>
    </div>
  );
}

export default App;
