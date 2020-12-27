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
              <Page.PetsList />
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
