import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import banner3 from "../../../../assets/images/banner3.png";
import blink1 from "../../../../assets/images/blink1.jpg";
import blink2 from "../../../../assets/images/blink2.jpg";

export default function Banner() {
  return (
    <div className="slider-group">
      <div className="row">
        <div className="col-slider col-lg-9" style={{ padding: "0 5px 0 0" }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          className="col-slider col-lg-3 d-lg-block"
          style={{ padding: "0 0 5px 5px" }}
        >
          <div className="banner-right" style={{ marginBottom: 6 }}>
            <img src={blink1} alt="" />
          </div>
          <div className="banner-right" style={{ paddingBottom: 5 }}>
            <img src={blink2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
