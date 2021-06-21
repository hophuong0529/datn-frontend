import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Form from "./form/Form";
import { useParams } from "react-router";

export default function EditProduct() {
  const history = useHistory();
  const slug = useParams();
  const title = "Chỉnh sửa sản phẩm";
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/${slug.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [slug.id]);

  const handleEditSubmit = (event, formData) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/api/product/${slug.id}`, formData)
      .then(() => {
        alert("Cập nhật thành công");
        history.push("/admin/products");
      });
  };

  return (
    <Form product={product} title={title} handleEditSubmit={handleEditSubmit} />
  );
}
