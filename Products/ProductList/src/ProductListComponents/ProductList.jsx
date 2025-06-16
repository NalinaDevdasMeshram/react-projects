import React, { useState } from "react";

const Product = [
  { id: 1, name: "laptop", price: "50,000", category: "Electronics" },
  { id: 2, name: "sofa", price: "12000", category: "Home" },
  { id: 3, name: "vaccum cleaner", price: "599", category: "Home" },
  { id: 4, name: "smartwatch", price: "5000", category: "Electronics" },
  { id: 5, name: "chairs", price: "9999", category: "Home" },
  { id: 6, name: "mobile", price: "10,000", category: "Electronics" },
  { id: 7, name: "t-shirt", price: "599", category: "Clothings" },
  { id: 8, name: "pant", price: "1000", category: "Clothings" },
  { id: 9, name: "shirt", price: "2555", category: "Clothings" },
];
const categories = ["Home", "Electronics", "Clothings"];
const ProductList = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [pricesorder, setPricesOrder] = useState("");
  const handleCategories = (category) => {
    console.log(category);
    if (selectCategory === category) {
      setSelectCategory("");
    } else {
      setSelectCategory(category);
    }
  };

  const parsePrice = (price) => {
    return parseInt(price.replace(/[0-9]/, ""));
  };

  const FilteredProduct =
    selectCategory.length === 0
      ? Product
      : Product.filter((p) => selectCategory === p.category);
  console.log(FilteredProduct);
  const sortedProducts = [...FilteredProduct].sort((a, b) => {
    const priceA = parsePrice(a.price);
    const priceB = parsePrice(b.price);

    if (pricesorder === "asc") return priceA - priceB;
    if (pricesorder === "desc") return priceB - priceA;
    return 0;
  });
  // const FilteredProduct =
  //   selectCategory.length === 0
  //     ? Product
  //     : Product.filter((p) => selectCategory === p.category);
  // console.log(FilteredProduct);
  return (
    <div>
      <div>
        <label htmlFor="product">Filtered by Category:</label>
        {categories.map((val) => (
          <div key={val}>
            <input
              key={val}
              type="radio"
              value={val}
              checked={selectCategory.includes(val)}
              onChange={() => handleCategories(val)}
            />
            {val}
          </div>
        ))}
      </div>
      <div>
        {FilteredProduct.map((product) => (
          <div key={product.id}>
            <h5>name:{product.name}</h5>
            <p>price:{product.price}</p>
            <span>category:{product.category}</span>
          </div>
        ))}
      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <label htmlFor="price">filtered by price:</label>
        <select
          onChange={(e) => setPricesOrder(e.target.value)}
          value={pricesorder}
        >
          <option>Default</option>
          <option value="asc">Low to High</option>
          <option value="dec">High to low</option>
        </select>
      </div>
    </div>
  );
};
export default ProductList;
