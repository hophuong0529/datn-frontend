import React from "react";
import "./register.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { notification } from "antd";

export default function Register() {
  let history = useHistory();
  let location = useLocation();
  const [, setUser] = useContext(UserContext);
  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };
  const handleRegister = ({
    username,
    password,
    name,
    mobile,
    email,
    address,
  }) => {
    axios
      .post(`http://127.0.0.1:8000/api/register`, {
        username,
        password,
        name,
        mobile,
        email,
        address,
      })
      .then((response) => {
        setUser(response.data.user);
        openNotification("Đăng ký thành công.");
        localStorage.setItem("token", response.data.access_token);
        location.state
          ? history.replace(location.state.from)
          : history.goBack();
      })
      .catch(() => {
        openNotification("Tên đăng nhập hoặc mật khẩu không chính xác.");
      });
  };
  return (
    <main className="main-site main-childs">
      <div className="user-wrapper">
        <div className="user-nav anonymous-awe">
          <Link to="/login" rel="nofollow">
            Đăng nhập
          </Link>
          <Link to="/register" className="active" rel="nofollow">
            Đăng ký
          </Link>
        </div>
        <Formik
          initialValues={{
            username: "",
            name: "",
            email: "",
            mobile: "",
            address: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required("* Tên đăng nhập không được để trống!"),
            password: Yup.string()
              .max(255)
              .required("* Mật khẩu không được để trống!"),
          })}
          onSubmit={(values) => handleRegister(values)}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form
              className="validate f"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Tên đăng nhập (*)"
                />
                <small id="helpBlock" className="form-text">
                  {touched.username && errors.username}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Họ và tên (*)"
                />
                <small id="helpBlock" className="form-text">
                  {touched.name && errors.name}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Điện thoại (*)"
                />
                <small id="helpBlock" className="form-text">
                  {touched.mobile && errors.mobile}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className=" form-control"
                  placeholder="Email (*)"
                />
                <small id="helpBlock" className="form-text">
                  {touched.email && errors.email}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  placeholder="Địa chỉ chi tiết  (*)"
                  className="form-control input-sm"
                />
                <small id="helpBlock" className="form-text">
                  {touched.address && errors.address}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Mật khẩu của bạn (*)"
                />
                <small id="helpBlock" className="form-text">
                  {touched.password && errors.password}
                </small>
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn-pink full text-uppercase"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
