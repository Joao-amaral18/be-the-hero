import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Incidents from "./pages/Newincident";
import Profile from "./pages/Profile";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Incidents" exact component={Incidents} />
      </Switch>
    </BrowserRouter>
  );
}
