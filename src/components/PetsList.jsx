import React from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PetsList = (props) => {
  return (
    <>
    <Row className="justify-content-center">
    <Col md={10}>
    <h3><strong>Listado de mascotas</strong></h3>
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
                <Link to="/editPet" className="btn btn-success" style={{margin:'4px'}}>Editar</Link>
                <Button variant="danger" className="m-1" onClick={()=>{props.deletePetHandler(pet.id)}}>
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
    </Col>
    </Row>
    </>
  );
};

export default PetsList;
