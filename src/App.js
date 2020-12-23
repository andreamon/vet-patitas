import React, { useEffect, useState, useContext } from "react";
// import useGetPets from './hooks/useGetPets';
import ThemeContext from "./context/ThemeContext";
import firebase, { db } from "./firebase";
import { storage } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { showModal } from "./utils";
import {
  Login,
  Header,
  PetsList,
  AdoptedList,
  AddPetForm,
  EditPetForm,
  Detail,
  NotFound,
} from "./containers";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTrashAlt,
  faPencilAlt,
  faPlusSquare,
  faPlusCircle,
  faCameraRetro,
  faExclamationCircle,
  faHeart,
  faPaw
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faTrashAlt,
  faPencilAlt,
  faPlusSquare,
  faPlusCircle,
  faCameraRetro,
  faExclamationCircle,
  faHeart, faPaw
);

const App = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    db.collection("pets").onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setPets(list);
    });
  }, []);

  // const getPets = useGetPets();

  const addPetHandler = (pet, image) => {
    //Agregar una nueva mascota
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            // pet.id = uuidv4();
            pet.photo = url;
            pet.adopted = false;
            // const db = firebase.firestore();
            db.collection("pets").add(pet);
            setPets([...pets, pet]);
          });
      }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El paciente se ha agregado correctamente",
      showConfirmButton: false,
      timer: 4000,
    });
  };

  const deletePetHandler = (id) => {
    //Eliminar una mascota
    showModal({
      title: "Seguro que desea eliminar el paciente?",
      text: "Esta acción no podrá deshacerse",
      confirmText: "Sí, eliminar",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Eliminado", "El paciente ha sido eliminado.", "success");
        const db = firebase.firestore();
        db.collection("pets").doc(id).delete();
      }
    });
  };

  const sendPetId = (id) => {
    //Funcion para encontrar una mascota segun id
    const editPetAuto = pets.find((pet) => pet.id === id);
    return editPetAuto;
  };

  const confirmChangeHandler = (id, Updatepet) => {
    console.log(Updatepet);
    //Confirmar cambios
    const petUpdated = db.collection("pets").doc(id);
    petUpdated.update(Updatepet);
    // setPets(pets.map((pet) => (pet.id === id ? petUpdated : pet)));
  };

  const adoptedHandler = async (adopted) => {
    const db = firebase.firestore();
    const idAdopted = adopted.id;
    const petRef = db.collection("pets").doc(idAdopted);
    await petRef.update({ adopted: true });
  };

  return (
    <Router>
      <Header />
      <Container style={{ marginTop: "2rem" }}>
        <Switch>
          <Route path="/detail/:id">
            <Detail sendPetId={sendPetId} />
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
          <Route path="/listAdopted">
            <AdoptedList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <PetsList
              pets={pets}
              loading={loading}
              deletePetHandler={deletePetHandler}
              adoptedHandler={adoptedHandler}
            />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
