import React from "react";
import { Button } from "antd";

export class MyNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pass: false };
  }

  componentDidMount() {
    this.test("test");
  }

  test = (e) => {
    let a = prompt("test", "test");
    if (a === "test1") {
      this.setState({
        pass: true
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.pass ? (
          <div>pass 后的内容</div>
        ) : (
          <Button type="primary" onClick={() => this.test("2222")}>
            Button
          </Button>
        )}
      </div>
    );
  }
}
