import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";
import { useParams } from "react-router";

export default function CatProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const slug = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/category/${slug.id}`)
      .then((response) => {
        setCategories(response.data.category.subs);
        setProducts(response.data.products.data);
        setCategoryName(response.data.category.name);
      });
  }, [slug.id]);

  return (
    <CatProductBlock
      categories={categories}
      products={products}
      title={categoryName}
    />
  );
}
