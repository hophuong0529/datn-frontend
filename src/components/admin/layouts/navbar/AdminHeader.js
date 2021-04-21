import React from "react";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "./header.css";
import logo from "../../../../assets/images/logo.png";

export default function AdminHeader() {
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
            <a className="logout" href="login.html">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
