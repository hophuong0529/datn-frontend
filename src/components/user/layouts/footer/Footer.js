import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";
import service1 from "../../../../assets/images/service-1.png";
import service2 from "../../../../assets/images/service-2.png";
import service3 from "../../../../assets/images/service-3.png";
import service4 from "../../../../assets/images/service-4.png";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <Fragment>
      <div className="wrapper-home-service service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="service-box clearfix">
                <div className="icon">
                  <img data-sizes="auto" src={service1} alt="" />
                </div>
                <div className="detail-sv">
                  <h3>Miễn phí giao hàng</h3>
                  <p className="desc tp_text_color"></p>
                  <p>Với hóa đơn từ 500.000đ</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="service-box clearfix">
                <div className="icon">
                  <img data-sizes="auto" src={service2} alt="" />
                </div>
                <div className="detail-sv">
                  <h3>3 ngày đổi sản phẩm</h3>
                  <p className="desc tp_text_color"></p>
                  <p>Đổi sản phẩm trong vòng 3 ngày</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="service-box clearfix">
                <div className="icon">
                  <img data-sizes="auto" src={service3} alt="" />
                </div>
                <div className="detail-sv">
                  <h3>Mua hàng (9h00-22h00, T2-CN)</h3>
                  <p className="desc tp_text_color"></p>
                  <p>Mua hàng - CSKH 0946920529</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="service-box clearfix">
                <div className="icon">
                  <img
                    data-sizes="auto"
                    style={{ filter: "invert(85%)" }}
                    src={service4}
                    alt=""
                  />
                </div>
                <div className="detail-sv">
                  <h3>Xem trực tiếp tại cửa hàng</h3>
                  <p className="desc tp_text_color"></p>
                  <p>Khu vực Hà Nội và TP.HCM</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="f-start">
          <div className="container">
            <div className="row">
              <Col xs={12} sm={4}>
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="f-contact">
                  <span>Hotline: 094.692.0529</span>
                  <br />
                  <span>Email: cskh@lakey.io</span>
                </div>
              </Col>
              <Col xs={12} sm={3}>
                <div>
                  <p className="f-title">HÀ NỘI (9-21h)</p>
                  <ul>
                    <li>81 Bà Triệu, Hai Bà Trưng</li>
                    <li>241 Chùa Bộc, Đống Đa</li>
                    <li>60 Trần Đại Nghĩa, Hai Bà Trưng</li>
                    <li>226 Nguyễn Trãi, Nam Từ Liêm</li>
                    <li>157 Xuân Thủy, Cầu Giấy</li>
                    <li>7 ngõ 165 Thái Hà, Đống Đa</li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={5}>
                <div>
                  <p className="f-title">TP. HỒ CHÍ MINH (9h30 - 22h)</p>
                  <ul>
                    <li>92 Hồ Tùng Mậu, P.Bến Nghé, Q1</li>
                    <li>459E Nguyễn Đình Chiểu, P.5, Q.3 (ngã tư Cao Thắng)</li>
                    <li>
                      708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)
                    </li>
                    <li>
                      87 Bàu Cát, P.14, Q.Tân Bình (khúc giao Nguyễn Hồng Đào)
                    </li>
                    <li>
                      54A Hoa Lan, P.2, Q.Phú Nhuận (gần Pizza Hut Phan Xích
                      Long)
                    </li>
                  </ul>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </footer>
      <div className="f-end">
        <span>
          © Bản quyền thuộc về Mojiy Việt Nam | Cung cấp bởi Phương Hồ
        </span>
      </div>
    </Fragment>
  );
}
