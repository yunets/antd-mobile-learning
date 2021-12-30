import React from "react";
import { Button } from "antd";
import { BackTop } from "antd";
import { UserInfo } from "../info/UserInfo";
import { School } from "../info/School";
import { TechnologyStack } from "../info/TechnologyStack";
import { ProjectHistory } from "../info/ProjectHistory";
import { CompanyHistory } from "../info/CompanyHistory";

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleResume: false };
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail = () => {
    let a = "6525";
    //prompt("请输入查看简历密码", "");
    if (a === "6525") {
      this.setState({
        visibleResume: true
      });
    } else {
      //alert("密码错误，请重新输入！！！");
    }
  };

  render() {
    return (
      <div>
        {this.state.visibleResume ? (
          <div>
            <UserInfo />
            <School />
            <CompanyHistory />
            <TechnologyStack />
            <ProjectHistory />
            <BackTop />
          </div>
        ) : (
          <Button
            type="primary"
            onClick={() => this.getDetail()}
            style={{ float: "center" }}
          >
            输入查看简历密码：请联系作者578888218@qq.com索要密码
          </Button>
        )}
      </div>
    );
  }
}
