import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import {storage} from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";
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
  faCameraRetro,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faTrashAlt, faPencilAlt, faPlusSquare, faPlusCircle, faCameraRetro, faExclamationCircle);

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("pets").get();
      setPets(data.docs.map((doc) => ({...doc.data(), 'id': doc.id})));
    };
    fetchData();
  }, [pets]);

  const addPetHandler = (pet,image) => {     //Agregar una nueva mascota
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on(
      "state_changed",
      snapshot =>{},
      error =>{
        console.log(error)
      },
      ()=>{
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url =>{
          console.log(url)
          pet.id = uuidv4();
          pet.photo = url;
          const db = firebase.firestore();
          db.collection("pets").add(pet);
          setPets([...pets, pet]);
        })
      }
    )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El paciente se ha agregado correctamente',
      showConfirmButton: false,
      timer: 4000
    })
  };

  const deletePetHandler = (id) => {     //Eliminar una mascota
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
        const db = firebase.firestore();
        db.collection('pets').doc(id).delete();
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
