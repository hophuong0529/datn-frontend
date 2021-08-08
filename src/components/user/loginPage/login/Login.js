import React, { useContext } from "react";
import "./login.css";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { notification } from "antd";

export default function Login() {
  let history = useHistory();
  let location = useLocation();
  const [, setUser] = useContext(UserContext);

  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };

  const handleLogin = ({ username, password }) => {
    axios
      .post(`http://127.0.0.1:8000/api/login`, { username, password })
      .then((response) => {
        setUser(response.data.user);
        openNotification("Đăng nhập thành công.");
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
          <Link to="/login" className="active" rel="nofollow">
            Đăng nhập
          </Link>
          <Link to="/register" rel="nofollow">
            Đăng ký
          </Link>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required("* Tên đăng nhập không được để trống!"),
            password: Yup.string()
              .max(255)
              .required("* Mật khẩu không được để trống!"),
          })}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form id="formAcount" className="validate" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Nhập tên đăng nhập"
                />
                <small id="helpBlock" className="form-text">
                  {touched.username && errors.username}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Mật khẩu"
                />
                <small id="passwordHelpBlock" className="form-text">
                  {touched.password && errors.password}
                </small>
              </div>
              <div className="user-foot text-center">
                <button
                  type="submit"
                  className="btn btn-pink full text-uppercase"
                >
                  Đăng nhập
                </button>
                <Link
                  to="#"
                  rel="nofollow"
                  className="clearfix"
                  style={{ color: "#333" }}
                >
                  Quên mật khẩu?
                </Link>
                <p className="clearfix">Hoặc đăng nhập với</p>
                <div className="loginFb">
                  <Link to="#"> Đăng nhập bằng facebook</Link>
                </div>
                <div className="loginGg">
                  <Link to="#"> Đăng nhập Google</Link>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
