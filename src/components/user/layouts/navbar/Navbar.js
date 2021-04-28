import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Dropdown } from "antd";
import axios from "axios";
import menu from "../menuDropdown/Menu";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <div className="navagation">
      <div className="container js-container">
        <div className="row">
          <ul className="col flex justify-content-between">
            <li className="all">
              <Link to="/product">TẤT CẢ</Link>
            </li>
            {categories.map((item) => (
              <Dropdown key={item.id} overlay={menu(item.subs)}>
                <li className="has-dropdown">
                  <Link to={"/category/" + item.id}>{item.name}</Link>
                </li>
              </Dropdown>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
