import axios from "axios";
import React, { useEffect, useState } from "react";
import { List, TrashFill } from "react-bootstrap-icons";
import Paginate from "../../../../pagination/Paginate";
import AddButton from "../create/addButton";
import EditButton from "../create/editButton";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  //category
  const [perCatPage, setPerCatPage] = useState(0);
  const [totalCatPage, setTotalCatPage] = useState(0);
  const [activeCatPage, setActiveCatPage] = useState(1);
  //subcategory
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data.data);
      setPerCatPage(response.data.per_page);
      setTotalCatPage(response.data.total);
    });

    axios.get("http://127.0.0.1:8000/api/sub-categories").then((response) => {
      setSubCategories(response.data.data);
      setPerPage(response.data.per_page);
      setTotalItemsPage(response.data.total);
    });
  }, []);

  const categoryPageChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/categories?page=" + pageNumber)
      .then((response) => {
        setCategories(response.data.data);
        setActiveCatPage(pageNumber);
      });
  };

  const subCategoryPageChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/sub-categories?page=" + pageNumber)
      .then((response) => {
        setSubCategories(response.data.data);
        setActivePage(pageNumber);
      });
  };

  const handleDelete = (item, sub) => {
    const categoryId = item.id;
    if (sub) {
      axios
        .post(`http://127.0.0.1:8000/api/sub-category/delete`, { categoryId })
        .then(() =>
          setSubCategories(subCategories.filter((x) => x.id !== item.id))
        )
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`http://127.0.0.1:8000/api/category/delete`, { categoryId })
        .then(() => setCategories(categories.filter((x) => x.id !== item.id)))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="title-card">
        <h2 style={{ textAlign: "center" }}>Danh sách các danh mục</h2>
      </div>
      <div className="card-body">
        <div className="container-fluid row listCategory">
          <div
            className="col-md-5"
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
                <AddButton
                  title="Thêm danh mục sản phẩm chính"
                  sub={0}
                  setCategories={setCategories}
                />
              </div>
            </div>
            <table className="table table-striped" style={{ marginBottom: 30 }}>
              <thead>
                <tr>
                  <th style={{ width: "8%" }}>ID</th>
                  <th style={{ width: "42%" }}>Tên danh mục</th>
                  <th style={{ width: "25%" }}>Số lượng bán</th>
                  <th style={{ width: "25%" }}></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>
                    <td>{cat.quantity_export}</td>
                    <td style={{ textAlign: "right" }}>
                      <EditButton
                        title="Chỉnh sửa danh mục chính"
                        category={cat}
                        sub={0}
                      />
                      <button
                        onClick={() => {
                          if (window.confirm("Bạn muốn xóa danh mục này?"))
                            handleDelete(cat);
                        }}
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
              activePage={activeCatPage}
              itemsCountPerPage={perCatPage}
              totalItemsCount={totalCatPage}
              onChange={categoryPageChange}
            />
          </div>
          <div
            className="col-md-7 sub-cate"
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
                <AddButton
                  title="Thêm danh mục sản phẩm phụ"
                  sub={1}
                  categories={categories}
                  setSubCategories={setSubCategories}
                />
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "8%" }}>ID</th>
                  <th style={{ width: "29%" }}>Tên danh mục phụ</th>
                  <th style={{ width: "26%" }}>Tên danh mục chính</th>
                  <th style={{ width: "17%" }}>Số lượng bán</th>
                  <th style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody>
                {subCategories.map((sub) => (
                  <tr key={sub.id}>
                    <td>{sub.id}</td>
                    <td>{sub.name}</td>
                    <td>{sub.category?.name}</td>
                    <td>{sub.quantity_export}</td>
                    <td style={{ textAlign: "right" }}>
                      <EditButton
                        title="Chỉnh sửa danh mục phụ"
                        category={sub}
                        sub={1}
                        categories={categories}
                      />
                      <button
                        onClick={() => {
                          if (window.confirm("Bạn muốn xóa danh mục này?"))
                            handleDelete(sub, sub);
                        }}
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
              onChange={subCategoryPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
