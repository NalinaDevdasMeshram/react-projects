import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
const App = () => {
  const [products] = useState([
    { id: 1, name: "laptop", price: "Rs.50,123", category: "Electronics" },
    { id: 2, name: "caffe maker", price: "Rs.599", category: "Home" },
    { id: 3, name: "smart mobile", price: "Rs.599", category: "Electronics" },
    { id: 4, name: "sofe", price: "Rs.599", category: "Home" },
    { id: 5, name: "T-shirt", price: "Rs.1029", category: "Clothing" },
    { id: 6, name: "pant", price: "Rs.699", category: "Clothing" },
  ]);
  console.log(products);
  const categories = ["Electronics", "Home", "Clothing"];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product App</h2>
      <ProductList products={products} categories={categories} />
    </div>
  );
};

export default App;
