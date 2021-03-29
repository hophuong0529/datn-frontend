import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

export default function Product(props) {
  const product = props.product;
  return (
    <div className="col-md-3 product-item">
      <Card>
        <Card.Body
          className="image"
          style={{ padding: 2, border: "#ffbb30 thin solid" }}
        >
          {product.discount !== 0 ? (
            <span className="flag">{product.discount}% off</span>
          ) : (
            <Fragment />
          )}
          <img
            src={process.env.REACT_APP_URL_IMAGE + product.images[0].path}
            alt=""
            style={{ width: "100%" }}
          />
        </Card.Body>
      </Card>
      <div className="name">
        <Link to={"/product/" + product.id} className="link-detail">
          {product.name}
        </Link>
      </div>
      <div className="price">
        <span>{product.price?.toLocaleString()}₫</span>
      </div>
    </div>
  );
}
