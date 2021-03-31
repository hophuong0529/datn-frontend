import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";

export default function AllProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const title = "Sản phẩm";
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data.data);
    });
  }, []);

  return (
    <CatProductBlock
      categories={categories}
      products={products}
      title={title}
    />
  );
}
