import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";

export default function SearchProduct(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const keyword = props.location.search.substr(3);
  const [title, setTilte] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
    axios
      .get(`http://127.0.0.1:8000/api/search/${keyword}`)
      .then((response) => {
        setProducts(response.data.products.data);
        setPerPage(response.data.products.per_page);
        setTotalItemsPage(response.data.products.total);
        setTilte(response.data.keyword);
      });
  }, [keyword]);

  const handlePageChange = (pageNumber) => {
    axios
      .get(`http://127.0.0.1:8000/api/search/${keyword}?page=` + pageNumber)
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
      title={"Tìm kiếm: " + title}
    />
  );
}
