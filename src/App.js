import { BackTop } from "antd";
import { ProjectHistory } from "./page/info/ProjectHistory";
import { School } from "./page/info/School";
import { TechnologyStack } from "./page/info/TechnologyStack";
import { UserInfo } from "./page/info/UserInfo";

export default function App() {
  return (
    <div className="App">
      <h1>this is a test !!</h1>
      <TechnologyStack />
      <UserInfo />
      <School />
      <ProjectHistory />
      <BackTop />
    </div>
  );
}
