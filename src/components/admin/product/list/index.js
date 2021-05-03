import { PencilFill, TrashFill } from "react-bootstrap-icons";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import Paginate from "../../../pagination/Paginate";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeProduct, setActiveProduct] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data.data);
      setPerPage(response.data.per_page);
      setTotalItemsPage(response.data.total);
    });
  }, []);

  const handleOnClick = (id) => {
    const exist = activeProduct.findIndex((x) => x === id) !== -1;
    if (!exist) {
      setActiveProduct([...activeProduct, id]);
    } else {
      setActiveProduct(activeProduct.filter((x) => x !== id));
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
    <>
      <div className="card-top">
        <div className="title">
          <h2>Danh sách các sản phẩm</h2>
        </div>
        <div className="button-add">
          <Link className="btn btn-add" to="/admin/product/create">
            Thêm sản phẩm mới
          </Link>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "6%" }}>ID</th>
              <th style={{ width: "10%" }}>Mã sản phẩm</th>
              <th style={{ width: "25%" }}>Hình ảnh</th>
              <th style={{ width: "15%" }}>Tên</th>
              <th style={{ width: "15%" }}>Đơn giá</th>
              <th style={{ width: "10%" }}>Số lượng</th>
              <th style={{ width: "9%" }}>Giảm giá</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody className="listProduct">
            {products.map((product) => (
              <Fragment key={product.id}>
                <tr onClick={() => handleOnClick(product.id)}>
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
                    activeProduct.findIndex((x) => x === product.id) !== -1
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
                            <br />- {color.name} (Số lượng: {color.quantity})
                          </span>
                        ))}
                      </span>
                    </p>
                    <p>
                      <b>Nhà cung cấp:</b> {product.producer.name}
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
        <Paginate
          activePage={activePage}
          itemsCountPerPage={perPage}
          totalItemsCount={totalItemsPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ProductList;
