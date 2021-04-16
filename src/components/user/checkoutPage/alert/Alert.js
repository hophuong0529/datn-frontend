import React from "react";
import "./alert.css";
import purchase from "../../../../assets/images/purchase.png";
import { useParams } from "react-router";
import { SuitHeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Alert() {
  const slug = useParams();
  return (
    <div className="checkout-page container sty-none">
      <div className="row">
        <div class="purchase offset-lg-2 col-lg-8 col-12 text-center">
          <div class="pur-title">
            THANK YOU&nbsp;
            <SuitHeartFill style={{ fontSize: 19 }} />
          </div>
          <div class="pur-content d-flex align-items-center ">
            <div class="pur-img d-inline-flex ">
              <img src={purchase} alt="purchase" />
            </div>
            <div class="pur-text d-block">
              <p>
                <strong>Lakey đã nhận được yêu cầu đặt hàng của bạn!</strong>
              </p>
              <p>
                Mã đơn hàng của bạn là <span class="text-pink">{slug.code}</span>
              </p>
              <p>
                Bộ phận CSKH sẽ gọi điện xác nhận đơn hàng và hướng dẫn thanh
                toán
              </p>
              <p>Đơn hàng trên website được xử lý trong giờ hành chính</p>
              <p>
                Sau khi được xác nhận, đơn hàng sẽ được giao cho bạn trong vòng
                2-4 ngày
              </p>
              <p>Cảm ơn bạn đã&nbsp;đồng hành cùng Lakey.</p>
            </div>
          </div>
          <Link
            to="/product"
            class="btn btn-pink"
            title="Quay lại trang sản phẩm"
          >
            <span>Quay lại trang sản phẩm</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
