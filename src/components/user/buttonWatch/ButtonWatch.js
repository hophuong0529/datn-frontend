import React, { useState } from "react";
import { Modal } from "antd";
import { Eye } from "react-bootstrap-icons";
import "./modal.css";
import Image from "../detailPage/image/Image";
import Info from "../detailPage/info/Info";

const ButtonBuyNow = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
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

  return (
    <>
      <button onClick={showModal}>
        <Eye />
        <span>Xem nhanh</span>
      </button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image images={product.images} />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Info
              product={product}
              colors={product.colors}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ButtonBuyNow;
