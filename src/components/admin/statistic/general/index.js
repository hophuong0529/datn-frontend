import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipboardCheck, Gift, Person } from "react-bootstrap-icons";
import { TableProduct } from "../table";
import "./index.css";

export const General = () => {
  const [statistic, setStatistic] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/statistic").then((response) => {
      setStatistic(response.data);
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div>
            <h4 className="header-title mb-3">
              Chào mừng bạn đến với trang quản trị viên của LAKEY!
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div>
            <div className="card-box widget-inline">
              <div className="row">
                <div className="col-xl-3 col-sm-6 widget-inline-box">
                  <div className="text-center p-3">
                    <h2 className="mt-2">
                      <span className="vnd">VNĐ</span>
                      <b>{statistic.revenue?.toLocaleString()}</b>
                    </h2>
                    <p className="text-muted mb-0">Doanh thu</p>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 widget-inline-box">
                  <div className="text-center p-3">
                    <h2 className="mt-2">
                      <Gift
                        className="mdi mdi-access-point-network mr-2"
                        style={{ color: "#32863f" }}
                      />
                      <b>{statistic.product}</b>
                    </h2>
                    <p className="text-muted mb-0">Sản phẩm</p>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 widget-inline-box">
                  <div className="text-center p-3">
                    <h2 className="mt-2">
                      <ClipboardCheck
                        className="mdi mdi-black-mesa mr-2"
                        style={{ color: "#ff7a7a" }}
                      />
                      <b>{statistic.order}</b>
                    </h2>
                    <p className="text-muted mb-0">Đơn hàng</p>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="text-center p-3">
                    <h2 className="mt-2">
                      <Person
                        className="mdi mdi-black-mesa mr-2"
                        style={{ color: "#7575ff" }}
                      />
                      <b>{statistic.user}</b>
                    </h2>
                    <p className="text-muted mb-0">Tài khoản</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableProduct />
    </div>
  );
};
