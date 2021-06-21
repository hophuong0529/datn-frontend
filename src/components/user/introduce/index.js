import React from "react";
import "./index.css";
import intro from "../../../assets/images/introduce.png";

export const Introduce = () => {
  return (
    <main className="mains-intro">
      <div className="container">
        <div className="row">
          <div className="land-head col-12 text-center sty-none">
            <h1 className="heading">Giới thiệu về Lakey</h1>
          </div>
          <div className="content col-12">
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 20,
                marginBottom: 0,
                padding: "0 0 21pt",
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span>
                <span style={{ fontSize: 14 }}>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wap",
                    }}
                  >
                    Xin chào các bạn,
                  </span>
                  <span style={{ color: "rgb(0,0,0)" }}>
                    Lakey - Phụ kiện và Quà tặng chúng mình là một chuỗi cửa
                    hàng với vô vàn sản phẩm luôn được cập nhật theo xu hướng
                    hot nhất.
                  </span>
                </span>
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.656,
                marginTop: 0,
                marginBottom: 0,
                padding: "0 0 21pt",
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wap",
                    }}
                  >
                    Ở Lakey - Phụ kiện và Quà tặng, các bạn có thể tìm thấy rất
                    nhiều items hấp dẫn như gấu bông, văn phòng phẩm, items thời
                    trang, phụ kiện điện thoại, sản phẩm idol, đồ trang sức, đồ
                    gia dụng tiện ích,... Hơn thế nữa, không gian cửa hàng siêu
                    cute cũng khiến các tín đồ sống ảo không thể chối từ. Chẳng
                    còn gì thung thướng hơn việc vừa mua được đồ xinh vừa chụp
                    được những tấm hình check-in long lanh lóng lánh phải hem
                    nào?
                  </span>
                </span>
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.656,
                marginTop: 0,
                marginBottom: 0,
                padding: "0 0 21pt",
                marginLeft: 40,
                textAlign: "center",
              }}
            >
              <img alt="" src={intro} style={{ width: 1200, height: 693 }} />
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Cùng sự nỗ lực không ngừng nghỉ, Lakey - Phụ kiện và Quà
                    tặng đã chuyển mình, dần mở rộng và phát triển trở thành
                    chuỗi cửa hàng bán lẻ dẫn đầu trong lĩnh vực kinh doanh Phụ
                    kiện - Quà tặng như hiện nay.
                  </span>
                  <span style={{ color: "rgb(0,0,0)" }}>
                    Ở Hà Nội và TP. Hồ Chí Minh, các bạn có thể mua sắm thoải
                    mái cả tuần tại 11 chi nhánh
                  </span>
                </span>
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    &nbsp;
                  </span>
                </span>
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                      fontWeight: 700,
                    }}
                  >
                    * Hà Nội
                  </span>
                </span>
              </span>
            </p>
            <ul>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      81 Bà Triệu, Hai Bà Trưng - 0968.317.253
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store" className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      Số 241 Chùa Bộc, Đống Đa - 0904.536.337
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      Số 60 Trần Đại Nghĩa, Hai Bà Trưng - 0971.913.545
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      226 Nguyễn Trãi, Nam Từ Liêm (gần ĐH Hà Nội) -
                      0987.545.005
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      Số 157, Xuân Thủy, Cầu Giấy - 0963.819.567
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      Số 7, Ngõ 165 Thái Hà, Đống Đa - 0943.177.784
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                      fontWeight: 700,
                    }}
                  >
                    * TP. Hồ Chí Minh
                  </span>
                </span>
              </span>
            </p>
            <ul>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      92 Hồ Tùng Mậu, P.Bến Nghé, Q1 - 0964.904.992
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      459E Nguyễn Đình Chiểu (ngã tư Cao Thắng), P.5, Q.3 -
                      0932.147.797
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)
                      - 0972.243.708
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      87 Bàu Cát (đoạn khúc giao Nguyễn Hồng Đào), P.14, Q.Tân
                      Bình - 0933.418.487
                    </span>
                  </span>
                </span>
              </li>
              <li className="address-store">
                <span style={{ fontSize: 14 }}>
                  <span>
                    <span
                      style={{
                        backgroundColor: "transparent",
                        verticalAlign: "baseline",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      54A Hoa Lan (cạnh Pizza Hut Phan Xích Long), P.2, Q.Phú
                      Nhuận - 0903.209.850
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Trong giai đoạn tiếp theo, Lakey - Phụ kiện và Quà tặng dự
                    kiến sẽ tiếp tục mở mới các cửa hàng tại các thành phố lớn
                    để có thể phục vụ các bạn một cách tốt nhất. Hy vọng các bạn
                    sẽ luôn đồng hành cùng Lakey trên những chặng đường phía
                    trước!
                  </span>
                </span>
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    &nbsp;
                  </span>
                </span>
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: 1.38,
                marginTop: 0,
                marginBottom: 0,
                textAlign: "justify",
                marginLeft: 40,
              }}
            >
              <span style={{ fontSize: 14 }}>
                <span>
                  <span
                    style={{
                      color: "rgb(0,0,0)",
                      backgroundColor: "transparent",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                      fontStyle: "italic",
                    }}
                  >
                    Thân mến!
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
