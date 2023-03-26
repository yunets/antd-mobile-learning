import React, { useState } from "react";
function MyHome() {
  const [searchUrl, setSearchUrl] = useState("https://www.baidu.com");

  return <div>{searchUrl}</div>;
}
export default MyHome;
