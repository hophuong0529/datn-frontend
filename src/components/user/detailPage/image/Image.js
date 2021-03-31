import { Carousel } from "react-bootstrap";
import "./image.css";

export default function Image(props) {
  const { images } = props;
  return (
    <div className="blk-pview-img">
      <Carousel>
        {images?.map((img) => (
          <Carousel.Item key={img.id}>
            <img
              id="js-pview-uri"
              className="d-block w-100"
              src={process.env.REACT_APP_URL_IMAGE + img.path}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="row">
        <div className="owl-carousel d-flex justify-content-center">
          {images?.map((img) => (
            <div key={img.id} className="item thumbnailUri">
              <img
                className="d-block w-100"
                src={process.env.REACT_APP_URL_IMAGE + img.path}
                alt="First slide"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
