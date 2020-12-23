import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Page from "../containers";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};
export default App;
