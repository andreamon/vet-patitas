import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";
import {useFirebaseApp} from 'reactfire';
import Swal from "sweetalert2";
import Header from "./components/Header";
import PetsList from "./components/PetsList";
import AddPetForm from "./components/AddPetForm";
import EditPetForm from "./components/EditPetForm";
import Detail from './components/Details';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTrashAlt,
  faPencilAlt,
  faPlusSquare,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faTrashAlt, faPencilAlt, faPlusSquare, faPlusCircle);

const App = () => {
  const firebase = useFirebaseApp();
  console.log(firebase);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getAll = () => {
      axios
        .get("/pets.json")
        .then((res) => {
          setPets(res.data);
        })
    };
    getAll();
  }, []);

  const addPetHandler = (pet) => {
    //Agregar una nueva mascota
    pet.id = uuidv4();
    pet.photo = "/img/"+ pet.file[0].name;
    setPets([...pets, pet]);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El paciente se ha agregado correctamente',
      showConfirmButton: false,
      timer: 2000
    })
    console.log(pets);
  };

  const deletePetHandler = (id) => {
    //Eliminar una mascota
    Swal.fire({
      title: "Seguro que desea eliminar el paciente?",
      text: "Esta acción no podrá deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar mascota",
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire("Eliminado", "El paciente ha sido eliminado.", "success");
        const filterPet = pets.filter((el) => el.id !== id);
        setPets(filterPet);
      }
    });
  };

  const sendPetId = (id) => {
    //Funcion para encontrar una mascota segun id
    const editPetAuto = pets.find((pet) => pet.id === id);
    return editPetAuto;
  };

  const confirmChangeHandler = (id, Updatepet) => {
    //Confirmar cambios
    const newPet = { id: id, ...Updatepet };
    setPets(pets.map((pet) => (pet.id === id ? newPet : pet)));
  };

  return (
    <Router>
      <Header />
      <Container style={{ marginTop: "2rem" }}>
        <Switch>
          <Route path="/" exact>
            <PetsList pets={pets} deletePetHandler={deletePetHandler} />
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
          <Route path="/detail/:id" exact>
            <Detail sendPetId={sendPetId} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
