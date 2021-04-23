import React, { useState } from "react";
import "./sidebar.css";
import { ClipboardCheck, Gem, Gift, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/images/avatar.jpg";

const AdminSidebar = () => {
  const [activeIndex, setActiveIndex] = useState([]);

  const handleOnClick = (index) => {
    const exist = activeIndex.findIndex((x) => x === index) !== -1;
    if (!exist) {
      setActiveIndex([...activeIndex, index]);
    } else {
      setActiveIndex(activeIndex.filter((x) => x !== index));
    }
  };

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
            <Gem />
            <span>Thống kê</span>
          </a>
        </li>
        <li className="sub-menu dcjq-parent-li">
          <button className="dcjq-parent" onClick={() => handleOnClick(1)}>
            <Gift />
            <span>Quản lý sản phẩm</span>
          </button>
          <ul
            className={`sub${
              activeIndex.findIndex((x) => x === 1) !== -1 ? " open" : ""
            }`}
          >
            <li>
              <Link to="/admin/products">Quản lý thông tin</Link>
            </li>
            <li>
              <Link to="/admin/categories">Quản lý danh mục</Link>
            </li>
            <li>
              <a href="buttons.html">Quản lý màu sắc</a>
            </li>
            <li>
              <a href="panels.html">Quản lý nhà cung cấp</a>
            </li>
          </ul>
        </li>
        <li className="sub-menu dcjq-parent-li">
          <button className="dcjq-parent" onClick={() => handleOnClick(2)}>
            <ClipboardCheck />
            <span>Quản lý đơn hàng</span>
          </button>
          <ul
            className={`sub${
              activeIndex.findIndex((x) => x === 2) !== -1 ? " open" : ""
            }`}
          >
            <li>
              <a href="general.html">Quản lý hóa đơn bán</a>
            </li>
            <li>
              <a href="buttons.html">Quản lý trạng thái</a>
            </li>
            <li>
              <a href="panels.html">Quản lý người nhận</a>
            </li>
          </ul>
        </li>
        <li className="mt">
          <a href="index.html">
            <Person />
            <span>Quản lý người dùng</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
