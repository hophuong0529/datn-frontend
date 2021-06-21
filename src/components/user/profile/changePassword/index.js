import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../contexts/UserContext";
import Left from "../layouts/Left";
import Bread from "../layouts/Bread";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

export default function ChangePassword() {
  const [user] = useContext(UserContext);
  const Schema = Yup.object().shape({
    oldPassword: Yup.string().required("* Mật khẩu cũ không được để trống!"),
    newPassword: Yup.string().required("* Mật khẩu mới không được để trống!"),
    rePassword: Yup.string().when("newPassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "* Mật khẩu không trùng khớp!"
      ),
    }),
  });

  const handleChangePassword = ({ oldPassword, newPassword }) => {
    axios
      .post(`http://127.0.0.1:8000/api/profile/change-password/${user.id}`, {
        oldPassword,
        newPassword,
      })
      .then((response) => {
        alert("Cập nhật thành công");
      })
      .catch(() => {
        alert("Vui lòng nhập lại mật khẩu chính xác.");
      });
  };

  return (
    <main className="mains main-user sty-none">
      <div className="container">
        <div className="row">
          <div className="col-breadcrumb col-md-12">
            <Bread title={"Thay đổi mật khẩu"} />
          </div>
          <div className="blk-user col-md-12">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <Left user={user} />
              </div>
              <div className="col-md-9 col-sm-12">
                <div className="blk-user-right blk-user-bor full d-block">
                  <header>
                    <h1>THAY ĐỔI MẬT KHẨU</h1>
                    <div className="content">
                      Bạn nên cập nhập mật khẩu thường xuyên vì lý do bảo mật
                    </div>
                  </header>
                  <Formik
                    initialValues={{
                      oldPassword: "",
                      newPassword: "",
                      rePassword: "",
                    }}
                    validationSchema={Schema}
                    onSubmit={(values) => handleChangePassword(values)}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                    }) => (
                      <form
                        id="formAcount"
                        className="formAcount clearfix"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group clearfix">
                          <div className="row">
                            <label
                              htmlFor="oldpassword"
                              className="col-lg-3 col-md-3 control-label"
                            >
                              Mật khẩu cũ:
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <input
                                type="password"
                                id="oldPassword"
                                name="oldPassword"
                                onChange={handleChange}
                                value={values.oldPassword}
                                placeholder="Mật khẩu cũ"
                                className="form-control input-sm"
                              />
                              <small
                                id="passwordHelpBlock"
                                className="form-text"
                              >
                                {touched.oldPassword && errors.oldPassword}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row">
                            <label
                              htmlFor="newpassword"
                              className="col-lg-3 col-md-3 required control-label"
                            >
                              Mật khẩu mới:
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                onChange={handleChange}
                                value={values.newPassword}
                                placeholder="Mật khẩu mới"
                                className="form-control input-sm"
                              />
                              <small
                                id="passwordHelpBlock"
                                className="form-text"
                              >
                                {touched.newPassword && errors.newPassword}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row">
                            <label
                              htmlFor="repassword"
                              className="col-lg-3 col-md-3 control-label"
                            >
                              Xác nhận mật khẩu:
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <input
                                type="password"
                                id="rePassword"
                                name="rePassword"
                                onChange={handleChange}
                                value={values.rePassword}
                                placeholder="Xác nhận mật khẩu"
                                className="form-control input-sm"
                              />
                              <small
                                id="passwordHelpBlock"
                                className="form-text"
                              >
                                {touched.rePassword && errors.rePassword}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row">
                            <label
                              htmlFor="repassword"
                              className="col-lg-3 col-md-3 control-label"
                            ></label>
                            <div className="col-lg-6 col-md-9">
                              <button type="submit" className="btn btn-pink">
                                Xác nhận
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
