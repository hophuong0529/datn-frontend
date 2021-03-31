import React, { Fragment, useState } from "react";
import "./filterBar.css";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

export default function FilterBar(props) {
  const { categories } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Fragment>
      <div className="filter-groups d-block full clearfix">
        <div
          className="filter-title d-flex align-items-center justify-content-between"
          data-toggle="collapse"
          data-target="#fi-cat"
          aria-expanded="true"
        >
          <h3>Danh mục sản phẩm</h3>
          <i className="fa fa-plus"></i>
        </div>
        <ul className="filter-nav collapse show" id="fi-cat">
          {categories?.map((cat, index) => (
            <li key={index}>
              <Link
                to={
                  cat.category_id
                    ? "/sub-category/" + cat.id
                    : "/category/" + cat.id
                }
              >
                {cat.name}
              </Link>
              {cat.subs ? (
                <Fragment>
                  <span
                    onClick={() => handleOnClick(index)}
                    className="drop d-inline-flex align-items-center justify-content-center collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <DownOutlined />
                  </span>
                  <ul
                    className={`collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    {cat.subs.map((sbcat) => (
                      <li key={sbcat.id}>
                        <Link to={"/sub-category/" + sbcat.id}>
                          {sbcat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ) : (
                <Fragment />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
