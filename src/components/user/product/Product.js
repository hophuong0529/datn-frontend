import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonWatch from "../buttonWatch/ButtonWatch";
import "./product.css";

export default function Product(props) {
  const product = props.product;
  return (
    <div className="col-md-3 product-item">
      <Card>
        <Card.Body className="image">
          {product.discount !== 0 ? (
            <span className="flag">{product.discount}% off</span>
          ) : (
            <Fragment />
          )}
          <Link to={"/" + product.id} className="link-detail">
            <img
              src={process.env.REACT_APP_URL_IMAGE + product.images[0].path}
              alt=""
              style={{ width: "100%" }}
            />
          </Link>
          <div className="product-action d-flex align-center justify-content-center">
            <div className="watch" data-psid="30184003" data-root="-2">
              <ButtonWatch product={product} />
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="name">
        <Link to={"/" + product.id} className="link-detail">
          {product.name}
        </Link>
      </div>
      <div className="price">
        <p className="overflowed pro-price ">
          {product.discount !== 0 ? (
            <span className="pro-price-del">
              <del className="compare-price">
                {product.price?.toLocaleString()}đ
              </del>
            </span>
          ) : (
            <></>
          )}
          <span>
            {(
              (product.price * (100 - product.discount)) /
              100
            ).toLocaleString()}
            đ
          </span>
        </p>
        <span></span>
      </div>
    </div>
  );
}
