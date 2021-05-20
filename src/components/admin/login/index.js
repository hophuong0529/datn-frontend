import React, { useContext } from "react";
import "./index.css";
import login from "../../../assets/images/login.png";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { notification } from "antd";
import { AdminContext } from "../contexts/AdminContext";

export const AdminLogin = () => {
  let history = useHistory();
  let location = useLocation();
  const [, setAdmin] = useContext(AdminContext);

  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };
  const handleAdminLogin = ({ email, password }) => {
    axios
      .post(`http://127.0.0.1:8000/api/admin/login`, { email, password })
      .then((response) => {
        setAdmin(response.data.admin);
        openNotification("Đăng nhập thành công.");
        localStorage.setItem("token_admin", response.data.access_token);
        location.state
          ? history.replace(location.state.from)
          : history.push("/admin/");
      })
      .catch(() => {
        openNotification("Tên đăng nhập hoặc mật khẩu không chính xác.");
      });
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div
            className="login100-pic js-tilt"
            data-tilt=""
            style={{
              willChange: "transform",
              transform: "perspective(300px) rotateX(0deg) rotateY(0deg)",
            }}
          >
            <img src={login} alt="IMG" />
            <p className="admini">Quản trị viên</p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .max(255)
                .email("* Định dạng email không hợp lệ!")
                .required("* Email không được để trống!"),
              password: Yup.string()
                .max(255)
                .required("* Mật khẩu không được để trống!"),
            })}
            onSubmit={(values) => handleAdminLogin(values)}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                className="login100-form validate-form"
                onSubmit={handleSubmit}
              >
                <span className="login100-form-title">ĐĂNG NHẬP</span>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <small id="helpBlock" className="form-text">
                    {touched.email && errors.email}
                  </small>
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={handleChange}
                  />
                  <small id="helpBlock" className="form-text">
                    {touched.password && errors.password}
                  </small>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Đăng nhập</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
