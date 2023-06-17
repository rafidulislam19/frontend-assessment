import Product from "../Product/Product";
import "./Products.css";
import React, { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=0&limit=30&type=Q_COMMERCE"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div>
      <h1 className="header">Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
