import React from "react";
import { Button } from "antd";
import { BackTop } from "antd";
import { UserInfo } from "../info/UserInfo";
import { School } from "../info/School";
import { TechnologyStack } from "../info/TechnologyStack";
import { ProjectHistory } from "../info/ProjectHistory";

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleResume: false };
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail = () => {
    let a = prompt("请输入查看简历密码", "");
    if (a === "6525") {
      this.setState({
        visibleResume: true
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.visibleResume ? (
          <div>
            <UserInfo />
            <School />
            <TechnologyStack />
            <ProjectHistory />
            <BackTop />
          </div>
        ) : (
          <Button type="primary" onClick={() => this.getDetail()}>
            输入查看密码：联系作者索要密码
          </Button>
        )}
      </div>
    );
  }
}
