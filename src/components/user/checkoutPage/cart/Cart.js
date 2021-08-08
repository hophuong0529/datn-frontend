import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ cartItems, totalCart }) => {
  const shippingFee = totalCart < 500000 ? 35000 : 0;

  return (
    <div className="col-checkout col-right col-xl-5 col-lg-12 col-12">
      <h2 className="col-title">
        <span className="d-inline-flex align-items-center justify-content-center">
          1
        </span>
        Thông tin giỏ hàng
      </h2>
      <div className="table-responsive scrollModal">
        <table className="table table-checkout" border="0" cellSpacing="10">
          <thead>
            <tr>
              <th className="text-left" width="55%">
                Tên sản phẩm
              </th>
              <th className="text-center" width="20%">
                Số lượng
              </th>
              <th className="text-right" width="25%">
                Thành tiền
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="cartItem" data-psid="29944519">
                <td>
                  <Link to={"/" + item.id}>
                    {item.name} - {item.color}
                  </Link>
                  <div className="clearfix">
                    Đơn giá:&nbsp;
                    <strong>
                      {(
                        (item.price * (100 - item.discount)) /
                        100
                      ).toLocaleString()}
                      đ
                    </strong>
                    <div className="d-block"></div>
                  </div>
                </td>
                <td className="text-center">{item.cart_quantity}</td>
                <td className="text-center">
                  <strong>
                    {(
                      item.cart_quantity *
                      ((item.price * (100 - item.discount)) / 100)
                    ).toLocaleString()}
                    đ
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-checkout" border="0" cellSpacing="10">
          <tfoot>
            <tr>
              <td colSpan="2">
                <strong>Tạm tính</strong>
              </td>
              <td>{totalCart.toLocaleString()}đ</td>
            </tr>
            <tr>
              <td colSpan="2">Phí vận chuyển</td>
              <td id="shipFee">{shippingFee.toLocaleString()}đ</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Tổng cộng</strong>
              </td>
              <td id="showTotalMoney" className="totalPrice">
                {(totalCart + shippingFee).toLocaleString()}đ
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {totalCart < 100000 ? (
        <div class="alert alert-warning text-justify">
          <span style={{ fontSize: 14 }}>
            <span>
              <span style={{ textIndent: 10 }}>
                Quý khách vui lòng đặt hàng với giá trị đơn từ 100k trở lên
              </span>
            </span>
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
