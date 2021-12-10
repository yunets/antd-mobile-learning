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
        <List
          itemLayout="vertical"
          dataSource={this.data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？"
              />
              <div>
                <List
                  header={<div>KubeOperator介绍</div>}
                  footer={<div></div>}
                  bordered
                >
                  <List.Item>
                    <div>
                      而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。
                      尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
                      <br />
                      而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。
                      尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
                      <br />
                      而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。
                      尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
                      <br />
                      而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。
                      尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
                      <br />
                    </div>
                  </List.Item>
                </List>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
