import axios from "axios";
import React, { useEffect, useState } from "react";
import Paginate from "../../../pagination/Paginate";
import "./index.css";

export const TableProduct = () => {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/statistic/product")
      .then((response) => {
        setProducts(response.data.data);
        setPerPage(response.data.per_page);
        setTotalItemsPage(response.data.total);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    axios
      .get("http://127.0.0.1:8000/api/statistic/product?page=" + pageNumber)
      .then((response) => {
        setProducts(response.data.data);
        setActivePage(pageNumber);
      });
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card-box">
          <h5 className="mt-0 font-16 mb-3">Thống kê số lượng sản phẩm</h5>
          <div className="table-responsive" style={{ marginBottom: 10 }}>
            <table className="table table-striped mails m-0 table table-actions-bar table-centered">
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
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.code}</td>
                    <td>
                      {item.images[0] ? (
                        <img
                          width="50%"
                          src={
                            process.env.REACT_APP_URL_IMAGE +
                            item.images[0].path
                          }
                          alt=""
                        />
                      ) : (
                        <div
                          style={{
                            width: "96.4px",
                            height: "96.4px",
                            margin: "auto",
                          }}
                        >
                          <span>Không có hình ảnh</span>
                        </div>
                      )}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.quantity_import}</td>
                    <td>{item.quantity_export}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginate
            activePage={activePage}
            itemsCountPerPage={perPage}
            totalItemsCount={totalItemsPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
