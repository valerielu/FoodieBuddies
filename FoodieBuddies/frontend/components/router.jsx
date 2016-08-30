import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import App from "./app.jsx";

const AppRouter = () => (
  <Router hashHistory={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

export default AppRouter;
