import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";

export default function SearchProduct(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const title = "Sản phẩm";
  const keyword = props.location.search.substr(3);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
    axios
      .get(`http://127.0.0.1:8000/api/search/${keyword}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [keyword]);

  return (
    <CatProductBlock
      categories={categories}
      products={products}
      title={title}
    />
  );
}
