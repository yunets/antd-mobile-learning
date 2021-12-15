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
    this.state = { visibleResume: true };
  }

  componentDidMount() {
    this.test();
  }

  test = () => {
    let a = null;
    //prompt("test", "test");
    if (a === "test1") {
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
            pass 后的内容
            <UserInfo />
            <School />
            <TechnologyStack />
            <ProjectHistory />
            <BackTop />
          </div>
        ) : (
          <Button type="primary" onClick={() => this.test()}>
            输入查看密码
          </Button>
        )}
      </div>
    );
  }
}
