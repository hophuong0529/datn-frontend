import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Form from "./form/Form";

export default function AddProduct() {
  const history = useHistory();
  const title = "Thêm sản phẩm mới";
  const [errorList, setErrorList] = useState([]);

  const handleAddSubmit = (formData) => {
    axios.post(`http://127.0.0.1:8000/api/products`, formData).then((res) => {
      if (!res.data.errors) {
        alert("Thêm mới thành công.");
        history.push("/admin/products");
      } else {
        setErrorList(res.data.errors);
      }
    });
  };

  return (
    <Form
      handleAddSubmit={handleAddSubmit}
      title={title}
      errorList={errorList}
    />
  );
}
