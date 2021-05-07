import React from "react";
import {
  ClipboardCheck,
  Gift,
  ListCheck,
  Palette,
  Person,
  Shop,
} from "react-bootstrap-icons";
import { TableProduct } from "../table";
import "./index.css";

export const General = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <h4 class="header-title mb-3">Welcome !</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div>
            <div class="card-box widget-inline">
              <div class="row">
                <div class="col-xl-2 col-sm-6 widget-inline-box">
                  <div class="text-center p-3">
                    <h2 class="mt-2">
                      <Gift
                        className="mdi mdi-access-point-network mr-2"
                        style={{ color: "#32863f" }}
                      />
                      <b>89</b>
                    </h2>
                    <p class="text-muted mb-0">Sản phẩm</p>
                  </div>
                </div>
                <div class="col-xl-2 col-sm-6 widget-inline-box">
                  <div class="text-center p-3">
                    <h2 class="mt-2">
                      <ClipboardCheck
                        class="mdi mdi-black-mesa mr-2"
                        style={{ color: "#ff7a7a" }}
                      />
                      <b>65</b>
                    </h2>
                    <p class="text-muted mb-0">Đơn hàng</p>
                  </div>
                </div>
                <div class="col-xl-2 col-sm-6 widget-inline-box">
                  <div class="text-center p-3">
                    <h2 class="mt-2">
                      <Person
                        className="mdi mdi-black-mesa mr-2"
                        style={{ color: "#9898ff" }}
                      />
                      <b>325</b>
                    </h2>
                    <p class="text-muted mb-0">Tài khoản</p>
                  </div>
                </div>
                <div class="col-xl-2 col-sm-6 widget-inline-box">
                  <div class="text-center p-3">
                    <h2 class="mt-2">
                      <Shop
                        className="mdi mdi-access-point-network mr-2"
                        style={{ color: "#b5b55a" }}
                      />
                      <b>89</b>
                    </h2>
                    <p class="text-muted mb-0">Nhà cung cấp</p>
                  </div>
                </div>
                <div class="col-xl-2 col-sm-6 widget-inline-box">
                  <div class="text-center p-3">
                    <h2 class="mt-2">
                      <Palette
                        className="mdi mdi-access-point-network mr-2"
                        style={{ color: "#ffb889" }}
                      />
                      <b>89</b>
                    </h2>
                    <p class="text-muted mb-0">Màu sắc</p>
                  </div>
                </div>
                <div class="col-xl-2 col-sm-6">
                  <div class="text-center p-3">
                    <h2 class="mt-2">
                      <ListCheck
                        className="mdi mdi-access-point-network mr-2"
                        style={{ color: "#d05ecd" }}
                      />
                      <b>89</b>
                    </h2>
                    <p class="text-muted mb-0">Danh mục</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableProduct />
    </div>
  );
};
