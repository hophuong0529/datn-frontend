import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "./header.css";
import logo from "../../../../assets/images/logo.png";
import { AdminContext } from "../../contexts/AdminContext";

export default function AdminHeader() {
  const [, setAdmin] = useContext(AdminContext);
  const history = useHistory();
  const handleLogout = () => {
    setAdmin([]);
    alert("Đăng xuất thành công.");
    history.push("/admin/login");
  };

  return (
    <header className="admin-header black-bg">
      <div className="sidebar-toggle-box">
        <div
          className="tooltips"
          data-placement="right"
          data-original-title="Toggle Navigation"
        >
          <List />
        </div>
      </div>
      <Link to="/admin" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="top-menu">
        <ul className="nav pull-right top-menu">
          <li>
            <button className="logout" onClick={() => handleLogout()}>
              Đăng xuất
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
