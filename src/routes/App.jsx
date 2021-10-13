import React from "react";
import "../styles/global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../containers/Login";
import { NewPassword } from "../containers/NewPassword";
import { RecoveryPassword } from "../containers/RecoveryPassword";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
