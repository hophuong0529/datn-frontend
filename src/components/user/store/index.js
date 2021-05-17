import React from "react";
import "./index.css";
import hn from "../../../assets/images/hn.jpg";
import hcm from "../../../assets/images/hcm.jpg";

export const StoreList = () => {
  return (
    <main class="mains-store">
      <div class="container">
        <div class="row">
          <div class="land-head col-lg-12 col-12 text-center sty-none">
            <h1 class="d-block">Hệ thống cửa hàng</h1>
          </div>
          <div class="maps col-lg-12 col-12">
            <div class="item d-block full">
              <header class="d-flex align-items-center justify-content-between">
                <h3>Khu vực Hà Nội</h3>
              </header>
              <article>
                <img
                  data-sizes="auto"
                  class="full lazyautosizes lazyloaded"
                  src={hn}
                  alt="Khu vực Hà Nội"
                  sizes="1110px"
                />
              </article>
            </div>
            <div class="item d-block full">
              <header class="d-flex align-items-center justify-content-between">
                <h3>Khu vực HCM</h3>
              </header>
              <article>
                <img
                  data-sizes="auto"
                  class="full lazyautosizes lazyloaded"
                  src={hcm}
                  alt="Khu vực HCM"
                  sizes="1110px"
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
