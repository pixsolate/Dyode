import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../home";
import Men from "../men";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/men" component={Men} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default MainRouter;
