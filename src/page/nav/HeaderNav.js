import React from "react";
import { Button } from "antd";

import { Menu } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { NavLink as Link } from "react-router-dom";

export class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          key: "/home",
          icon: React.createElement(UserOutlined),
          label: <Link to="/home">概览</Link>
        },
        {
          key: "/home/user",
          icon: React.createElement(UserOutlined),
          label: "用户管理",
          children: [
            {
              key: "/home/user/list",
              label: <Link to="/home/user/list">成员管理</Link>
            },
            {
              key: "/home/user/auth",
              label: <Link to="/home/user/auth">权限设置</Link>
            }
          ]
        }
      ]
    };
  }

  openChange() {
    console.log("OpenChange");
  }

  render() {
    return (
      <div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/home"]}
          defaultOpenKeys={["/home"]}
          style={{
            height: "100%",
            borderRight: 0
          }}
          items={this.state.items}
          onOpenChange={() => this.openChange()}
        />
      </div>
    );
  }
}
