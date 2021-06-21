import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Form from "./form/Form";

export default function AddProduct() {
  const history = useHistory();
  const title = "Thêm sản phẩm mới";

  const handleAddSubmit = (event, formData) => {
    event.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/products`, formData).then(() => {
      alert("Thêm mới thành công.");
      history.push("/admin/products");
    });
  };

  return <Form handleAddSubmit={handleAddSubmit} title={title} />;
}
