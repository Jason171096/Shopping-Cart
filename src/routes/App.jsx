import React from "react";
import "../styles/global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { NewPassword } from "../pages/NewPassword";
import { RecoveryPassword } from "../pages/RecoveryPassword";
import { CreateAccount } from "../pages/CreateAccount";
import { EditAccount } from "../pages/EditAccount";
import { Orders } from "../containers/Orders";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/edit-account" component={EditAccount} />
          <Route exact path="/order" component={Orders} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
