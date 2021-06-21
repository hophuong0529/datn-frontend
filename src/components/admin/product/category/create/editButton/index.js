import React, { useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { PencilFill } from "react-bootstrap-icons";

const EditButton = ({ title, category, sub, categories }) => {
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

  const handleEditCategory = ({ name, categoryId }) => {
    if (sub === 1) {
      axios
        .post(`http://127.0.0.1:8000/api/sub-category/${category.id}`, {
          name,
          categoryId,
        })
        .then(() => {
          alert("Cập nhật thành công");
          handleCancel();
        });
    } else {
      axios
        .post(`http://127.0.0.1:8000/api/category/${categoryId}`, { name })
        .then(() => {
          alert("Cập nhật thành công");
          handleCancel();
        });
    }
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
            name: category.name,
            categoryId: sub === 1 ? category.category?.id : category.id,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("* Tên danh mục không được để trống!"),
            categoryId: Yup.string().required("* Vui lòng chọn danh mục chính"),
          })}
          onSubmit={(values) => handleEditCategory(values)}
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
                    htmlFor="nameCategory"
                    className="col-lg-3 col-md-3 control-label"
                  >
                    Tên danh mục
                  </label>
                  <div className="col-lg-6 col-md-9">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Tên danh mục"
                      className="form-control input-sm"
                    />
                    <small id="nameHelpBlock" className="form-text">
                      {touched.name && errors.name}
                    </small>
                  </div>
                </div>
              </div>
              {sub === 1 ? (
                <div className="form-group clearfix">
                  <div className="row">
                    <label
                      htmlFor="nameCategory"
                      className="col-lg-3 col-md-3 control-label"
                    >
                      Danh mục chính
                    </label>
                    <div className="col-lg-5 col-md-9">
                      <select
                        id="categoryId"
                        name="categoryId"
                        value={values.categoryId}
                        onChange={handleChange}
                        className="form-control input-sm"
                      >
                        <option value="">Chọn một danh mục</option>
                        {categories.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <small id="categoryIdHelpBlock" className="form-text">
                        {touched.categoryId && errors.categoryId}
                      </small>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
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
