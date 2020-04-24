import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import PetsList from "./components/PetsList";
import AddPetForm from "./components/AddPetForm";
import EditPetForm from "./components/EditPetForm";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrashAlt, faPencilAlt, faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faTrashAlt, faPencilAlt, faPlusSquare, faPlusCircle);

const App = () => {
  const petsInitial = [
    {id: uuidv4(),name: "Nina",age: "6 años",type: "Felino"},
    {id: uuidv4(),name: "Negrunildo",age: "2 años",type: "Canino"},
    {id: uuidv4(),name: "Michitina",age: "4 años",type: "Felino"}];

  const [pets, setPets] = useState(petsInitial);

  const addPetHandler = (pet) => { //Agregar una nueva mascota
    pet.id = uuidv4();
    setPets([...pets, pet]);
  };

  const deletePetHandler = (id) => {    //Eliminar una mascota
    const filterPet = pets.filter((el) => el.id !== id);
    setPets(filterPet);
  };

  const sendPetId = (id) => { //Funcion para encontrar una mascota segun id
    const editPetAuto = pets.find((pet) => pet.id === id);
    return editPetAuto;
  };

  const confirmChangeHandler = (id, Updatepet) => { //Confirmar cambios
    const newPet = {id: id, ...Updatepet}
    setPets(pets.map((pet) => (pet.id === id ? newPet : pet)));
  };

  return (
      <Router>
        <Header />
        <Container style={{ marginTop: "2rem" }}>
          <Switch>
            <Route path="/" exact>
              <PetsList
                pets={pets}
                deletePetHandler={deletePetHandler}
              />
            </Route>
            <Route path="/editPet/:id" exact>
              <EditPetForm
                sendPetId={sendPetId}
                confirmChangeHandler={confirmChangeHandler}
              />
            </Route>
            <Route path="/addPet">
              <AddPetForm addPetHandler={addPetHandler} />
            </Route>
          </Switch>
        </Container>
      </Router>
  );
};

export default App;