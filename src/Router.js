// 如下代码定义了一个纯路由组件，
// 将页面组件使用Route组件包裹，
// 外面套用Switch作路由匹配，
// 当路由组件检测到地址栏与Route的path匹配时，
// 就会自动加载响应的页面。


// 路由配置 然后在入口文件即index.js文件中引入 在render函数中渲染

import Index from "./pages/Index";
import Play from "./pages/Play";
import Rush from "./pages/Rush";
import Start from "./pages/Start";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/rush" component={Rush} />
     <Route exact path="/start" component={Start} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
