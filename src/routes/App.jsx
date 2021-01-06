import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as Page from "../containers";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Page.Layout>
          <Switch>
            <Route exact path="/">
              <Page.Home />
            </Route>
            <Route exact path="/adopteds">
              <Page.AdoptedList />
            </Route>
            <Route exact path="/add">
              <Page.AddPetForm />
            </Route>
            <Route exact path="/edit">
              <Page.EditPetForm />
            </Route>
            <Route exact path="/detail/:id">
              <Page.Detail />
            </Route>
            <Route exact path="/checkout">
              <Page.Checkout />
            </Route>
            <Route exact path="/info">
              <Page.Information />
            </Route>
            <Route exact path="/payment">
              <Page.Payment />
            </Route>
            <Route exact path="/success">
              <Page.Success />
            </Route>
            <Route>
              <Page.NotFound />
            </Route>
          </Switch>
        </Page.Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
export default App;
