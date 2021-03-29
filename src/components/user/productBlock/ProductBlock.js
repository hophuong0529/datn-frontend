import React from "react";
import "./productBlock.css";
import Product from "../product/Product";

export default function ProductBlock(props) {
  const products = props.products;
  return (
    <div className="blockSlide">
      <div className="prdTitle bg">
        <h2>
          <span className="title-name">{props.title}</span>
          <b className="title-line"></b>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
