import React from "react";
import { Tabs, Radio } from "antd";

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

  render() {
    const { mode } = this.state;
    return (
      <div>
        <legend>技术栈</legend>
        <div>
          <Radio.Group
            onChange={this.handleModeChange}
            value={mode}
            style={{ marginBottom: 8 }}
          >
            <Radio.Button value="top">水平显示</Radio.Button>
            <Radio.Button value="left">垂直显示</Radio.Button>
          </Radio.Group>
          <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
            <TabPane tab={`技能总览`} key="1">
              Content of tab
              <div>
                而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
                而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
              </div>
            </TabPane>
            <TabPane tab={`JAVA`} key="2">
              Content of JAVA
              <div>
                而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
                而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？而世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，
                故非有志者不能至也。尽吾志也而不能至者，可以无悔矣，其孰能讥之乎？
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
