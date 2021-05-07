import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import AddButton from "../create/addButton";
import EditButton from "../create/editButton";

const ProducerList = () => {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/producers").then((response) => {
      setProducers(response.data);
    });
  }, []);

  const handleDelete = (item) => {
    const producerId = item.id;
    axios
      .post(`http://127.0.0.1:8000/api/producer/delete`, { producerId })
      .then(() => setProducers(producers.filter((x) => x.id !== item.id)))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="card-top">
        <div className="title">
          <h2>Danh sách các nhà cung cấp</h2>
        </div>
        <div className="button-add">
          <AddButton
            title="Thêm nhà cung cấp mới"
            setProducers={setProducers}
          />
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>ID</th>
              <th style={{ width: "30%" }}>Tên nhà cung cấp</th>
              <th style={{ width: "35%" }}>Địa chỉ</th>
              <th style={{ width: "10%" }}>Số hàng nhập</th>
              <th style={{ width: "10%" }}>Số hàng xuất</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {producers.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.quantity_import}</td>
                <td>{item.quantity_export}</td>
                <td style={{ textAlign: "right" }}>
                  <EditButton
                    title="Sửa thông tin nhà sản xuất"
                    setProducers={setProducers}
                    producer={item}
                  />
                  <button
                    onClick={() => {
                      if (window.confirm("Bạn muốn xóa nhà cung cấp này?"))
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

export default ProducerList;
