import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductBlock from "../productBlock/ProductBlock";

export default function TopProduct() {
  const [products, setProducts] = useState([]);
  const [title] = useState("Sản phẩm giảm giá");
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/sale-product").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="tp_product">
      <ProductBlock products={products} title={title} />
    </div>
  );
}
