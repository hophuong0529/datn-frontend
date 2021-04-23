import { Formik } from "formik";
import React, { useContext } from "react";
import "./form.css";
import * as Yup from "yup";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";

export default function Form() {
  const [user] = useContext(UserContext);

  const handleUpdate = ({ name, mobile, email, address }) => {
    axios
      .post(`http://127.0.0.1:8000/api/profile/${user.id}`, {
        name,
        mobile,
        email,
        address,
      })
      .then(() => {
        alert("success");
      });
  };

  console.log(user);

  return (
    <div className="blk-user-right blk-user-bor full d-block">
      <header>
        <h1>HỒ SƠ CỦA TÔI</h1>
        <div className="content">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </div>
      </header>
      <Formik
        enableReinitialize
        initialValues={{
          name: user.name,
          mobile: user.mobile,
          email: user.email,
          address: user.address,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(50, "* Tên người nhận chỉ được tối đa 50 ký tự!")
            .required("* Tên người nhận không được để trống!"),
          mobile: Yup.string()
            .max(10, "* Số điện thoại chỉ được tối đa 10 số!")
            .required("* Số điện thoại không được để trống!"),
          email: Yup.string()
            .email("Định dạng email không hợp lệ!")
            .required("* Email không được để trống!"),
          address: Yup.string().required("* Địa chỉ không được để trống!"),
        })}
        onSubmit={(values) => handleUpdate(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form
            id="formAcount"
            className="formAcount clearfix"
            onSubmit={handleSubmit}
          >
            <div className="form-group clearfix">
              <div className="row">
                <label className="col-md-3 control-label">
                  Họ tên: <span>(*)</span>
                </label>
                <div className="col-lg-6 col-md-9">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Họ tên"
                    className="form-control input-sm"
                  />
                  <small id="nameHelpBlock" className="form-text help-block">
                    {touched.address && errors.address}
                  </small>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="row">
                <label className="col-md-3 control-label">
                  Điện thoại: <span>(*)</span>
                </label>
                <div className="col-lg-6 col-md-9">
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="Điện thoại"
                    className="form-control input-sm"
                  />
                  <small id="mobileHelpBlock" className="form-text help-block">
                    {touched.address && errors.address}
                  </small>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="row">
                <label className="col-md-3 control-label">
                  Email: <span>(*)</span>
                </label>
                <div className="col-lg-6 col-md-9">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control input-sm"
                  />
                  <small id="mobileHelpBlock" className="form-text help-block">
                    {touched.address && errors.address}
                  </small>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="row">
                <label className="col-md-3 control-label">
                  Địa chỉ: <span>(*)</span>
                </label>
                <div className="col-lg-6 col-md-9">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    className="form-control input-sm"
                  />
                  <small id="addressHelpBlock" className="form-text help-block">
                    {touched.address && errors.address}
                  </small>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="row">
                <label className="col-md-3 control-label"></label>
                <div className="col-lg-6 col-md-9">
                  <button type="submit" className="btn btn-pink">
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
