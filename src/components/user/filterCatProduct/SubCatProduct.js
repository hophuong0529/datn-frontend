import React, { useState, useEffect } from "react";
import CatProductBlock from "../catProductBlock/CatProductBlock";
import axios from "axios";
import { useParams } from "react-router";

export default function SubCatProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const slug = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/sub-category/${slug.id}`)
      .then((response) => {
        setCategories(response.data.related);
        setProducts(response.data.products.data);
        setSubCategoryName(response.data.sub_category.name);
        setPerPage(response.data.products.per_page);
        setTotalItemsPage(response.data.products.total);
      });
  }, [slug.id]);

  const handlePageChange = (pageNumber) => {
    axios
      .get(
        `http://127.0.0.1:8000/api/sub-category/${slug.id}?page=` + pageNumber
      )
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
      title={subCategoryName}
    />
  );
}
