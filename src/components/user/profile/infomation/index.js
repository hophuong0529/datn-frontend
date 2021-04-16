import React from "react";
import "./index.css";
import Left from "../layouts/Left";
import Form from "./form/Form";
import Bread from "../layouts/Bread";

export default function Profile() {
  return (
    <main className="mains main-user sty-none">
      <div className="container">
        <div className="row">
          <div className="col-breadcrumb col-md-12">
            <Bread title={"Hồ sơ"} />
          </div>
          <div className="blk-user col-md-12">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <Left />
              </div>
              <div className="col-md-9 col-sm-12">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
