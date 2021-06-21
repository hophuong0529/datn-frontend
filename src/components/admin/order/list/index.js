import axios from "axios";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import EditButton from "../create/editButton";
import "./index.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [states, setStates] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [order, setOrder] = useState({});

  const showModal = (selectProduct) => {
    setIsModalVisible(true);
    setOrder(selectProduct);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/orders").then((response) => {
      setOrders(response.data);
    });
    axios.get("http://127.0.0.1:8000/api/states").then((response) => {
      setStates(response.data);
    });
  }, []);

  return (
    <>
      <div className="card-top">
        <div className="title">
          <h2>Danh sách các đơn đặt hàng</h2>
        </div>
      </div>
      <Modal
        style={{ left: 105 }}
        visible={isModalVisible}
        title="Thông tin chi tiết đơn hàng"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <h4 style={{ marginLeft: 5 }}>Đơn hàng mã : {order.code}</h4>
          <table className="modal-table col-md-12">
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
                  <label style={{ fontSize: 16 }}>ĐỊA CHỈ NHẬN HÀNG:</label>
                  <p style={{ fontSize: 14.5 }}>
                    <b>Họ tên:</b> {order.receiver?.name}&emsp;&emsp;
                    <b>Điện thoại:</b> {order.receiver?.mobile} <br />
                    <b>Địa chỉ:</b> {order.receiver?.address} <br />
                    <b>Hình thức thanh toán:</b> {order.method?.name}
                    <p>
                      <b>Ghi chú:</b> {order.receiver?.note}
                    </p>
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
              {order.details?.map((detail) => (
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
                <td
                  className="text-right"
                  colSpan="2"
                  style={{ marginTop: 10 }}
                >
                  <p>
                    <b>TỔNG TIỀN: </b>
                    {(order.total_bill - 35000)?.toLocaleString()} VNĐ
                  </p>
                  <p>
                    <b>PHÍ VẬN CHUYỂN: </b>35,000 VNĐ
                  </p>
                  <p>
                    <b>TỔNG CỘNG: </b>
                    <span className="red">
                      {order.total_bill?.toLocaleString()} VNĐ
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
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
              <th style={{ width: "13%" }}>Ngày tạo</th>
              <th style={{ width: "14%" }}></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.user.name}</td>
                <td>{item.total_bill.toLocaleString()} VNĐ</td>
                <td>{item.method.name}</td>
                <td>{item.status.status}</td>
                <td>{item.created_at}</td>
                <td style={{ textAlign: "right" }}>
                  <button
                    onClick={() => showModal(item)}
                    style={{
                      color: "#9e312c",
                      paddingRight: 10,
                      border: "none",
                      background: "none",
                    }}
                  >
                    Chi tiết
                  </button>
                  <EditButton
                    style={{ paddingRight: 10 }}
                    setOrders={setOrders}
                    order={item}
                    states={states}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderList;
