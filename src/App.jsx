import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Path from "./config/routes";
import * as Page from "./containers";
import PrivateRoute from "./utils/router/PrivateRoute";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Page.Layout>
          <Switch>
            <Route exact path={Path.HOME} component={Page.Home} />
            <Route path={Path.SIGNUP} component={Page.SignUp} />
            <Route path={Path.SIGNIN} component={Page.SignIn} />
            <Route exact path={Path.SHOP} component={Page.Shop} />
            <Route path={Path.CLIENTS} component={Page.Clients} />
            <Route path="/detail/:id" component={Page.Detail} />
            <PrivateRoute exact path="/checkout" component={Page.Checkout} />
            <PrivateRoute exact path="/info" component={Page.Information} />
            <PrivateRoute exact path="/payment" component={Page.Payment} />
            <PrivateRoute exact path={Path.SUCCESS} component={Page.Success} />
            <Route>
              <Page.NotFound />
            </Route>
          </Switch>
        </Page.Layout>
      </Router>
    </AppContext.Provider>
  );
};
export default App;
