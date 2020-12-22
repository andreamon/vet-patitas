import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Layout,
  PetsList,
  AdoptedList,
  AddPetForm,
  EditPetForm,
  Detail,
  NotFound,
} from "../containers";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={PetsList} />
          <Route exact path="/adopteds" component={AdoptedList} />
          <Route exact path="/add" component={AddPetForm} />
          <Route exact path="/edit" component={EditPetForm} />
          <Route exact path="/detail" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
