import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
