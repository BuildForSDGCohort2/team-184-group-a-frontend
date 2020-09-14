import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
//import ProductForm from "./Components/common/ProductForm";

function App() {
  return (
    <div className="App">
      <Header />
      {/*  <ProductForm /> */}
      <section>
        <Landing />
      </section>
    </div>
  );
}

export default App;
