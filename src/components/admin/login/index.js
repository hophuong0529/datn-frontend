import React from "react";
import "./index.css";
import login from "../../../assets/images/login.png";
import { EnvelopeFill, LockFill } from "react-bootstrap-icons";

export const AdminLogin = () => {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div
            class="login100-pic js-tilt"
            data-tilt=""
            style={{
              willChange: "transform",
              transform: "perspective(300px) rotateX(0deg) rotateY(0deg)",
            }}
          >
            <img src={login} alt="IMG" />
            <p className="admini">Quản trị viên</p>
          </div>

          <form class="login100-form validate-form">
            <span class="login100-form-title">ĐĂNG NHẬP</span>
            <div class="wrap-input100 validate-input">
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <EnvelopeFill />
              </span>
            </div>
            <div class="wrap-input100 validate-input">
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Mật khẩu"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <LockFill />
              </span>
            </div>
            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
