import React, { useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { PencilFill } from "react-bootstrap-icons";

const EditButton = ({ user, setUsers }) => {
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

  const handleEditUser = ({ isActive }) => {
    axios
      .post(`http://127.0.0.1:8000/api/user/${user.id}`, { isActive })
      .then((res) => {
        alert("Cập nhật thành công");
        setUsers(res.data);
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
        title="Chỉnh sửa tài khoản"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{
            isActive: user.is_active,
          }}
          validationSchema={Yup.object().shape({
            isActive: Yup.string().required("* Vui lòng chọn trạng thái"),
          })}
          onSubmit={(values) => handleEditUser(values)}
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
                    htmlFor="nameuser"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    ID người dùng
                  </label>
                  <div
                    className="col-lg-6 col-md-9"
                    style={{ lineHeight: "35px", fontWeight: "600" }}
                  >
                    {user.id}
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="row">
                  <label
                    htmlFor="nameuser"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Tên người dùng
                  </label>
                  <div
                    className="col-lg-6 col-md-9"
                    style={{ lineHeight: "35px", fontWeight: "600" }}
                  >
                    {user.name}
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
                      id="isActive"
                      name="isActive"
                      value={values.isActive}
                      onChange={handleChange}
                      className="form-control input-sm"
                    >
                      <option value="">Chọn một trạng thái</option>
                      <option value={1}>Đang hoạt động</option>
                      <option value={0}>Bị khóa</option>
                    </select>
                    <small id="isActiveHelpBlock" className="form-text">
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
