import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import "./bread.css";

export default function Bread(props) {
  const { subCategory } = props;
  const [category, setCategory] = useState();
  const categoryId = subCategory?.category_id;

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategory(response.data.find((x) => x.id === categoryId));
    });
  }, [categoryId]);
  return (
    <Breadcrumb style={{}}>
      <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="">{category?.name}</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{subCategory?.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
