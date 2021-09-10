import React from "react";
import { Steps } from "antd-mobile";
import {
  CheckCircleFilled,
  ClockCircleFilled,
  DollarCircleFilled
} from "@ant-design/icons";
import { MyNav } from "./page/nav/MyNav";
const { Step } = Steps;

export default function App() {
  return (
    <div className="App">
      <MyNav />
      <h1>this is a test !!</h1>
      <hr />

      <Steps direction="vertical">
        <Step
          title="填写机构信息"
          status="finish"
          description="完成时间：2020-12-01 12:30"
        />
        <Step
          title="签约机构"
          status="finish"
          description="完成时间：2020-12-01 12:30"
        />
        <Step
          title="关联服务区"
          status="finish"
          description="完成时间：2020-12-01 12:30"
        />
        <Step title="审批失败" status="error" />
      </Steps>
    </div>
  );
}
