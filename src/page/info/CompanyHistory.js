import React from "react";
import { Table } from "antd";

export class CompanyHistory extends React.Component {
  dataSource = [
    {
      key: "1",
      school: "中科曙光",
      qualifications: "大数据研发工程师、云计算研发工程师",
      learningTime: "2018年7月-至今"
    },
    {
      key: "2",
      school: "中科曙光（实习）",
      qualifications: "大数据研发工程师",
      learningTime: "2018年1月-2018年6月"
    },
    {
      key: "3",
      school: "青岛励图高科信息有限公司（实习）",
      qualifications: "全栈工程师、项目经理",
      learningTime: "2015年4月-2017年12月"
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
