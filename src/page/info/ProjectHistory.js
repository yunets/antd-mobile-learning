import React from "react";
import { List, Avatar } from "antd";

export class ProjectHistory extends React.Component {
  data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
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
                description="Ant Design, <br/> a design language for background applications, is refined by Ant UED Team"
              />
              <div>
                <List
                  header={<div>Header</div>}
                  footer={<div>Footer</div>}
                  bordered
                  split="false"
                  dataSource={this.data}
                  renderItem={(item) => <List.Item>{item.title}</List.Item>}
                />
              </div>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, <br/> a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
