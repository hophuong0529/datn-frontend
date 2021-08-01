import React from "react";
import "./policy.css";

export default function Policy() {
  return (
    <div>
      <div className="blk-policy full clearfix">
        <div className="row" style={{ marginLeft: 0 }}>
          <div
            data-label="shipping"
            className="item col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center"
          >
            Giao hàng toàn quốc <br />
            đơn hàng từ 100k
          </div>
          <div
            data-label="cod"
            className="item col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center"
          >
            COD nội thành HN, HCM
          </div>
        </div>
        <div
          className="blk-policy policy-shipping-support full clearfix br-t-0 mt-0"
          style={{ paddingTop: 0 }}
        >
          <div className="row" style={{ marginLeft: 0 }}>
            <div
              data-label="ship_policy"
              className="item col-12 d-flex align-items-center pt-0 mt-0"
            >
              <p style={{ paddingTop: 25 }}>
                Miễn phí ship cho đơn hàng trên 500k toàn quốc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
