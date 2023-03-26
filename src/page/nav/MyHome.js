import React, { useState } from "react";
function MyHome() {
  const [searchUrl, setSearchUrl] = useState(
    "https://blog.csdn.net/liuyunshengsir"
  );

  return <div>技术博客地址：{searchUrl}</div>;
}
export default MyHome;
