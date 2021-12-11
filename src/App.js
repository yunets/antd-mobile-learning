import { BackTop } from "antd";
import { ProjectHistory } from "./page/info/ProjectHistory";
import { School } from "./page/info/School";
import { TechnologyStack } from "./page/info/TechnologyStack";
import { UserInfo } from "./page/info/UserInfo";

export default function App() {
  return (
    <div className="App">
      <h1>意向岗位为高级JAVA工程师、大数据开发工程师、全栈工程师</h1>
      <UserInfo />
      <School />
      <TechnologyStack />
      <ProjectHistory />
      <BackTop />
    </div>
  );
}
