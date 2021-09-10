import React from "react";
import { Table } from "antd";

export class MyNav extends React.Component {
  dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    }
  ];

  columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ];

  render() {
    return (
      <div>
        <Table dataSource={this.dataSource} columns={this.columns} />;
        <legend>this is myhao1234</legend>
        <Form />
      </div>
    );
  }
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
