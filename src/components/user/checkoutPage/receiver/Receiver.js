import React from "react";
import "./receiver.css";

const Receiver = ({ values, errors, touched, handleChange }) => {
  return (
    <div className="col-checkout col-left col-xl-4 col-lg-6 col-12">
      <h2 className="col-title">
        <span className="d-inline-flex align-items-center justify-content-center">
          1
        </span>
        Thông tin người nhận
      </h2>
      <div className="form-group">
        <input
          id="customerName"
          name="name"
          type="text"
          className="form-control input-sm"
          value={values.name}
          onChange={handleChange}
          placeholder="Họ tên *"
        />
        <small id="nameHelpBlock" className="form-text help-block">
          {touched.name && errors.name}
        </small>
      </div>
      <div className="form-group">
        <input
          id="customerMobile"
          name="mobile"
          type="text"
          className="form-control input-sm"
          value={values.mobile}
          onChange={handleChange}
          placeholder="Điện thoại *"
        />
        <small id="mobileHelpBlock" className="form-text help-block">
          {touched.mobile && errors.mobile}
        </small>
      </div>
      <div className="form-group">
        <input
          id="customerEmail"
          name="email"
          type="text"
          className="form-control input-sm"
          value={values.email}
          onChange={handleChange}
          placeholder="Email *"
        />
        <small id="emailHelpBlock" className="form-text help-block">
          {touched.email && errors.email}
        </small>
      </div>
      <div className="form-group">
        <input
          type="text"
          id="customerAddress"
          name="address"
          value={values.address}
          onChange={handleChange}
          className="form-control input-sm"
          placeholder="Địa chỉ chi tiết *"
        />
        <small id="addressHelpBlock" className="form-text help-block">
          {touched.address && errors.address}
        </small>
      </div>
      <div className="form-group">
        <textarea
          type="text"
          id="customerNote"
          name="note"
          className="form-control input-sm"
          value={values.note}
          onChange={handleChange}
          rows="3"
          placeholder="Ghi chú"
        ></textarea>
      </div>
      <div>Đơn hàng trên website được xử lý trong giờ hành chính</div>
      <div>Vui lòng liên hệ fanpage ngoài khung giờ trên để được hỗ trợ</div>
      <div className="d-none form-check">
        <label className="form-check-label">
          <input
            name="inforBill"
            className="form-check-input"
            type="checkbox"
          />
          Thông tin hóa đơn trùng với thông tin người nhận
        </label>
      </div>
    </div>
  );
};

export default Receiver;
