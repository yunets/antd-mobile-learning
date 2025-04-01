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

  getRandomColor = () => {
    return "#87d068";
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
                1.熟练使用常用的开发语言java，python、go、javascript，react和相关的框架Springboot，mybatis，Springcloud，antd等。
                <br />
                2.熟悉数据库mysql、postgresql、mongodb的相关使用和原理。
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
                5.熟悉线上排查问题的常用方式:Arthas、jps、jmap、jstack。
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
            <TabPane tab={`Mysql`} key="3">
              <div>
                1.熟悉主键索引、非主键索引、联合索引、前缀索引的原理，防止索引失效及慢查询问题排查解决索引优化。
                <br />
                2.熟悉mysql的事务原理、隔离级别及锁机制。
                <br />
                3.熟悉redo log、binlog、undolog 、两阶段提交等工作机制。
                <br />
                4.熟悉mysql常用的高可用架构。
                <br />
                <br />
                <Tag color="#87d068">《高性能mysql》</Tag>
                <Tag color="#87d068">《深入mysql实战》</Tag>
                <Tag color="#87d068">《MySQL性能优化和高可用架构实践》</Tag>
                <Tag color="#87d068">
                  《MySQL管理之道：性能调优、高可用与监控》
                </Tag>
                <Tag color="#87d068">《MySQL技术内幕 InnoDB存储引擎》</Tag>
              </div>
            </TabPane>
            <TabPane tab={`Postgresql`} key="4">
              <div>
                1.待更新
                <br />
                <br />
                <br />
                <Tag color="#87d068">《PostgreSQL实战教程》</Tag>
                <Tag color="#87d068">《PostgreSQL实战》</Tag>
                <Tag color="#87d068">《PostgreSQL 数据库内核分析》</Tag>
              </div>
            </TabPane>
            <TabPane tab={`Spring生态圈`} key="5">
              <div>
              1.熟悉Spring ioc和DI。<br />
              2.熟悉Spring bean的生命周期、装配、作用域。<br />
              3.熟悉Spring AOP的原理、。<br />
              3.熟悉Spring事务、事务的隔离级别和传播属性，防止事务失效的方法。<br />
              </div>
            </TabPane>
            <TabPane tab={`方法论`} key="6">
              <div>
                <Tag color="#87d068">《如何阅读一本书》</Tag>

                <Tag color="#87d068">《系统之美》</Tag>
                <Tag color="#87d068">《微习惯》</Tag>
                <Tag color="#87d068">《心流》</Tag>
                <Tag color="#87d068">《原则》</Tag>
                <Tag color="#87d068">《高效能人士的七个习惯》</Tag>
                <Tag color="#87d068">《自私的基因》</Tag>
                <Tag color="#87d068">《增长的极限》</Tag>
                <Tag color="#87d068">《从0到1》</Tag>
                <Tag color="#87d068">《熵:一种新的世界观》</Tag>
                <Tag color="#87d068">《思考，快与慢》</Tag>
                <Tag color="#87d068">《随机漫步的傻瓜》</Tag>
                <Tag color="#87d068">《反脆弱》</Tag>
                <Tag color="#87d068">《黑天鹅》</Tag>
              </div>
            </TabPane>
            <TabPane tab={`人物传记`} key="7">
              <div>
                <Tag color="#87d068">《硅谷钢铁侠》</Tag>
                <Tag color="#87d068">
                  <a
                    href="https://zhuanlan.zhihu.com/p/461399476"
                    target="_blank"
                  >
                    《其他》
                  </a>
                </Tag>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
