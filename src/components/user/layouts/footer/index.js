import React, { Fragment } from "react";
import service1 from "../../../../assets/images/service-1.png";
import service2 from "../../../../assets/images/service-2.png";
import service3 from "../../../../assets/images/service-3.png";
import service4 from "../../../../assets/images/service-4.png";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "./footer.css";
import { ArrowRight, Envelope, Headset } from "react-bootstrap-icons";

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
      <footer class="footer tp_footer">
        <div class="main-footer">
          <div class="container">
            <div class="row custom_md_3">
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg col_1">
                <div class="footer-col">
                  <h4 class="footer-title tp_footer">VỀ CHÚNG TÔI</h4>
                  <div class="footer-content">
                    <p>
                      Ở Lakey - Phụ kiện và Quà tặng, các bạn có thể tìm thấy
                      rất nhiều items hấp dẫn như gấu bông, văn phòng phẩm,
                      items thời trang...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg col_2">
                <div
                  class="footer-col footer-block"
                  style={{ paddingLeft: 35 }}
                >
                  <h4 class="footer-title tp_footer">HỖ TRỢ MUA HÀNG</h4>
                  <div class="footer-content toggle-footer">
                    <ul>
                      <li class="item">
                        <a href="/" title="Size Guide">
                          <ArrowRight />
                          &nbsp; Size Guide
                        </a>
                      </li>
                      <li class="item">
                        <a href="/" title="Chính sách khách hàng">
                          <ArrowRight />
                          &nbsp;Chính sách khách hàng
                        </a>
                      </li>
                      <li class="item">
                        <a href="/" title="Chính sách bảo hành">
                          <ArrowRight />
                          &nbsp;Chính sách bảo hành
                        </a>
                      </li>
                      <li class="item">
                        <a href="/" title="Chính sách đổi sản phẩm">
                          <ArrowRight />
                          &nbsp;Chính sách đổi sản phẩm
                        </a>
                      </li>
                      <li class="item">
                        <a href="/" title="Giao hàng- thanh toán">
                          <ArrowRight />
                          &nbsp;Giao hàng- thanh toán
                        </a>
                      </li>
                      <li class="item">
                        <a href="/" title="Bảo mật thông tin">
                          <ArrowRight />
                          &nbsp;Bảo mật thông tin
                        </a>
                      </li>
                      <li class="item">
                        <a href="/" title="Tuyển dụng">
                          <ArrowRight />
                          &nbsp;Tuyển dụng
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xs-12 col-sm-6 col-md-3 col-lg col_3 footer_none"
                style={{ paddingLeft: 0 }}
              >
                <div class="footer-col">
                  <h4 class="footer-title tp_footer">THÔNG TIN LIÊN HỆ</h4>
                  <div class="footer-content footer-contact footer-contact53436">
                    <ul>
                      <li class="contact-2 icon">
                        <Headset />
                        &nbsp;CSKH{" "}
                        <span style={{ color: "#a73340" }}>097.654.3210</span>
                      </li>
                      <li class="contact-5 icon">
                        <Headset />
                        &nbsp;Mua hàng{" "}
                        <span style={{ color: "#a73340" }}>097.654.3210</span>
                      </li>
                      <li class="contact-4 icon">
                        <Envelope
                          style={{
                            marginTop: -3.5,
                            fontSize: 17,
                            marginRight: 2,
                          }}
                        />
                        &nbsp;Email{" "}
                        <span style={{ color: "#a73340" }}>
                          <p>cskh@lakey.io</p>
                        </span>
                      </li>
                    </ul>
                    <div class="wrapper-home-newsletter animation-tran">
                      <div class="content-newsletter">
                        <p class="tp_text_color">
                          Đăng kí nhận thông tin ưu đãi và xu hướng mới nhất
                        </p>
                        <div class="form-newsletter">
                          <form accept-charset="UTF-8" class="contact-form">
                            <div class="form-group">
                              <input
                                id="contactFormEmail"
                                class="inputNew form-control newsletter-input"
                                required=""
                                type="email"
                                placeholder="Nhập email của bạn"
                                name="contact[email]"
                                size="18"
                                autocomplete="off"
                              />
                              <button
                                type="submit"
                                name="submitNewsletter"
                                id="contactFormSubmit"
                                class="tp_button"
                              >
                                <span>Gửi</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg col_4">
                <div class="footer-col" style={{ paddingLeft: 15 }}>
                  <h4 class="footer-title tp_footer">Fanpage</h4>
                  <div class="footer-content footer-contact">
                    <div class="footer-static-content">
                      <div
                        class="fb-page fb_iframe_widget"
                        data-href="https://www.facebook.com/Lakey-Ph%E1%BB%A5-ki%E1%BB%87n-Qu%C3%A0-t%E1%BA%B7ng-109491107968552"
                        data-height="300"
                        data-small-header="false"
                        data-adapt-container-width="false"
                        data-hide-cover="false"
                        data-show-facepile="false"
                      >
                        <blockquote
                          cite="https://www.facebook.com/Lakey-Ph%E1%BB%A5-ki%E1%BB%87n-Qu%C3%A0-t%E1%BA%B7ng-109491107968552"
                          class="fb-xfbml-parse-ignore"
                        >
                          <a href="https://www.facebook.com/Lakey-Ph%E1%BB%A5-ki%E1%BB%87n-Qu%C3%A0-t%E1%BA%B7ng-109491107968552">
                            Lakey - Phụ kiện &amp; Quà tặng
                          </a>
                        </blockquote>
                      </div>
                    </div>
                    <div style={{ clear: "both" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="f-end">
        <span>
          © Bản quyền thuộc về <strong>Lakey</strong> Việt Nam | Cung cấp bởi
          <strong> Phương Hồ</strong>
        </span>
      </div>
      <MessengerCustomerChat pageId="109491107968552" appId="469341577668904" />
    </Fragment>
  );
}
