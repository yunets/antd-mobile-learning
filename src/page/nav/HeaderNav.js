import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

const items = [
  {
    label: "首页",
    key: "/",
    icon: <MailOutlined />
  },
  {
    label: "详细",
    key: "/about",
    icon: <MailOutlined />
  },
  {
    label: "暂无",
    key: "app2",
    icon: <MailOutlined />
  }
];
const HeaderNav = () => {
  const [current, setCurrent] = useState("/");
  const onClick = (e) => {
    console.log("click ", e);
    debugger;
    window.location.href = e.key;
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="dark"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default HeaderNav;
