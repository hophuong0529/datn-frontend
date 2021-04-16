import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./table.css";

export default function Table() {
  const [orders, setOrders] = useState([]);
  const [user] = useContext(UserContext);
  const [activeIndex, setActiveIndex] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/order/${user.id}`).then((response) => {
      setOrders(response.data);
    });
  }, [user]);

  const handleOnClick = (index) => {
    const exist = activeIndex.findIndex((x) => x === index) !== -1;
    if (!exist) {
      setActiveIndex([...activeIndex, index]);
    } else {
      setActiveIndex(activeIndex.filter((x) => x !== index));
    }
  };

  return (
    <div className="blk-user-right blk-user-bor full d-block">
      <div className="header-pdd-order">
        <header>
          <h1>Lịch sử đơn hàng</h1>
        </header>
      </div>
      <div className="table-responsive">
        <table className="tableOrder table">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th className="text-center">Ngày</th>
              <th className="text-center">Tổng đơn</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <Fragment key={item.id}>
                <tr className="listItemOrder">
                  <td className="code">
                    <strong>{item.code}</strong>
                  </td>
                  <td className="date text-center">{item.created_at}</td>
                  <td className="text-center">
                    {item.total_bill.toLocaleString()} vnd
                  </td>
                  <td className="status text-center">{item.status}</td>
                  <td className="action text-center">
                    <button onClick={() => handleOnClick(index)}>
                      Xem Chi tiết
                    </button>
                  </td>
                </tr>
                <tr
                  className={`listOrderIf ${
                    activeIndex.findIndex((x) => x === index) !== -1
                      ? "open"
                      : ""
                  }`}
                >
                  <td colSpan="5">
                    <table className="col-md-12">
                      <thead>
                        <tr>
                          <td colSpan="5" className="addressOrder">
                            <label>ĐỊA CHỈ NHẬN HÀNG:</label>
                            <p>Họ tên: {item.receiver.name}</p>
                            <p>Điện thoại: {item.receiver.mobile}</p>
                            <p>Địa chỉ: {item.receiver.address}</p>
                            <p>Hình thức thanh toán: {item.method}</p>
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
                          <td className="text-right" colSpan="2">
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
      <div className="d-block full text-center">
        <ul className="pagination justify-content-center"></ul>
      </div>
    </div>
  );
}
