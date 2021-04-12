import React from "react";
import "./method.css";

const Method = ({ handleChange }) => {
  return (
    <div className="col-checkout col-center col-xl-3 col-lg-6 col-12">
      <h2 className="col-title">
        <span className="d-inline-flex align-items-center justify-content-center">
          2
        </span>
        Phương thức thanh toán
      </h2>
      <div className="d-block item">
        <label className="form-check-label">
          <input
            type="radio"
            value={2}
            name="methodId"
            onChange={handleChange}
            className="form-check-input"
          />
          <div
            className="d-block"
            data-toggle="collapse"
            data-target="#p-online"
            aria-expanded="true"
          >
            Chuyển khoản trước toàn bộ tiền hàng
          </div>
        </label>
        <div
          id="p-online"
          className="col-pay alert alert-warning collapse in show"
        >
          <p>
            <span style={{ fontSize: 14 }}>
              <span>
                <span style={{ textIndent: 10 }}>
                  Với phương&nbsp;thức Chuyển khoản trước toàn bộ tiền
                  hàng,&nbsp;bộ phận CSKH sẽ gọi điện đến bạn để xác nhận đơn
                  hàng và hướng&nbsp;dẫn cách thức thanh toán chuyển khoản
                </span>
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="d-block item">
        <label className="form-check-label">
          <input
            type="radio"
            value={1}
            name="methodId"
            onChange={handleChange}
            className="form-check-input"
            checked
          />
          <div
            className="d-block"
            data-toggle="collapse"
            data-target="#p-cod"
            aria-expanded="true"
          >
            Thanh toán khi nhận hàng
          </div>
        </label>
        <div
          id="p-cod"
          className="col-pay alert alert-warning collapse in show"
        >
          <p>
            <span>
              <span style={{ fontSize: 14 }}>
                Thanh toán khi nhận hàng (COD) chỉ áp dụng cho các đơn hàng ở
                các quận/huyện dưới đây thuộc&nbsp;Hà Nội/TP.HCM:
              </span>
            </span>
          </p>
          <p>
            <span>
              <span style={{ fontSize: 14 }}>
                &nbsp; &nbsp; &nbsp; &nbsp;+ Hà Nội: Quận Hoàn Kiếm, Ba Đình,
                Đống Đa, Hoàng Mai, Hai Bà Trưng, Cầu Giấy, Thanh Xuân,&nbsp;
              </span>
              <span style={{ fontSize: 14 }}>
                Tây Hồ, Từ Liêm, Hà Đông, Long Biên,&nbsp;Gia Lâm, Sơn Tây, Ba
                Vì, Mê Linh, Đông Anh, Thường Tín, Thanh Trì
              </span>
            </span>
          </p>
          <p style={{ fontSize: 15, margin: 0, padding: "5px 0" }}>
            <span>
              <span style={{ fontSize: 14 }}>
                &nbsp; &nbsp; &nbsp; &nbsp;+ HCM: Quận 1, 2, 3, 4, 5, 6, 7, 8,
                9, 10, 11, 12, Tân Bình, Tân Phú, Phú Nhuận, Bình Thạnh, Gò
                Vấp,&nbsp;
              </span>
              <span style={{ fontSize: 14 }}>
                Bình Tân, Thủ Đức,&nbsp;Bình Chánh, Nhà Bè, Hooc M
              </span>
              <span style={{ fontSize: 14 }}>ôn</span>
            </span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Method;
