import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

const HeaderNav = () => {
  const [current, setCurrent] = useState("tle");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      mode="horizontal"
      theme="light"
      selectedKeys={[current]}
      onClick={onClick}
    >
      <SubMenu key="tle" title="首页" label="label1"></SubMenu>
      <SubMenu key="tle2" title="详细" label="label2"></SubMenu>
      <SubMenu key="tle3" title="书籍" label="label4"></SubMenu>
    </Menu>
  );
};
export default HeaderNav;
