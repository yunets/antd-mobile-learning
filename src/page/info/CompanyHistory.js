import React from "react";
import { Table } from "antd";

export class CompanyHistory extends React.Component {
  dataSource = [
    {
      key: "1",
      school: "中科曙光",
      qualifications: "大数据研发工程师、云计算研发工程师",
      learningTime: "2015-2018"
    },
    {
      key: "1",
      school: "青岛励图智能科技信息有限公司",
      qualifications: "全栈工程师、项目经理",
      learningTime: "2011-2015"
    }
  ];

  columns = [
    {
      title: "公司",
      dataIndex: "school",
      key: "school"
    },
    {
      title: "职位",
      dataIndex: "qualifications",
      key: "qualifications"
    },
    {
      title: "时间",
      dataIndex: "learningTime",
      key: "learningTime"
    }
  ];

  render() {
    return (
      <div>
        <legend>工作经历</legend>
        <Table dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
