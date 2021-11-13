import react from "react";
import {Home} from "../Public/Home";
import {ApplicationForm} from "../Public/ApplicationForm";
import {ListTrips} from "../Public/ListTrips";
import { AdminHome } from "../Private/AdminHome";
import {Login} from "../Private/Login";


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






