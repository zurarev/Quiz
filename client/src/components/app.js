import React from "react";
import { Route, Link } from "react-router-dom";

import Sidebar from "./sidebar";
import Main from "./main";
import Questions from "./questions";
import Statistic from "./statistic";
import Result from "./result";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";

function App() {
  return (
    <div className="site">
      <Sidebar />
      <div className="content">
        <Route exact path="/" component={Main} />
        <Route
          path="/test"
          component={() => <Questions title="ისტორიის ტესტი" />}
        />
        <Route path="/statistic/:id" component={Statistic} />
        <Route path="/result" component={Result} />
      </div>
    </div>
  );
}

export default App;
