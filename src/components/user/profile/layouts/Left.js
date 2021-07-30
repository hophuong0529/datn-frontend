import { notification } from "antd";
import axios from "axios";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import avatar from "../../../../assets/images/avatar.jpg";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

export default function Left() {
  const [user, setUser] = useContext(UserContext);
  const { setCartItems } = useContext(CartContext);
  const token = localStorage.getItem("token");
  const history = useHistory();

  const openNotification = (message) => {
    notification.open({
      message: "Thông báo",
      description: message,
    });
  };

  const handleLogout = () => {
    axios
      .get(`http://127.0.0.1:8000/api/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUser([]);
        setCartItems([]);
        localStorage.removeItem("token");
        openNotification("Đăng xuất thành công.");
        history.push("/");
      });
  };

  return (
    <div className="blk-user-left blk-user-bor full d-block text-center">
      <div className="blk-user-avatar">
        <img src={avatar} alt="avatar" />
        <h2>{user.name}</h2>
      </div>
      <div className="blk-user-nav">
        <ul className="text-left">
          <li>
            <Link to="/profile">Thông tin tài khoản</Link>
          </li>
          <li>
            <Link to="/profile/change-password">Đổi mật khẩu</Link>
          </li>
          <li>
            <Link to="/order/index">Lịch sử đơn hàng</Link>
          </li>
          <li>
            <button onClick={() => handleLogout()}>Đăng xuất</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
