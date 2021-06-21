import React from "react";
import "./index.css";
import hn from "../../../assets/images/hn.jpg";
import hcm from "../../../assets/images/hcm.jpg";

export const StoreList = () => {
  return (
    <main className="mains-store">
      <div className="container">
        <div className="row">
          <div className="land-head col-lg-12 col-12 text-center sty-none">
            <h1 className="d-block">Hệ thống cửa hàng</h1>
          </div>
          <div className="maps col-lg-12 col-12">
            <div className="item d-block full">
              <header className="d-flex align-items-center justify-content-between">
                <h3>Khu vực Hà Nội</h3>
              </header>
              <article>
                <img
                  data-sizes="auto"
                  className="full lazyautosizes lazyloaded"
                  src={hn}
                  alt="Khu vực Hà Nội"
                  sizes="1110px"
                />
              </article>
            </div>
            <div className="item d-block full">
              <header className="d-flex align-items-center justify-content-between">
                <h3>Khu vực HCM</h3>
              </header>
              <article>
                <img
                  data-sizes="auto"
                  className="full lazyautosizes lazyloaded"
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
