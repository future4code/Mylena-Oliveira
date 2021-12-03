import {Home} from "../pages/Home";
import {ApplicationForm} from "../pages/ApplicationForm";
import {ListTrips} from "../pages/ListTrips";
import { AdminHome } from "../pages/AdminHome";
import {Login} from "../pages/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";


export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/ListTrips"}>
          <ListTrips />
        </Route>

        <Route exact path={"/AdminHome"}>
          <AdminHome />
        </Route>
        <Route exact path={"/Login"}>
          <Login />
        </Route>
        <Route exact path={"/ApplicationForm"}>
          <ApplicationForm />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}





