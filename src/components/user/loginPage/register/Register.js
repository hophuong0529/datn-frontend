import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
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
        <form className="validate f" method="post" autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Tên đăng nhập (*)"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Họ và tên (*)"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              className="form-control"
              placeholder="Điện thoại (*)"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className=" form-control"
              placeholder="Email (*)"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ chi tiết  (*)"
              className="form-control input-sm"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Mật khẩu của bạn (*)"
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-pink full text-uppercase">
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
