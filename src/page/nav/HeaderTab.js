import React from "react";
import { Tabs } from "antd";
import { Resume } from "./Resume";
import MyParticle from "../MyParticle";
export class HeaderTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleResume: false };
  }

  componentDidMount() {
    // this.getDetail();
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="首页" key="1">
            <MyParticle />
            <Resume />
          </Tabs.TabPane>
          <Tabs.TabPane tab="介绍" key="2">
            <Resume />
          </Tabs.TabPane>
          <Tabs.TabPane tab="打印" key="3">
            <Resume />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}
