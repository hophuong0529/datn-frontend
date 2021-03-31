import React, { Fragment, useState } from "react";
import "./info.css";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";
import Policy from "../policy/Policy";

export default function Info(props) {
  const { product, colors, quantity, setQuantity, id } = props;

  const [activeIndex, setActiveIndex] = useState(-1);
  const handleColorClick = (index) => {
    setActiveIndex(index);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="blk-pview-info">
      <div className="blk-code">
        <h1 className="title">{product.name}</h1>
        <div className="code">Mã sản phẩm: {product.code}</div>
      </div>
      <div className="blk-price">
        <div className="product-price">
          <span className="price">{product.price?.toLocaleString()}đ</span>
        </div>
      </div>
      <div className="blk-att">
        <div className="r-at-r req color d-flex align-items-center">
          <label className="pull-left">Màu sắc</label>
          <div className="pull-left product-color">
            {colors?.map((el, index) => (
              <div
                className={`color ${
                  activeIndex === index || colors.length === 1 ? "active" : ""
                }`}
                key={index}
                onClick={() => handleColorClick(index)}
              >
                <span style={{ background: el.code }} />
              </div>
            ))}
          </div>
        </div>
        <div className="r-at-r d-flex align-items-center">
          <label className="pull-left">Số lượng</label>
          <div className="pull-left select-quantity">
            <button onClick={() => decrease()}>
              <MinusOutlined className="step-down" />
            </button>
            <input
              id="quantity"
              name="quantity"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={() => increase()}>
              <PlusOutlined className="step-up" />
            </button>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="r-at-r d-sm-flex align-items-center clearfix">
          <div id="addToCart" className="btn-js-add-cart btn btn-pink">
            Thêm vào giỏ hàng
          </div>
          {id ? (
            <div id="addPayNow" className="btn-js-add-cart btn btn-pink">
              Mua ngay
            </div>
          ) : (
            <Fragment />
          )}
        </div>
      </div>
      {id ? <Policy /> : <Fragment />}
    </div>
  );
}
