import React from "react";
import Header from "./Components/Header";
import ProductsForm from "./Components/common/ProductsForm";
import { Footer } from "./Components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductsForm />
      <Footer />
    </div>
  );
}

export default App;
