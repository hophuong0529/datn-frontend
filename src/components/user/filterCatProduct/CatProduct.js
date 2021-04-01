import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";
import { useParams } from "react-router";

export default function CatProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const slug = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/category/${slug.id}`)
      .then((response) => {
        setCategories(response.data.category.subs);
        setProducts(response.data.products.data);
        setPerPage(response.data.products.per_page);
        setTotalItemsPage(response.data.products.total);
        setCategoryName(response.data.category.name);
      });
  }, [slug.id]);

  const handlePageChange = (pageNumber) => {
    axios
      .get(`http://127.0.0.1:8000/api/category/${slug.id}?page=` + pageNumber)
      .then((response) => {
        setProducts(response.data.products.data);
        setActivePage(pageNumber);
      });
  };

  return (
    <CatProductBlock
      activePage={activePage}
      perPage={perPage}
      totalItemsPage={totalItemsPage}
      handlePageChange={handlePageChange}
      categories={categories}
      products={products}
      title={categoryName}
    />
  );
}
