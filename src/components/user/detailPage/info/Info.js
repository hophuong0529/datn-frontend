import React, { Fragment, useContext, useState } from "react";
import "./info.css";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";
import Policy from "../policy/Policy";
import axios from "axios";
import { notification } from "antd";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router";
import { UserContext } from "../../contexts/UserContext";

export default function Info(props) {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [user] = useContext(UserContext);
  const history = useHistory();
  const {
    id,
    product,
    colors,
    price,
    discount,
    productId,
    colorId,
    setColorId,
    quantity,
    setQuantity,
    activeIndex,
    setActiveIndex,
    handleCancel
  } = props;

  const priceSale = (price * (100 - discount)) / 100;
  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };

  const handleColorClick = (index) => {
    setActiveIndex(index);
    setColorId(colors[index].id);
  };

  const handleAddToCart = (product, isRedirect) => {
    setClicked(true);
    if (colorId !== 0) {
      if (user.length === 0) history.push("/login");
      else {
        const selectColor = colors.find((x) => x.id === colorId).name;
        addToCart(product, selectColor, quantity);
        axios
          .post(`http://127.0.0.1:8000/api/cart/${user.id}`, {
            quantity,
            productId,
            colorId,
            price,
            priceSale,
          })
          .then(() => {
            if (isRedirect) history.push("/checkout");
            else {
              if (handleCancel) handleCancel();
              openNotification("Thêm sản phẩm vào giỏ hàng thành công.");
            }
          })
          .catch(() => {
            openNotification(
              "Vui lòng đăng nhập trước thêm sản phẩm vào giỏ hàng."
            );
          });
      }
    }
  };

  const handleBuyNow = (product) => {
    const isRedirect = true;
    handleAddToCart(product, isRedirect);
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
          <span className="price">
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
          </span>
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
        <div
          className="r-at-r d-flex align-items-center"
          style={{ marginBottom: 40 }}
        >
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
              onChange={(e) =>
                setQuantity(
                  e.target.value !== "" ? parseInt(e.target.value) : 1
                )
              }
            />
            <button onClick={() => increase()}>
              <PlusOutlined className="step-up" />
            </button>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="r-at-r d-sm-flex align-items-center clearfix">
          <div
            id="addToCart"
            className="btn-js-add-cart btn btn-pink"
            onClick={() => handleAddToCart(product)}
          >
            Thêm vào giỏ hàng
          </div>
          {id ? (
            <div
              id="addPayNow"
              className="btn-js-add-cart btn btn-pink"
              onClick={() => handleBuyNow(product)}
            >
              Mua ngay
            </div>
          ) : (
            <Fragment />
          )}
        </div>
        {clicked && colorId === 0 ? (
          <div id="mss-alret" style={{ display: "block" }}>
            Quý khách vui lòng chọn màu sắc của sản phẩm để tiến hành đặt hàng!
          </div>
        ) : (
          <></>
        )}
      </div>
      {id ? <Policy /> : <Fragment />}
    </div>
  );
}
