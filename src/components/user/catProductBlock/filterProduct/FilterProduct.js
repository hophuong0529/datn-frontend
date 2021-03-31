import React, { Fragment } from "react";
import "./filterProduct.css";
import Product from "../../product/Product";

export default function FilterProduct(props) {
  const { products, title } = props;
  return (
    <Fragment>
      <div className="d-pro-head">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
