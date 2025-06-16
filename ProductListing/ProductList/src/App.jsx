import React, { useState } from "react";
import ProductList from "./ProductList";

// const Products = [
//   { id: 1, name: "laptop", price: "Rs.5099", category: "Electronics" },
//   { id: 2, name: "Pant", price: "Rs.5000", category: "Clothings" },
//   { id: 3, name: "sofa", price: "Rs.12000", category: "Home" },
//   { id: 4, name: "chairs", price: "Rs.1000", category: "Home" },
//   { id: 6, name: "T-shirst", price: "Rs.599", category: "Clothings" },
//   { id: 7, name: "smartWatch", price: "Rs.5000", category: "Electronics" },
// ];
const App = () => {
  const [Products] = useState([
    { id: 1, name: "laptop", price: "Rs.5099", category: "Electronics" },
    { id: 2, name: "Pant", price: "Rs.5000", category: "Clothings" },
    { id: 3, name: "sofa", price: "Rs.12000", category: "Home" },
    { id: 4, name: "chairs", price: "Rs.1000", category: "Home" },
    { id: 6, name: "T-shirst", price: "Rs.599", category: "Clothings" },
    { id: 7, name: "smartWatch", price: "Rs.5000", category: "Electronics" },
  ]);
  const Categories = ["Electronics", "Home", "Clothings"];
  return (
    <div>
      Product List App
      <ProductList Products={Products} Categories={Categories} />
    </div>
  );
};

export default App;
