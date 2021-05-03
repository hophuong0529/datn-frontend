import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import EditButton from "../create/editButton";
import "./index.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [states, setStates] = useState([]);
  const [activeIndex, setActiveIndex] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/orders").then((response) => {
      setOrders(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/states").then((response) => {
      setStates(response.data);
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

  return (
    <>
      <div className="card-top">
        <div className="title">
          <h2>Danh sách các hóa đơn bán</h2>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-orders">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>ID</th>
              <th style={{ width: "10%" }}>Mã đơn hàng</th>
              <th style={{ width: "12%" }}>Tên người đặt</th>
              <th style={{ width: "15%" }}>Tổng tiền</th>
              <th style={{ width: "20%" }}>PT thanh toán</th>
              <th style={{ width: "13%" }}>Trạng thái</th>
              <th style={{ width: "15%" }}>Ngày tạo</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <Fragment>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.code}</td>
                  <td>{item.user.name}</td>
                  <td>{item.total_bill.toLocaleString()} VNĐ</td>
                  <td>{item.method.name}</td>
                  <td>{item.status.status}</td>
                  <td>{item.created_at}</td>
                  <td style={{ textAlign: "right" }}>
                    <EditButton
                      setOrders={setOrders}
                      order={item}
                      states={states}
                    />
                    <button
                      onClick={() => handleOnClick(index)}
                      style={{
                        color: "#9e312c",
                        paddingRight: "20px",
                        border: "none",
                        background: "none",
                      }}
                    >
                      <CaretDownFill />
                    </button>
                  </td>
                </tr>
                <tr
                  className={`listOrderIf${
                    activeIndex.findIndex((x) => x === index) !== -1
                      ? " open"
                      : ""
                  }`}
                >
                  <td colSpan="8">
                    <table className="table-pro col-md-12">
                      <thead>
                        <tr>
                          <td
                            colSpan="10"
                            className="addressOrder"
                            style={{
                              backgroundColor: "#fff",
                              borderTop: "none",
                              textAlign: "left",
                            }}
                          >
                            <label>ĐỊA CHỈ NHẬN HÀNG:</label>
                            <p>Họ tên: {item.receiver.name}</p>
                            <p>Điện thoại: {item.receiver.mobile}</p>
                            <p>Địa chỉ: {item.receiver.address}</p>
                            <p>Hình thức thanh toán: {item.method.name}</p>
                            <p>
                              <b>Ghi chú:</b> {item.receiver.note}
                            </p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th width="10%">Ảnh</th>
                          <th width="50%">Tên sản phẩm</th>
                          <th width="10%">Số lượng</th>
                          <th width="15%">Đơn giá</th>
                          <th width="15%">Thành tiền</th>
                        </tr>
                        {item.details.map((detail) => (
                          <tr key={detail.id}>
                            <td>
                              <img
                                width="80"
                                height="60"
                                src={
                                  process.env.REACT_APP_URL_IMAGE +
                                  detail.product.images[0].path
                                }
                                alt=""
                              />
                            </td>
                            <td>
                              {detail.product.name} - {detail.product.color}(
                              {detail.product.code})
                            </td>
                            <td>{detail.quantity}</td>
                            <td>{detail.price_sale.toLocaleString()} VNĐ</td>
                            <td>{detail.total_item.toLocaleString()} VNĐ</td>
                          </tr>
                        ))}
                        <tr className="total">
                          <td colSpan="3"></td>
                          <td className="text-right" colSpan="2" style={{marginTop: 10}}>
                            <p>
                              <b>TỔNG TIỀN: </b>
                              {(item.total_bill - 35000).toLocaleString()} VNĐ
                            </p>
                            <p>
                              <b>PHÍ VẬN CHUYỂN: </b>35,000 VNĐ
                            </p>
                            <p>
                              <b>TỔNG CỘNG: </b>
                              <span className="red">
                                {item.total_bill.toLocaleString()} VNĐ
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderList;
