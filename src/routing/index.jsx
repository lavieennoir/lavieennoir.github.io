import React, { memo } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import ScrollToTop from "./ScrollToTop";

function Routing() {
  return (
    <Router>
      <ScrollToTop />
      <Route path="*">
        <NotFound />
      </Route>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default memo(Routing);
