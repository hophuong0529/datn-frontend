import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import AddButton from "../create/addButton";
import EditButton from "../create/editButton";
import "./index.css";

const ColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/colors").then((response) => {
      setColors(response.data);
    });
  }, []);

  const handleDelete = (item) => {
    const colorId = item.id;
    axios
      .post(`http://127.0.0.1:8000/api/color/delete`, { colorId })
      .then(() => {
        alert("Xóa màu thành công.");
        setColors(colors.filter((x) => x.id !== item.id));
      })
      .catch((error) => {
        alert("Rất tiếc, bạn không thể xóa màu này.");
        console.log(error);
      });
  };

  return (
    <>
      <div className="card-top">
        <div className="title">
          <h2>Danh sách các màu sản phẩm</h2>
        </div>
        <div className="button-add">
          <AddButton title="Thêm màu mới" setColors={setColors} />
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "20%" }}>Màu hiển thị</th>
              <th style={{ width: "20%" }}>Tên màu</th>
              <th style={{ width: "25%" }}>Mã màu</th>
              <th style={{ width: "15%" }}>Số lượng bán</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {colors.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td style={{ background: item.code }} />
                <td>{item.name}</td>
                <td>
                  <div className="color-code">{item.code}</div>
                </td>
                <td>{item.quantity_export}</td>
                <td style={{ textAlign: "right" }}>
                  <EditButton
                    title="Sửa thông tin màu sắc"
                    setColors={setColors}
                    color={item}
                  />
                  <button
                    onClick={() => {
                      if (window.confirm("Bạn muốn xóa màu này?"))
                        handleDelete(item);
                    }}
                    style={{
                      color: "#9e312c",
                      paddingRight: "20px",
                      border: "none",
                      background: "none",
                    }}
                  >
                    <TrashFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ColorList;
