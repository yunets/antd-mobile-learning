import React from "react";
import { List, Avatar } from "antd";

export class ProjectHistory extends React.Component {
  data = [
    {
      title: "大数据与人工智能实验平台1"
    },
    {
      title: "大数据与人工智能实验平台2"
    },
    {
      title: "大数据与人工智能实验平台3"
    },
    {
      title: "大数据与人工智能实验平台4"
    }
  ];

  render() {
    return (
      <div>
        <legend>项目背景</legend>
        <List itemLayout="vertical">
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href>曙光云产品（2020.08-至今）</a>}
              description="SpringBoot、springcloud、Kubernetes、Docker、Openstack、Vue、React"
            />
            <div>
              <List
                header={
                  <div>
                    曙光云提供基础的资源管理服务， 包含虚拟化、大数据组件、AI
                    等多种基础能力；具备集 IaaS、PaaS 和 SaaS 为一体的产品能力。
                  </div>
                }
                footer={<div></div>}
                bordered
              >
                <List.Item>
                  <div>
                    1.主要负责曙光云RDS后台接口开发。
                    <br />
                    2.数据库的主从方案的调研。
                    <br />
                    3.微服务注册重新调研升级和配置规划。
                    <br />
                    4.集群模式下websocket的实现。
                    <br />
                    5.推动协助全栈云各小组从Mysql兼容Postgres。
                    <br />
                    6.调研实现prometheus监控数据库状态，loki日志收集。
                    <br />
                    7.协助同事流水线的使用及问题排查。
                    <br />
                  </div>
                </List.Item>
              </List>
            </div>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <a href>重庆XX大学智慧校园大数据项目（2020.08-2021.04）</a>
              }
              description="Hadoop、Yarn、Zookeeper、Hive、Spark、Elasticsearch、oozie、Nifi、SpringBoot、React、Antd"
            />
            <div>
              <List
                header={
                  <div>
                    利用大数据的相关服务组件搭建校园数据仓库，将人事数据、学工数据，教务数据，一卡通数据，
                    上网行为数据，图书馆数据，就业数据等抽取到数据仓库，根据教育行业国家标准进行数据治理、共享、分析、可视化。
                  </div>
                }
                footer={<div></div>}
                bordered
              >
                <List.Item>
                  <div>
                    1.与客户交流调研确认需求。
                    <br />
                    2.数据仓库的搭建
                    <br />
                    3.全部的数据抽取工作
                    <br />
                    4.数据可视化后台接口编写。
                    <br />
                  </div>
                </List.Item>
              </List>
            </div>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <a href>青岛XX大学智慧校园大数据项目（2019.08-2019.07）</a>
              }
              description="Hadoop、Yarn、Zookeeper、Hive、Spark、Elasticsearch、oozie、Nifi、SpringBoot、React、Antd"
            />
            <div>
              <List
                header={
                  <div>
                    利用大数据的相关服务组件搭建校园数据仓库，将人事数据、学工数据，教务数据，一卡通数据，
                    上网行为数据，图书馆数据，就业数据等抽取到数据仓库，根据教育行业国家标准进行数据治理、共享、分析、可视化。
                  </div>
                }
                footer={<div></div>}
                bordered
              >
                <List.Item>
                  <div>
                    1.与客户交流调研确认需求。
                    <br />
                    2.数据仓库的搭建
                    <br />
                    3.全部的数据抽取工作
                    <br />
                    4.数据可视化后台接口开发。
                    <br />
                    5.数据可视化前端页面开发。
                    <br />
                    6.后期运维维护。
                    <br />
                  </div>
                </List.Item>
              </List>
            </div>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <a href>大数据与人工智能实验平台产品（2018.01-2019.07）</a>
              }
              description="Kubernetes、Docker、Tensorflow、Caffe、Pytorch、Hadoop、Yarn、
              Zookeeper、Hive、Spark、Elasticsearch、oozie、Nifi、SpringBoot、React、Antd"
            />
            <div>
              <List
                header={
                  <div>
                    项目主要客户是学校，产品是辅助学生做大数据和人工智能实验的，分为实验平台，考试系统，课程管理系统。
                    通过制作大数据和人工智能的Docker镜像，利用Kubernetes快速创建出实验环境，
                    方便学生实验，考试以及实验过程的沟通。
                  </div>
                }
                footer={<div></div>}
                bordered
              >
                <List.Item>
                  <div>
                    1.提出容器可视化方案 ，编写相关的ansible部署脚本。
                    <br />
                    2. 制作基于可视化的大数据和人工智能镜像。
                    <br />
                    3.通过k8s的java
                    api实现容器的申请和释放，容器桌面的定向替换等。
                    <br />
                    4.实验平台的直播分享功能前后端开发。
                    <br />
                    5.考试系统的试卷管理，考试管理功能前后端开发。
                    <br />
                    6.实验报告，实验笔记的功能，学生首页，管理员首页的功能前后端开发。
                    <br />
                  </div>
                </List.Item>
              </List>
            </div>
          </List.Item>
        </List>
      </div>
    );
  }
}
