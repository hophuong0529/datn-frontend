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
  const [errorList, setErrorList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/${slug.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [slug.id]);

  const handleEditSubmit = (formData) => {
    axios
      .post(`http://127.0.0.1:8000/api/product/${slug.id}`, formData)
      .then((res) => {
        if (!res.data.errors) {
          alert("Cập nhật thành công.");
          history.push("/admin/products");
        } else {
          setErrorList(res.data.errors);
        }
      });
  };

  return (
    <Form
      product={product}
      title={title}
      handleEditSubmit={handleEditSubmit}
      errorList={errorList}
    />
  );
}
