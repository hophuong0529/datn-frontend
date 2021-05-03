import axios from "axios";
import React, { useEffect, useState } from "react";
import EditButton from "../create/editButton/index";
import "./index.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <div className="card-top">
        <div className="title">
          <h2>Danh sách các tài khoản đăng ký</h2>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>ID</th>
              <th style={{ width: "10%" }}>Tên</th>
              <th style={{ width: "12%" }}>Số điện thoại</th>
              <th style={{ width: "15%" }}>Email</th>
              <th style={{ width: "20%" }}>Địa chỉ</th>
              <th style={{ width: "13%" }}>Trạng thái</th>
              <th style={{ width: "15%" }}>Ngày tạo</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.is_active === 1 ? "Đang hoạt động" : "Bị khóa"}</td>
                <td>{item.created_at}</td>
                <td style={{ textAlign: "right" }}>
                  <EditButton setUsers={setUsers} user={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
