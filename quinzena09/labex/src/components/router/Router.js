import react from "react";
import {Home} from "../Public/Home";
import {ApplicationForm} from "../Public/ApplicationForm";
import {ListTrips} from "../Public/ListTrips";
import { AdminHome } from "../Private/AdminHome";

import { BrowserRouter, Switch, Route } from "react-router-dom";



export const Router = () => {
  return (
      <Router>
      <div>
        <Switch>
          <Route path="/ApplicationForm">
            <ApplicationForm />
          </Route>
          <Route path="/ListTrips">
            <ListTrips />
          </Route>
          <Route path="/AdminHome">
              <AdminHome/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






