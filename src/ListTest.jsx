import React from "react";
import { Table, Button, Col, Row } from "react-bootstrap";

const PetsList = ({pets, get}) => {
  return (
    <>
    <Row className="justify-content-center">
    <Col md={10}>
    <div className="py-3">
      <h3><strong>REGISTRO DE MASCOTAS</strong></h3><hr />
    </div>
    <Table striped hover responsive="sm" size="sm" >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Especie / Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pets.length > 0 ? (
          pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.age}</td>
              <td>{pet.type}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>Aún no hay mascotas registradas</td>
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
