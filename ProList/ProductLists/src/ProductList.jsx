import React from "react";
import { useState } from "react";

const ProductList = ({ products, categories }) => {
  const [selectCategory, setSelectCategory] = useState("");
  const handleRadioButton = (category) => {
    console.log(category);
    setSelectCategory(selectCategory === category ? "" : category);
  };
  const filteredProduct = selectCategory
    ? products.filter((p) => selectCategory === p.category)
    : products;
  console.log(filteredProduct);
  return (
    <div>
      <label htmlFor="category">
        {" "}
        filtered by product :
        {categories.map((val) => (
          <div key={val}>
            <input
              type="radio"
              checked={selectCategory === val}
              onChange={() => handleRadioButton(val)}
            />

            {val}
          </div>
        ))}
        <table border="1" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProduct.map((products) => (
              <tr key={products.id}>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>{products.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </label>
    </div>
  );
};

export default ProductList;
