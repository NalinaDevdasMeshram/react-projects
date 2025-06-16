import React, { useState } from "react";

const ProductList = ({ Products, Categories }) => {
  const [selectCategory, setSelectCategory] = useState("");
  const handleRadioButton = (category) => {
    console.log(category);
    setSelectCategory(selectCategory === category ? "" : category);
  };

  const filteredProduct = !selectCategory
    ? Products.filter((p) => selectCategory === p.category)
    : Products;
  console.log(filteredProduct);
  return (
    <div>
      <label htmlFor="category">Filter by category:</label>

      {Categories.map((val) => (
        <label key={val}>
          <input
            type="radio"
            name="val"
            checked={selectCategory === val}
            onChange={() => handleRadioButton(val)}
          />
          {val}
        </label>
      ))}
      <div>
        {filteredProduct.map((product) => (
          <div key={product.id}>
            <p>name:{product.name}</p>
            <span>price:{product.price}</span>
            <p>category:{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
