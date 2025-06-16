import React, { useState } from "react";
import "./App.css";
import ProductsLists from "./ProductsLists";
const App = () => {
  const [product] = useState([
    { id: 1, name: "laptop", price: 5069, category: "Electronics" },
    { id: 2, name: "smatwatch", price: 506, category: "Electronics" },
    { id: 3, name: "shirt", price: 589, category: "Clothing" },
    { id: 4, name: "coffe marker", price: 69, category: "Home" },
  ]);
  const Categories = ["Electronics", "Home", "Clothing"];
  return (
    <div>
      <h4>Product List App</h4>
      <ProductsLists product={product} Categories={Categories} />
    </div>
  );
};

export default App;
