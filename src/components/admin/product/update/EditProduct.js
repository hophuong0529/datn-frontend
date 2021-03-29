import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Form from "./form/Form";
import { useParams } from "react-router";

export default function EditProduct() {
  const history = useHistory();
  const slug = useParams();
  const title = "Chỉnh sửa sản phẩm";

  const handleEditSubmit = (event, formData) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/api/product/${slug.id}`, formData)
      .then(() => {
        alert("Updated success.");
        history.push("/admin");
      });
  };

  return <Form handleEditSubmit={handleEditSubmit} title={title} />;
}
