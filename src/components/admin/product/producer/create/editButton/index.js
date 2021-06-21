import React, { useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { PencilFill } from "react-bootstrap-icons";

const EditButton = ({ title, producer, setProducers }) => {
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

  const handleEditProducer = ({ name, address, quantity }) => {
    axios
      .post(`http://127.0.0.1:8000/api/producer/${producer.id}`, {
        name,
        address,
        quantity,
      })
      .then((res) => {
        alert("Cập nhật thành công");
        setProducers(res.data);
        handleCancel();
      });
  };

  return (
    <>
      <button className="button-edit" onClick={showModal}>
        <PencilFill />
      </button>
      <Modal
        style={{ left: 105, marginTop: 90 }}
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{
            name: producer.name,
            address: producer.address,
            quantity: producer.quantity_import,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(
              "* Tên nhà cung cấp không được để trống!"
            ),
            address: Yup.string().required(
              "* Địa chỉ nhà cung cấp không được để trống!"
            ),
          })}
          onSubmit={(values) => handleEditProducer(values)}
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
                    htmlFor="nameProducer"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Tên nhà cung cấp
                  </label>
                  <div className="col-lg-6 col-md-9">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Tên nhà cung cấp"
                      className="form-control input-sm"
                    />
                    <small id="nameHelpBlock" className="form-text">
                      {touched.name && errors.name}
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="row">
                  <label
                    htmlFor="addressProducer"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Địa chỉ
                  </label>
                  <div className="col-lg-6 col-md-9">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Địa chỉ"
                      className="form-control input-sm"
                    />
                    <small id="addressHelpBlock" className="form-text">
                      {touched.address && errors.address}
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="row">
                  <label
                    htmlFor="quantityImport"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Số lượng hàng nhập
                  </label>
                  <div className="col-lg-6 col-md-9">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={values.quantity}
                      onChange={handleChange}
                      placeholder="Số lượng hàng nhập"
                      className="form-control input-sm"
                      style={{ textAlign: "left" }}
                    />
                    <small id="quantityHelpBlock" className="form-text">
                      {touched.quantity && errors.quantity}
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="row">
                  <label className="col-lg-3 col-md-3 control-label"></label>
                  <div className="col-lg-6 col-md-9">
                    <button type="submit" className="btn btn-pink">
                      Tạo mới
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
