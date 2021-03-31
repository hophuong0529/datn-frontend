import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";
import { useParams } from "react-router";

export default function SubCatProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState([]);
  const slug = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/sub-category/${slug.id}`)
      .then((response) => {
        setCategories(response.data.related);
        setProducts(response.data.products.data);
        setSubCategoryName(response.data.sub_category.name);
      });
  }, [slug.id]);

  return (
    <CatProductBlock
      categories={categories}
      products={products}
      title={subCategoryName}
    />
  );
}
