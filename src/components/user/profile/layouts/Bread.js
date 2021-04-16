import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export default function Bread(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/profile">Thông tin cá nhân</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
