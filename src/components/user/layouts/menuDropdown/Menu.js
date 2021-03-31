import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./menu.css";

const menu = (subs) => (
  <Menu>
    {subs.map((item) => (
      <Menu.Item key={item.id} className="level-2-item">
        <Link to={"/sub-category/" + item.id}>{item.name}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default menu;
