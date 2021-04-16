import React, { useContext } from "react";
import "./index.css";
import { UserContext } from "../../contexts/UserContext";
import Left from "../layouts/Left";
import Bread from "../layouts/Bread";

export default function ChangePassword() {
  const [user] = useContext(UserContext);
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
                  <form
                    id="formAcount"
                    className="formAcount clearfix"
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
                            id="oldpassword"
                            name="oldpassword"
                            placeholder="Mật khẩu cũ"
                            className="form-control input-sm"
                          />
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
                            id="newpassword"
                            name="newpassword"
                            placeholder="Mật khẩu mới"
                            className="form-control input-sm"
                          />
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
                            id="repassword"
                            name="repassword"
                            placeholder="Xác nhận mật khẩu"
                            className="form-control input-sm"
                          />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
