import React, { useContext, useState } from "react";
import { Modal } from "antd";
import { Eye } from "react-bootstrap-icons";
import "./modal.css";
import Image from "../detailPage/image/Image";
import Info from "../detailPage/info/Info";
import { UserContext } from "../contexts/UserContext";

const SeeButton = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [user] = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [colorId, setColorId] = useState(0);

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
              productId={product.id}
              price={product.price}
              discount={product.discount}
              userId={user.id}
              colorId={
                product.colors.length === 1 ? product.colors[0].id : colorId
              }
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              setColorId={setColorId}
              setQuantity={setQuantity}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SeeButton;
