import React from "react";

export default React.memo(() => {
  return (
    <div>
      <h1>这是基于create-react-app创建的react应用</h1>
      <micro-app
        name="app1" // name(必传)：应用名称
        url="http://localhost:3002/" // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
        baseroute="/my-page1" // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
      ></micro-app>
    </div>
  );
});
