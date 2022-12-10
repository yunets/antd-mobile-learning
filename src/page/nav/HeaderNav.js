import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />
  },
  {
    label: "Navigation Two",
    key: "app2",
    icon: <AppstoreOutlined />
  }
];
const HeaderNav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default HeaderNav;
