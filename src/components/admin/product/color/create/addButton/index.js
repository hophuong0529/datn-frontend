import React, { useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { HexColorPicker } from "react-colorful";

const AddButton = ({ title, setColors }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [code, setCode] = useState("#ffffff");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreateColor = ({ name }) => {
    axios
      .post(`http://127.0.0.1:8000/api/colors`, { name, code })
      .then((res) => {
        alert("Thêm mới thành công.");
        setColors(res.data);
        handleCancel();
      });
  };

  return (
    <>
      <button className="btn btn-add" onClick={showModal}>
        Thêm màu sắc mới
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
            name: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("* Tên màu không được để trống!"),
          })}
          onSubmit={(values) => handleCreateColor(values)}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <div style={{ display: "flex", margin: "auto" }}>
              <HexColorPicker
                id="color"
                name="color"
                color={code}
                onChange={setCode}
                style={{ margin: "0 30px 0px 90px" }}
              />
              <form
                id="formAcount"
                className="formAcount clearfix"
                onSubmit={handleSubmit}
                style={{ width: "50%" }}
              >
                <div className="form-group clearfix">
                  <div className="row">
                    <label className="col-lg-4 col-md-3 control-label">
                      Tên màu
                    </label>
                    <div className="col-lg-8 col-md-9">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Tên màu"
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
                      htmlFor="addressColor"
                      className="col-lg-4 col-md-3 control-label"
                    >
                      Mã màu
                    </label>
                    <div
                      className="col-lg-8 col-md-9"
                      style={{ lineHeight: "35px" }}
                    >
                      {code}
                    </div>
                  </div>
                </div>
                <div className="form-group clearfix">
                  <div className="row">
                    <label
                      htmlFor="addressColor"
                      className="col-lg-4 col-md-3 control-label"
                    >
                      Màu hiển thị
                    </label>
                    <div className="col-lg-8 col-md-9">
                      <div
                        style={{
                          lineHeight: "35px",
                          background: code,
                          height: 36.5,
                        }}
                        className="form-control"
                      ></div>
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
            </div>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddButton;
