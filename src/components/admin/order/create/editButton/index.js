import React, { useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { PencilFill } from "react-bootstrap-icons";

const EditButton = ({ states, order, setOrders }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEditOrder = ({ statusId }) => {
    axios
      .post(`http://127.0.0.1:8000/api/order/${order.id}`, { statusId })
      .then((res) => {
        alert("Cập nhật thành công.");
        setOrders(res.data);
        handleCancel();
      });
  };

  return (
    <>
      <button className="button-edit" onClick={showModal}>
        <PencilFill style={{ marginTop: -5 }} />
      </button>
      <Modal
        style={{ left: 105, marginTop: 90 }}
        title="Chỉnh sửa hóa đơn bán"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{
            statusId: order.status_id,
          }}
          validationSchema={Yup.object().shape({
            statusId: Yup.string().required("* Vui lòng chọn trạng thái"),
          })}
          onSubmit={(values) => handleEditOrder(values)}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form
              id="formAcount"
              className="formAcount clearfix"
              onSubmit={handleSubmit}
            >
              <div className="form-group clearfix">
                <div className="row">
                  <label
                    htmlFor="nameorder"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Mã hóa đơn
                  </label>
                  <div
                    className="col-lg-6 col-md-9"
                    style={{ lineHeight: "35px", fontWeight: "600" }}
                  >
                    {order.code}
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="row">
                  <label
                    htmlFor="nameCategory"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Trạng thái
                  </label>
                  <div className="col-lg-5 col-md-9">
                    <select
                      id="statusId"
                      name="statusId"
                      value={values.statusId}
                      onChange={handleChange}
                      className="form-control input-sm"
                    >
                      <option value="">Chọn một trạng thái</option>
                      {states.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.status}
                        </option>
                      ))}
                    </select>
                    <small id="statusIdHelpBlock" className="form-text">
                      {touched.status && errors.status}
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="row">
                  <label className="col-lg-3 col-md-3 control-label"></label>
                  <div className="col-lg-6 col-md-9">
                    <button type="submit" className="btn btn-pink">
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default EditButton;
