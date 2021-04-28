import axios from "axios";
import React, { useEffect, useState } from "react";
import { List, PencilFill, TrashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Paginate from "../../../pagination/Paginate";
import AddButton from "../create/addButton";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  //category
  const [perPageC, setPerPageC] = useState(0);
  const [totalItemsPageC, setTotalItemsPageC] = useState(0);
  const [activePageC, setActivePageC] = useState(1);
  //subcategory
  const [perPageS, setPerPageS] = useState(0);
  const [totalItemsPageS, setTotalItemsPageS] = useState(0);
  const [activePageS, setActivePageS] = useState(1);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data.data);
      setPerPageC(response.data.per_page);
      setTotalItemsPageC(response.data.total);
    });
    axios.get("http://127.0.0.1:8000/api/sub-categories").then((response) => {
      setSubCategories(response.data.data);
      setPerPageS(response.data.per_page);
      setTotalItemsPageS(response.data.total);
    });
  }, []);

  const handlePageCChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/categories?page=" + pageNumber)
      .then((response) => {
        setCategories(response.data.data);
        setActivePageC(pageNumber);
      });
  };

  const handlePageSChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/categories?page=" + pageNumber)
      .then((response) => {
        setSubCategories(response.data.data);
        setActivePageS(pageNumber);
      });
  };

  return (
    <>
      <div className="title-card">
        <h2 style={{ textAlign: "center" }}>Danh sách các danh mục</h2>
      </div>
      <div className="card-body">
        <div className="container-fluid row listCategory">
          <div
            className="col-md-6"
            style={{
              paddingRight: 30,
              borderRight: "rgb(237 237 237) 1px solid",
            }}
          >
            <div className="card-top">
              <div className="title">
                <h5>
                  <List /> Danh mục chính
                </h5>
              </div>
              <div className="button-add">
                <AddButton title="Thêm danh mục sản phẩm chính" sub={0} />
              </div>
            </div>
            <table className="table table-striped" style={{marginBottom: 30}}>
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
            <Paginate
              activePage={activePageC}
              itemsCountPerPage={perPageC}
              totalItemsCount={totalItemsPageC}
              onChange={handlePageCChange}
            />
          </div>
          <div
            className="col-md-6 sub-cate"
            style={{
              paddingLeft: 30,
              borderLeft: "rgb(237 237 237) 1px solid",
            }}
          >
            <div className="card-top">
              <div className="title">
                <h5>
                  <List /> Danh mục phụ
                </h5>
              </div>
              <div className="button-add">
                <AddButton title="Thêm danh mục sản phẩm phụ" sub={1} />
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
              activePage={activePageS}
              itemsCountPerPage={perPageS}
              totalItemsCount={totalItemsPageS}
              onChange={handlePageSChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
