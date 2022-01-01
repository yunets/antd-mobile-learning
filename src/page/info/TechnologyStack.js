import React from "react";
import { Tabs, Radio, Tag } from "antd";

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
            defaultActiveKey="0"
            tabPosition={mode}
            style={{ height: "auto" }}
          >
            <TabPane tab={`技能广度`} key="0">
              <div height="1000px">
                1.熟练使用常用的开发语言java，js，react和相关的框架springboot，mybatis，Springcloud，antd等。
                <br />
                2.熟悉数据库mysql、postgres、sqlserver、Oracle的相关使用和原理。
                <br />
                3.熟悉消息中间件rabbitmq和kafka的使用。
                <br />
                4.熟悉大数据生态圈Hadoop、Yarn、Zookeeper、Hive、Spark、Elasticsearch、oozie、Nifi、flink的使用。
                <br />
                5.熟悉docker和容器编排引擎Kubernetes的使用和原理。
                <br />
                6.熟悉云计算openstack和zstack的使用。
                <br />
                7.熟悉软件设计的原则，有良好的的代码编写习惯。
              </div>
            </TabPane>

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
                <br />
                <Tag color="#87d068">《代码整洁之道》</Tag>
                <Tag color="#87d068">《重构：改善既有代码的设计》</Tag>
                <Tag color="#87d068">《深入理解Java 虚拟机》</Tag>
                <Tag color="magenta">《Java性能权威指南》</Tag>
                <Tag color="magenta">《Java并发编程实践》</Tag>
                <Tag color="#87d068">《Java并发编程的艺术》</Tag>
                <Tag color="#87d068">《Netty权威指南》</Tag>
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
                <Tag color="#87d068">《kubernetes in action中文版》</Tag>
                <Tag color="#87d068">《kubernetes 实战》</Tag>
                <Tag color="#87d068">《kubernetes 权威指南》</Tag>
                <Tag color="#87d068">《kubernetes 进阶实战》</Tag>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
