import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";

export default function AllProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const title = "Sản phẩm";
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data.data.slice(0, 6));
    });
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data.data);
      setPerPage(response.data.per_page);
      setTotalItemsPage(response.data.total);
    });
  }, []);
  const handlePageChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/products?page=" + pageNumber)
      .then((response) => {
        setProducts(response.data.data);
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
      title={title}
    />
  );
}
