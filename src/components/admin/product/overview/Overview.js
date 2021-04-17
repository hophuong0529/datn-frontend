import {
  EmojiSmileUpsideDown,
  PencilFill,
  PlusSquare,
  TrashFill,
} from "react-bootstrap-icons";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./overview.css";
import Paginate from "../../../pagination/Paginate";

function Overview() {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeIndex, setActiveIndex] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data.data);
      setPerPage(response.data.per_page);
      setTotalItemsPage(response.data.total);
    });
  }, []);

  const handleOnClick = (index) => {
    const exist = activeIndex.findIndex((x) => x === index) !== -1;
    if (!exist) {
      setActiveIndex([...activeIndex, index]);
    } else {
      setActiveIndex(activeIndex.filter((x) => x !== index));
    }
  };

  const handlePageChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/products?page=" + pageNumber)
      .then((response) => {
        setProducts(response.data.data);
        setActivePage(pageNumber);
      });
  };
  const handleDelete = (item) => {
    const productId = item.id;
    axios
      .post(`http://127.0.0.1:8000/api/product/delete`, { productId })
      .then(() => setProducts(products.filter((x) => x.id !== item.id)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div id="DIV_admin_3">
        <div id="DIV_admin_4">
          <div id="DIV_admin_5">
            <div id="DIV_admin_6">
              <h2 id="H2_admin_7">
                Quản lý <b id="B_admin_8">Sản phẩm</b>
              </h2>
            </div>
            <div id="DIV_admin_9">
              <Link to="/admin/product/add" id="A_admin_10">
                <PlusSquare />
                <span id="SPAN_admin_12">Thêm sản phẩm mới</span>
              </Link>
            </div>
          </div>
        </div>
        <table id="TABLE_admin_16" className="table table-striped">
          <thead>
            <tr>
              <th style={{ textAlign: "center", width: "5%" }}>ID</th>
              <th style={{ textAlign: "center", width: "10%" }}>Mã sản phẩm</th>
              <th style={{ textAlign: "center", width: "25%" }}>Hình ảnh</th>
              <th style={{ textAlign: "center", width: "15%" }}>Tên</th>
              <th style={{ textAlign: "center", width: "15%" }}>Đơn giá</th>
              <th style={{ textAlign: "center", width: "10%" }}>Số lượng</th>
              <th style={{ textAlign: "center", width: "10%" }}>Giảm giá</th>
              <th style={{ textAlign: "center", width: "10%" }}></th>
            </tr>
          </thead>
          <tbody className="listProduct">
            {products.map((product, index) => (
              <Fragment key={product.id}>
                <tr
                  style={{ textAlign: "center" }}
                  onClick={() => handleOnClick(index)}
                >
                  <td>{product.id}</td>
                  <td>{product.code}</td>
                  <td>
                    {product.images[0] ? (
                      <img
                        width="50%"
                        src={
                          process.env.REACT_APP_URL_IMAGE +
                          product.images[0].path
                        }
                        alt=""
                      />
                    ) : (
                      <div
                        style={{
                          width: "96.4px",
                          height: "96.4px",
                          margin: "auto",
                        }}
                      >
                        <span>Không có hình ảnh</span>
                      </div>
                    )}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price.toLocaleString()} VNĐ</td>
                  <td>{product.quantity}</td>
                  <td>{product.discount}%</td>
                  <td style={{ textAlign: "right" }}>
                    <Link
                      to={"/admin/product/edit/" + product.id}
                      style={{
                        paddingRight: "20px",
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      <PencilFill />
                    </Link>
                    <button
                      onClick={() => {
                        if (window.confirm("Bạn muốn xóa sản phẩm này?"))
                          handleDelete(product);
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
                <tr
                  className={`productDetail${
                    activeIndex.findIndex((x) => x === index) !== -1
                      ? " open"
                      : ""
                  }`}
                >
                  <td colSpan="4">
                    <p>
                      <b>Tên sản phẩm:</b> {product.name}
                    </p>
                    <p>
                      <b>Mã sản phẩm:</b> {product.code}
                    </p>
                    <p>
                      <b>Màu sắc: </b>
                      <span>
                        {product.colors.map((color) => (
                          <span key={color.id}>
                            <br />
                            - {color.name} (Số lượng: {color.quantity})
                          </span>
                        ))}
                      </span>
                    </p>
                    <p>
                      <b>Xưởng sản xuất:</b> {product.producer.name}
                    </p>
                    <p>
                      <b>Danh mục sản phẩm:</b> {product.sub.name}
                    </p>
                    <p>
                      <b>Giá sản phẩm:</b> {product.price.toLocaleString()}{" "}
                      VNĐ&emsp;&emsp;
                      <b>Số lượng:</b> {product.quantity}
                    </p>
                    <p>
                      <b>Giảm giá:</b> {product.discount}%&emsp;&emsp;
                      <b>Sản phẩm bán chạy: </b>
                      {product.is_top === 1 ? "Có" : "Không"}
                    </p>
                    <p>
                      <b>Mô tả:</b>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      ></span>
                    </p>
                    <p>
                      <b>Ngày tạo:</b> {product.created_at}
                    </p>
                  </td>
                  <td colSpan="4">
                    {product.images.map((img) => (
                      <div className="imgProduct" key={img.id}>
                        <img
                          src={process.env.REACT_APP_URL_IMAGE + img.path}
                          alt=""
                        />
                      </div>
                    ))}
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Paginate
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={totalItemsPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Overview;
