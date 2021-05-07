import React from "react";
import "./index.css";

export const TableProduct = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card-box">
          <h5 class="mt-0 font-14 mb-3">Thống kê số lượng sản phẩm</h5>
          <div className="table-responsive">
            <table className="table table-hover mails m-0 table table-actions-bar table-centered">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>ID</th>
                  <th style={{ width: "15%" }}>Mã sản phẩm</th>
                  <th style={{ width: "20%" }}>Hình ảnh</th>
                  <th style={{ width: "25%" }}>Tên</th>
                  <th style={{ width: "15%" }}>Số lượng nhập</th>
                  <th style={{ width: "15%" }}>Số lượng bán</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
