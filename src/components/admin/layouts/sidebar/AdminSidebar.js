import React from "react";
import "./sidebar.css";
import { Speedometer2, Stack } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/images/avatar.jpg";

const AdminSidebar = () => {
  return (
    <div
      id="sidebar"
      className="nav-collapse "
      tabIndex="5000"
      style={{ overflow: "hidden", outline: "none" }}
    >
      <ul className="sidebar-menu" id="nav-accordion">
        <p className="centered">
          <a href="profile.html">
            <img src={avatar} className="img-circle" width="80" alt="" />
          </a>
        </p>
        <h6 className="centered">Admin</h6>
        <li className="mt">
          <a href="index.html">
            <Speedometer2 />
            <span>Thống kê</span>
          </a>
        </li>
        <li className="sub-menu dcjq-parent-li">
          <Link to="/admin/products" className="dcjq-parent">
            <Stack />
            <span>Quản lý sản phẩm</span>
          </Link>
          <ul className="sub" style={{ display: "block" }}>
            <li>
              <a href="general.html">Quản lý danh mục</a>
            </li>
            <li>
              <a href="buttons.html">Quản lý màu sắc</a>
            </li>
            <li>
              <a href="panels.html">Quản lý nhà cung cấp</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
