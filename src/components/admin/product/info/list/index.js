import { PencilFill, TrashFill } from "react-bootstrap-icons";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import Paginate from "../../../../pagination/Paginate";
import no_image from "../../../../../assets/images/no-image.png";
import { Modal } from "antd";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [product, setProduct] = useState({});

  const showModal = (selectProduct) => {
    setIsModalVisible(true);
    setProduct(selectProduct);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data.data);
      setPerPage(response.data.per_page);
      setTotalItemsPage(response.data.total);
    });
  }, []);

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
      <Modal
        style={{ left: 105 }}
        visible={isModalVisible}
        title="Thông tin chi tiết sản phẩm"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-pro">
          <h4 style={{ marginBottom: 0 }}>{product.name}</h4>
          <br />
          <b>Mã sản phẩm:</b> {product.code}&emsp;&emsp;
          <b>Danh mục sản phẩm:</b> {product.sub?.name}
          <br />
          <b>Màu sắc: </b>
          <span>
            {product.colors?.map((color) => (
              <span key={color.id}>
                {color.name} (Số lượng: {color.quantity}) &emsp;&emsp;
              </span>
            ))}
          </span>
          &emsp;&emsp;
          <b>Sản phẩm bán chạy: </b>
          {product.is_top === 1 ? "Có" : "Không"}
          <br />
          <b>Giá nhập:</b> {product.price_import?.toLocaleString()}{" "}
          VNĐ&emsp;&emsp;
          <b>Giá bán:</b> {product.price?.toLocaleString()} VNĐ&emsp;&emsp;
          <b>Giảm giá:</b> {product.discount}% <br />
          <b>Nhà cung cấp: </b>
          {product.producer?.name} <br />
          <b>Ngày tạo:</b> {product.created_at} <br />
          <b>Mô tả:</b>
          <span
            className="descrip-pro"
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          ></span>
          <br />
          <b>Hình ảnh:</b>
          <div className="container-fluid imgProduct">
            <div className="row">
              {product.images?.map((img) => (
                <div className="col-md-3" key={img.id}>
                  <img
                    src={process.env.REACT_APP_URL_IMAGE + img.path}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "6%" }}>ID</th>
              <th style={{ width: "10%" }}>Mã sản phẩm</th>
              <th style={{ width: "20%" }}>Hình ảnh</th>
              <th style={{ width: "23%" }}>Tên</th>
              <th style={{ width: "12%" }}>Giá bán</th>
              <th style={{ width: "10%" }}>Số lượng</th>
              <th style={{ width: "9%" }}>Giảm giá</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody className="listProduct">
            {products.map((product) => (
              <Fragment key={product.id}>
                <tr onClick={() => showModal(product)}>
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
                      <img src={no_image} alt="" style={{ width: "50%" }} />
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
