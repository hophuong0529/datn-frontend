import { Radio } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./method.css";

const Method = ({ totalCart, values, handleChange }) => {
  const [methods, setMethods] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/order-method`).then((response) => {
      setMethods(response.data);
    });
  }, []);
  return (
    <div className="col-checkout col-center col-xl-3 col-lg-6 col-12">
      <h2 className="col-title">
        <span className="d-inline-flex align-items-center justify-content-center">
          3
        </span>
        Phương thức thanh toán
      </h2>
      <Radio.Group onChange={handleChange} value={values.methodId}>
        {methods.map((method) => (
          <div className="d-block item" key={method.id}>
            <label className="form-check-label">
              <input
                type="radio"
                value={method.id}
                name="methodId"
                className="form-check-input"
                defaultChecked
              />
              <div
                className="d-block"
                data-toggle="collapse"
                data-target="#p-online"
                aria-expanded="true"
              >
                {method.name}
              </div>
            </label>
            <div
              id="p-online"
              className="col-pay alert alert-warning collapse in show"
            >
              <p>
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{ textIndent: 10 }}
                      dangerouslySetInnerHTML={{ __html: method.description }}
                    ></span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        ))}
      </Radio.Group>
      <div className="form-term">
        <p>
          Khi nhấn "Thanh toán" đồng nghĩa với việc bạn đồng ý với tất cả các{" "}
          <a href="/chinhsachbanhang-n53878.html">chính sách giao hàng </a>
          của shop.
        </p>
      </div>
      {totalCart > 100000 ? (
        <div className="d-block text-right">
          <button type="submit" id="js-btn-submit" className="btn btn-pink">
            Thanh toán
          </button>
        </div>
      ) : (
        <div style={{ height: 20 }} />
      )}
    </div>
  );
};

export default Method;
