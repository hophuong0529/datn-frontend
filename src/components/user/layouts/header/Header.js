import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import logo from "../../../../assets/images/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="header sty-none">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col text-right">
              <p>
                <span style={{ fontSize: 14 }}>
                  <Link to="#">HỆ THỐNG CỬA HÀNG</Link>
                </span>
              </p>
              <p>
                <span style={{ fontSize: 14 }}>
                  <Link to="#">VỀ LAKEY</Link>
                </span>
              </p>
              <p>
                <span style={{ fontSize: 14 }}>
                  <Link to="#">TUYỂN DỤNG</Link>
                </span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content top">
        <Container>
          <Row className="align-center">
            <Col lg={3} className="head-col-left">
              <div className="js-menu-logo d-inline-flex align-items-center justify-content-center">
                <Link to="#" className="logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </Col>
            <Col lg={6} className="head-col-center">
              <form className="form-search">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    name="q"
                    placeholder={"Tìm kiếm sản phẩm"}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-pink" type="submit">
                      <Search />
                    </button>
                  </span>
                </div>
              </form>
              <div className="research">
                <p>
                  <Link to="#">Gấu bông</Link>
                  <Link to="#">Văn phòng</Link>
                  <Link to="#">Dụng cụ học tập</Link>
                  <Link to="#">Quà tặng</Link>
                  <Link to="#">Trang trí</Link>
                </p>
              </div>
            </Col>
            <Col lg={3} className="head-col-right">
              <div className="header-right d-flex">
                <ul className="header-user d-md-block">
                  <li>
                    <Link to="/login">Đăng nhập |</Link>
                  </li>
                  <li>
                    <Link to="#">Đăng ký</Link>
                  </li>
                </ul>
                <div className="count-cart" title="Giỏ hàng">
                  <div className="count-cart-icon">
                    <span className="count d-flex align-items-center justify-content-center">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="clearfix"></div>
      </div>
      <Navbar />
    </header>
  );
}
