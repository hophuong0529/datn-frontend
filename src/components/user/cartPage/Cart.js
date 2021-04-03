import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import "./cart.css";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { totalCart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const [user] = useContext(UserContext);

  const handleEditCart = (items, id) => {
    const product = items.find((x) => x.id === id);
    const productId = product.id;
    const userId = user.id;
    const color = product.color;
    const quantity = product.quantity;
    axios.post(`http://127.0.0.1:8000/api/cart-item/edit`, {
      productId,
      color,
      userId,
      quantity,
    });
  };
  const increase = (id) => {
    const _cartItems = cartItems.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      }
      return el;
    });

    setCartItems(_cartItems);
    handleEditCart(_cartItems, id);
  };

  const decrease = (id) => {
    const _cartItems = cartItems.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity - 1,
        };
      }
      return el;
    });

    setCartItems(_cartItems);
    handleEditCart(_cartItems, id);
  };

  function handleQuantityChange(e, id) {
    const _cartItems = cartItems.map((el) => {
      if (el.id === id && e.target.value !== "") {
        return {
          ...el,
          quantity: parseInt(e.target.value),
        };
      }
      return el;
    });
    setCartItems(_cartItems);
    handleEditCart(_cartItems, id);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="cart-page col-12">
          <table className="table table-cart">
            <thead>
              <tr>
                <th width="20%">Sản phẩm</th>
                <th width="25%" className="text-center">
                  Mô tả
                </th>
                <th width="15%" className="text-center d-none d-md-table-cell">
                  Đơn giá
                </th>
                <th width="15%" className="text-center d-none d-md-table-cell">
                  Số lượng
                </th>
                <th width="15%" className="text-center d-none d-md-table-cell">
                  Tổng
                </th>
                <th width="10%" className="text-center d-none d-md-table-cell">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="cart-item" data-psid="30184004">
                  <td className="cart-img">
                    <div className="d-flex align-items-center">
                      <i className="d-none fa fa-pink fa-1x5 fa-check-square"></i>
                      <Link to={"/" + item.id}>
                        <img
                          data-sizes="auto"
                          className="lazyautosizes ls-is-cached lazyloaded"
                          src={
                            process.env.REACT_APP_URL_IMAGE +
                            item.images[0].path
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                  </td>
                  <td className="text-center">
                    <Link to={"/" + item.id}>
                      {item.name} - {item.color}
                    </Link>
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    <strong className="d-block">
                      {(
                        (item.price * (100 - item.discount)) /
                        100
                      ).toLocaleString()}
                      đ
                    </strong>
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    <div className="blk-qty d-flex justify-content-center align-items-center">
                      <div
                        data-label="cart"
                        className="blk-qty-btn minus d-flex justify-content-center align-items-center"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </div>
                      <input
                        className="updateCart blk-qty-input d-flex justify-content-center align-items-center"
                        type="text"
                        data-psid="30184004"
                        max="63"
                        min="1"
                        value={
                          cartItems.find(
                            (el) => el.id === item.id && el.color === item.color
                          ).quantity
                        }
                        onChange={(e) => handleQuantityChange(e, item.id)}
                      />
                      <div
                        data-label="cart"
                        className="blk-qty-btn plus d-flex justify-content-center align-items-center"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </div>
                    </div>
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    <strong>
                      {(
                        ((item.price * (100 - item.discount)) / 100) *
                        item.quantity
                      )?.toLocaleString()}
                      đ
                    </strong>
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    <button
                      onClick={() => {
                        if (window.confirm("Bạn muốn xóa sản phẩm này?"))
                          removeItem(item);
                      }}
                      className="remove-cart"
                      data-psid="30184004"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            <p>Hỗ trợ ship 20k cho đơn hàng trên 300k nội thành HN, HCM</p>
            <p>Hỗ trợ miễn phí cho đơn hàng trên 500k toàn quốc</p>
            <p>Đơn hàng trên website được xử lý trong giờ hành chính</p>
          </div>
          <div className="cart-total text-right">
            <div className="total d-block">
              Tổng: {totalCart.toLocaleString()}
              <sub>đ</sub>
            </div>
            <div className="clearfix"></div>
            <a className="btn btn-lg btn-pink btn-radius" href="/product">
              Tiếp tục mua sắm
            </a>
            <a
              className="btn btn-lg btn-outline-pink btn-radius"
              href="/cart/checkout"
            >
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
