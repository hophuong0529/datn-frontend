import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="navagation">
      <div className="container js-container">
        <div className="row">
          <ul className="col flex justify-content-between">
            <li className="all">
              <Link to="">TẤT CẢ</Link>
            </li>
            {categories.map((item) => (
                <li key={item.id} className="has-dropdown">
                <Link to="#">{item.name}</Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
}
