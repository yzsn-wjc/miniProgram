import React from "react";

export default React.memo(() => {
  return (
    <div>
      <h1>apple后台</h1>
      <micro-app
        name="app3" // name(必传)：应用名称
        url="http://localhost:8098/" // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
        baseroute="/admin" // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
      ></micro-app>
    </div>
  );
});
