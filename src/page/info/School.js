import React from "react";
import { Table } from "antd";

export class School extends React.Component {
  dataSource = [
    {
      key: "1",
      school: "青岛科技大学",
      qualifications: "本科",
      major: "信息工程",
      learningTime: "2011-2015"
    },
    {
      key: "1",
      school: "青岛科技大学",
      qualifications: "硕士",
      major: "软件工程",
      learningTime: "2015-2018"
    }
  ];

  columns = [
    {
      title: "学校",
      dataIndex: "school",
      key: "school"
    },
    {
      title: "学历",
      dataIndex: "qualifications",
      key: "qualifications"
    },
    {
      title: "专业",
      dataIndex: "major",
      key: "major"
    },
    {
      title: "专业",
      dataIndex: "learningTime",
      key: "learningTime"
    }
  ];

  render() {
    return (
      <div>
        <legend>教育背景</legend>
        <Table dataSource={this.dataSource} columns={this.columns} />;
      </div>
    );
  }
}
