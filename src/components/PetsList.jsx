import React from "react";
import { Table, Button } from "react-bootstrap";

const PetsList = (props) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Especie / Tipo</th>
          <th>Vacunas al día</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.pets.length > 0 ? (
          props.pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.age}</td>
              <td>{pet.type}</td>
              <td>{pet.vaccine}</td>
              <td>
                <Button variant="success" size="sm" className="m-1" onClick={()=>{props.editPet(pet)}}>
                  Editar
                </Button>
                <Button variant="danger" size="sm" className="m-1" onClick={()=>{props.deletePetHandler(pet.id)}}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>Aún no hay mascotas registradas</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default PetsList;
