import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";

const items = [
  {
    label: "首页",
    key: "home",
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
  const [current, setCurrent] = useState("home");
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
