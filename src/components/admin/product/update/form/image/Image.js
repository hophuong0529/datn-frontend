import React, { Fragment } from "react";
import { CloseButton } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import "./image.css";

export default function Image(props) {
  const { getRootProps, getInputProps } = useDropzone();
  const { setPreImages, preImages, images, setImages } = props;

  const handleImagesChange = (e) => {
    setImages(e.target.files);
  };
  const handleRemoveImage = (item) => {
    setPreImages(preImages.filter((x) => x !== item));
    setImages(Array.from(images).filter((x) => x !== item));
  };

  return (
    <Fragment>
      <div className="container-fluid">
          <div className="row">
            {preImages?.map((img) => (
              <div
                className="col-md-3"
                style={{ position: "relative", padding: "0 15px 0 0" }}
                key={img.id}
              >
                <CloseButton onClick={() => handleRemoveImage(img)} />
                <img
                  src={process.env.REACT_APP_URL_IMAGE + img.path}
                  component="img"
                  alt=""
                  style={{ width: "100%", margin: "0px 10px 10px 0px" }}
                />
              </div>
            ))}
            {Array.from(images).map((img, index) => (
              <div
                className="col-md-3"
                style={{ position: "relative", padding: "0 15px 0 0" }}
                key={index}
              >
                <CloseButton onClick={() => handleRemoveImage(img)} />
                <img
                  src={URL.createObjectURL(img)}
                  component="img"
                  alt=""
                  style={{ width: "100%", margin: "0px 10px 10px 0px" }}
                />
              </div>
            ))}
          </div>
      </div>
      <div {...getRootProps({ className: "dropzone", tabIndex: 0 })}>
        <input {...getInputProps()} onChange={handleImagesChange} />
        <span>Kéo, thả một số tệp vào đây hoặc nhấp để chọn tệp</span>
      </div>
    </Fragment>
  );
}
