import React from "react";
import "./policy.css"

export default function Policy() {
  return (
    <div>
      <div className="blk-policy full clearfix">
        <div className="row">
          <div
            data-label="shipping"
            className="item col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center"
          >
            Giao hàng toàn quốc đơn hàng từ 100k
          </div>
          <div
            data-label="cod"
            className="item col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center"
          >
            COD nội thành HN, HCM
          </div>
          <div
            data-label="24h"
            className="item col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center"
          >
            Đổi trả trong 3 ngày
          </div>
        </div>
        <div className="blk-policy policy-shipping-support full clearfix br-t-0 mt-0">
          <div className="row">
            <div
              data-label="ship_policy"
              className="item col-12 d-flex align-items-center pt-0 mt-0"
            >
              <p style={{ marginTop: "0.8rem" }}>
                Hỗ trợ ship 20k cho đơn hàng trên 300k nội thành HN, HCM
              </p>
              <p>Miễn phí ship cho đơn hàng trên 500k toàn quốc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
