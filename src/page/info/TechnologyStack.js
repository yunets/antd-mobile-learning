import React from "react";
import { Tabs, Radio } from "antd";

const { TabPane } = Tabs;

export class TechnologyStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top"
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <legend>技术栈（正在完善）</legend>
        <div>
          <Radio.Group
            onChange={this.handleModeChange}
            value={mode}
            style={{ marginBottom: 8 }}
          >
            <Radio.Button value="top">水平显示</Radio.Button>
            <Radio.Button value="left">垂直显示</Radio.Button>
          </Radio.Group>
          <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            style={{ height: "auto" }}
          >
            <TabPane tab={`java`} key="1">
              <div height="1000px">
                1.熟悉JVM的运行时数据区。
                <br />
                2.熟悉垃圾回收算法，垃圾回收器，内存分配及回收策略。
                <br />
                3.熟悉java内存模型、线程的生命周期，线程池，多线程异步调用。
                <br />
                4.熟悉java中各种线程安全的锁机制AQS，死锁。
                <br />
                5.熟悉线上排查问题的常用方式。
                <br />
              </div>
            </TabPane>
            <TabPane tab={`Kubernetes`} key="2">
              <div>
                1.熟悉Kubernetes组件和组件之间协同工作原理,并能熟练部署集群。
                <br />
                2.熟悉Pod的常见调度方式及生命周期。
                <br />
                3.熟悉Replication Controller、ReplicaSet、Deployment创建pod。
                <br />
                4.熟悉存储挂载PV、PVC和服务发现Service的ingress和nodeport方式。
                <br />
                5.熟悉Kubernetes 的软件包管理工具Helm。
                <br />
                6.熟练使用kubectl相关命令排查线上问题。
                <br />
                7.熟练使用java进行Kubernetes相应的业务开发。
                <br />
                8.熟练使用CICD相关的工具，进行流水线提高研发效率。
                <br />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
