import React from "react";
import { Descriptions, Badge } from "antd";

export class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <legend></legend>
        <Descriptions title="基本信息" bordered>
          <Descriptions.Item label="姓名">刘云生</Descriptions.Item>
          <Descriptions.Item label="院校专业">
            青岛科技大学(软件工程)
          </Descriptions.Item>
          <Descriptions.Item label="学历">硕士研究生</Descriptions.Item>
          <Descriptions.Item label="英语等级">六级</Descriptions.Item>

          <Descriptions.Item label="电话（微信）">
            15063036525
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">578888218@qq.com</Descriptions.Item>
          <Descriptions.Item label="目前公司" span={2}>
            中科曙光
          </Descriptions.Item>
          <Descriptions.Item label="工作状态" span={3}>
            <Badge status="processing" text="在职" />
          </Descriptions.Item>

          

          <Descriptions.Item label="个人评价" span={3}>
            （1）七年以上工作经验，皮实耐糙，靠谱，全栈工程师，意向岗位架构师、JAVA研发工程师、python研发工程师。
            <br />
            （2）符合程序员的特征属于内敛、灵活、执着，皮实，责任心强。
            <br />
            （3）善于学习和不断总结，喜欢具有挑战性的工作，技术博客访问量100万++。
            <br />
            （4）善于沟通协调团队成员高效完成目标，乐于帮助团队成员解决问题，共同成长。

            <br />
          </Descriptions.Item>
          <Descriptions.Item label="技术博客" span={3}>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://liuyunshengsir.blog.csdn.net/"
              >
                https://liuyunshengsir.blog.csdn.net/
              </a>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="在线简历" span={3}>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://liuyunshengsir.netlify.app/"
              >
                https://liuyunshengsir.netlify.app/
              </a>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}
