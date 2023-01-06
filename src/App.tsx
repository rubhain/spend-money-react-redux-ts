import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Receipt from "./components/Receipt/Receipt";

function App() {
  return (
    <div className="App">
      <h1>Spend Money</h1>
      <Header />
      <ProductsList />
      <Receipt />
    </div>
  );
}

export default App;
