import React, { Fragment, useContext, useState } from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import logo from "../../../../assets/images/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import { UserContext } from "../../contexts/UserContext";
import MiniCart from "../../cartPage/miniCart/MiniCart";
import { CartContext } from "../../contexts/CartContext";
import { notification } from "antd";

export default function Header() {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [hovered, setHovered] = useState(false);

  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };

  const handleLogout = () => {
    setUser([]);
    setCartItems([]);
    openNotification("Đăng xuất thành công.");
  };

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
                <Link to="/" className="logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </Col>
            <Col lg={6} className="head-col-center">
              <form
                className="form-search"
                onSubmit={(e) => history.push("/search?q=" + e.target.value)}
              >
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
                  <Link to="/search?q=gấu+bông">Gấu bông</Link>
                  <Link to="/search?q=văn+phòng">Văn phòng</Link>
                  <Link to="/search?q=dụng+cụ+học+tập">Dụng cụ học tập</Link>
                  <Link to="/search?q=quà+tặng">Quà tặng</Link>
                  <Link to="/search?q=trang+trí">Trang trí</Link>
                </p>
              </div>
            </Col>
            <Col lg={3} className="head-col-right">
              <div className="header-right d-flex">
                <ul className="header-user d-md-block">
                  {user.length !== 0 ? (
                    <Fragment>
                      <li>
                        <Link to="/profile">{user.name} |</Link>
                      </li>
                      <li>
                        <button id="logout" onClick={handleLogout}>
                          Thoát
                        </button>
                      </li>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <li>
                        <Link to="/login">Đăng nhập |</Link>
                      </li>
                      <li>
                        <Link to="/register">Đăng ký</Link>
                      </li>
                    </Fragment>
                  )}
                </ul>
                <div
                  className="count-cart"
                  title="Giỏ hàng"
                  onMouseMove={() => setHovered(true)}
                  onMouseOut={() => setHovered(false)}
                >
                  <div
                    className="count-cart-icon"
                    onClick={() => history.push("/cart")}
                  >
                    <span className="count d-flex align-items-center justify-content-center">
                      {cartItems.length}
                    </span>
                  </div>
                  {user.length !== 0 ? (
                    <MiniCart user={user} hovered={hovered} />
                  ) : (
                    <></>
                  )}
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
