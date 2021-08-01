import React, { useContext } from "react";
import "./checkout.css";
import Infomation from "./receiver/Receiver";
import Method from "./method/Method";
import Cart from "./cart/Cart";
import { Formik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";
import { useHistory } from "react-router";
import { notification } from "antd";

export default function Checkout() {
  let history = useHistory();
  const [user] = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { totalCart, setTotalCart } = useContext(CartContext);

  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };

  const handleCheckout = ({
    name,
    mobile,
    email,
    address,
    note,
    methodId,
    userId,
  }) => {
    axios
      .post(`http://127.0.0.1:8000/api/order`, {
        name,
        mobile,
        email,
        address,
        note,
        methodId,
        userId,
        cartItems,
        totalCart,
      })
      .then((response) => {
        setCartItems([]);
        setTotalCart(0);
        history.push("/checkout/" + response.data);
      })

      .catch(() => {
        openNotification(
          "Đã xảy ra lỗi. Vui lòng thực hiện lại giao dịch này."
        );
      });
  };

  return (
    <div className="checkout-page container sty-none">
      <Formik
        initialValues={{
          name: user.name,
          mobile: user.mobile,
          email: user.email,
          address: user.address,
          userId: user.id,
          note: "",
          methodId: 1,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(50, "* Tên người nhận chỉ được tối đa 50 ký tự!")
            .required("* Tên người nhận không được để trống!"),
          mobile: Yup.string()
            .max(10, "* Số điện thoại chỉ được tối đa 10 số!")
            .required("* Số điện thoại không được để trống!"),
          email: Yup.string()
            .email("Định dạng email không hợp lệ!")
            .required("* Email không được để trống!"),
          address: Yup.string().required("* Địa chỉ không được để trống!"),
        })}
        onSubmit={(values) => handleCheckout(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form
            id="formCheckOut"
            className="formCheckOut formAcount validate"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <Cart cartItems={cartItems} totalCart={totalCart} />
              <Infomation
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
              />
              <Method
                totalCart={totalCart}
                values={values}
                handleChange={handleChange}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
