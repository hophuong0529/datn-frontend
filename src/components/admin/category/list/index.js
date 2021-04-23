import axios from "axios";
import React, { useEffect, useState } from "react";
import { List, PencilFill, TrashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Paginate from "../../../pagination/Paginate";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/sub-categories").then((response) => {
      setSubCategories(response.data.data);
      setPerPage(response.data.per_page);
      setTotalItemsPage(response.data.total);
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/sub-categories?page=" + pageNumber)
      .then((response) => {
        setSubCategories(response.data.data);
        setActivePage(pageNumber);
      });
  };
  return (
    <>
      <div className="title-card">
        <h2 style={{ textAlign: "center" }}>Danh sách các danh mục</h2>
      </div>
      <div className="card-body">
        <div className="container-fluid row listCategory">
          <div className="col-md-6" style={{ paddingRight: 15 }}>
            <div className="card-top">
              <div className="title">
                <h5>
                  <List /> Danh mục chính
                </h5>
              </div>
              <div className="button-add">
                <div className="button-add">
                  <button className="btn btn-add">Thêm danh mục mới</button>
                </div>
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>ID</th>
                  <th style={{ width: "25%" }}>Tên danh mục</th>
                  <th style={{ width: "40%" }}>Tên các danh mục phụ</th>
                  <th style={{ width: "25%" }}></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>
                    <td>
                      {cat.subs.map((sub) => (
                        <p key={sub.id} style={{ marginBottom: 0 }}>
                          {sub.name}
                        </p>
                      ))}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Link
                        to={"/admin/category/edit/" + cat.id}
                        style={{
                          paddingRight: "20px",
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        <PencilFill />
                      </Link>
                      <button
                        // onClick={() => {
                        //   if (window.confirm("Bạn muốn xóa sản phẩm này?"))
                        //     handleDelete(cat);
                        // }}
                        style={{
                          color: "#9e312c",
                          paddingRight: "20px",
                          border: "none",
                          background: "none",
                        }}
                      >
                        <TrashFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6 sub-cate" style={{ paddingLeft: 15 }}>
            <div className="card-top">
              <div className="title">
                <h5>
                  <List /> Danh mục phụ
                </h5>
              </div>
              <div className="button-add">
                <div className="button-add">
                  <button className="btn btn-add">Thêm danh mục mới</button>
                </div>
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>ID</th>
                  <th style={{ width: "60%" }}>Tên danh mục phụ</th>
                  <th style={{ width: "25%" }}></th>
                </tr>
              </thead>
              <tbody>
                {subCategories.map((sub) => (
                  <tr key={sub.id}>
                    <td>{sub.id}</td>
                    <td>{sub.name}</td>
                    <td style={{ textAlign: "right" }}>
                      <Link
                        to={"/admin/category/edit/" + sub.id}
                        style={{
                          paddingRight: "20px",
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        <PencilFill />
                      </Link>
                      <button
                        // onClick={() => {
                        //   if (window.confirm("Bạn muốn xóa sản phẩm này?"))
                        //     handleDelete(cat);
                        // }}
                        style={{
                          color: "#9e312c",
                          paddingRight: "20px",
                          border: "none",
                          background: "none",
                        }}
                      >
                        <TrashFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Paginate
              activePage={activePage}
              itemsCountPerPage={perPage}
              totalItemsCount={totalItemsPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
