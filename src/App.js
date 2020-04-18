import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row, Col, Container } from "react-bootstrap";
import Header from './components/Header';
import PetsList from "./components/PetsList";
import AddPetForm from "./components/AddPetForm";
import EditPetForm from "./components/EditPetForm";

const App = () => {
  const petsInitial = [
    {
      id: uuidv4(),
      name: "Nina",
      age: "6 años",
      type: "Felino",
      vaccine: "Sí",
    },
    {
      id: uuidv4(),
      name: "Negrunildo",
      age: "2 años",
      type: "Canino",
      vaccine: "No",
    },
    {
      id: uuidv4(),
      name: "Michitina",
      age: "4 años",
      type: "Felino",
      vaccine: "Sí",
    },
  ];

  const [pets, setPets] = useState(petsInitial);
  const [editing, setEditing] = useState(false);
  const [currentPet, setCurrentPet] = useState({
    id: null,
    name: "",
    age: "",
    type: "",
  });

  const addPetHandler = (pet) => {
    //Agregar una nueva mascota
    pet.id = uuidv4();
    setPets([...pets, pet]);
  };

  const deletePetHandler = (id) => {
    //Eliminar una mascota
    const filterPet = pets.filter((el) => el.id !== id);
    setPets(filterPet);
  };

  const editPet = (pet) => {
    //Mostrar el formulario de edición con los datos de la mascota seleccionada
    setEditing(true);
    setCurrentPet({
      id: pet.id,
      name: pet.name,
      age: pet.age,
      type: pet.type,
    });
  };

  const confirmChangeHandler = (id, Updatepet) => {
    //Confirmar cambios
    setEditing(false);
    setPets(pets.map((pet) => (pet.id === id ? Updatepet : pet)));
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center p-3">
          <h2>
            <strong>Patitas Suaves</strong>
          </h2>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            {editing ? (
              <div>
                <h2>
                  <strong>Modificar datos</strong>
                </h2>
                <EditPetForm
                  currentPet={currentPet}
                  confirmChangeHandler={confirmChangeHandler}
                  setEditing={setEditing}
                />
              </div>
            ) : (
              <div>
                <h2>
                  <strong>Nuevo paciente</strong>
                </h2>
                <AddPetForm addPetHandler={addPetHandler} />
              </div>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center p-3">
          <h4>
            <strong>Listado de mascotas</strong>
          </h4>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <PetsList
              pets={pets}
              deletePetHandler={deletePetHandler}
              editPet={editPet}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
