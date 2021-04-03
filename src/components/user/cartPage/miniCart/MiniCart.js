import React, { useContext, useEffect } from "react";
import { TrashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./miniCart.css";

export default function MiniCart(props) {
  const { hovered } = props;
  const { cartItems } = useContext(CartContext);
  const { totalCart, setTotalCart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);

  useEffect(() => {
    const itemsPrice = cartItems.reduce(
      (itemsPrice, item) =>
        itemsPrice +
        ((item.price * (100 - item.discount)) / 100) * item.quantity,
      0
    );
    setTotalCart(itemsPrice);
  }, [cartItems, setTotalCart]);

  return (
    <div
      id="js-rs-mini-cart"
      className={`mini-shopping-cart${hovered ? " open" : ""}`}
    >
      <ul className="mini-list-product">
        {cartItems?.map((item, index) => (
          <li key={index} className="shopping-cart-item d-inline-flex">
            <figure className="item-image">
              <Link to={"/" + item.id}>
                <img
                  className="img-responsive"
                  src={process.env.REACT_APP_URL_IMAGE + item.images[0].path}
                  alt=""
                />
              </Link>
            </figure>
            <div className="item-content">
              <h4 className="item-title">
                <Link to={"/" + item.id}>
                  {item.name} - {item.color}
                </Link>
              </h4>
              <span className="item-price">
                Đơn giá:{" "}
                {((item.price * (100 - item.discount)) / 100).toLocaleString()}đ
              </span>
            </div>
            <div className="item-action">
              <span className="item-quantity">x{item.quantity}</span>
              <div
                className="js-remove-item"
                data-psid="30184004"
                onClick={() => {
                  if (window.confirm("Bạn muốn xóa sản phẩm này?"))
                    removeItem(item);
                }}
              >
                <TrashFill />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mini-shopping-cart__bottom">
        <div className="shopping-cart__bottom-total d-flex justify-content-between">
          <span>Thành tiền</span>
          <span className="shopping-cart-total-amount">
            {totalCart?.toLocaleString()}đ
          </span>
        </div>
        <Link className="btn btn-lg btn-pink full" to="/cart">
          Xem giỏ hàng
        </Link>
      </div>
    </div>
  );
}
