import React, { useState } from "react";

const ProductsLists = ({ product, Categories }) => {
  const [selectCategory, setSelectCategory] = useState("");
  const handleRadioButton = (category) => {
    console.log(category);
    setSelectCategory(selectCategory === category ? "" : category);
  };
  const filterProduct = selectCategory
    ? product.filter((p) => selectCategory === p.category)
    : product;
  console.log(filterProduct);
  return (
    <div>
      <label htmlFor="filter">Filter by Category:</label>
      {Categories.map((val) => (
        <div key={val}>
          <input
            type="radio"
            value={val}
            checked={selectCategory === val}
            onChange={() => handleRadioButton(val)}
          />
          {val}
        </div>
      ))}
      <table border="1px" style={{ margin: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Clothing</th>
          </tr>
        </thead>
        <tbody>
          {filterProduct.map((products) => (
            <tr key={products.id}>
              <td>{products.name}</td>
              <td>{products.price}</td>
              <td>{products.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsLists;
