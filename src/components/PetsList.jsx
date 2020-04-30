import React from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PetsList = (props) => {
  return (
    <Row className="justify-content-center">
      <Col md={10}>
        <div className="py-3">
          <h3>
            <strong>REGISTRO DE MASCOTAS</strong>
          </h3>
          <hr />
          {/* <Link to="/addPet" className="btn btn-link" data-toggle="tooltip" title="Agregar mascota">
          <FontAwesomeIcon icon="plus-square" style={{ color: 'white' }} size="lg"/>
          </Link> */}
        </div>
        <Table striped hover responsive="sm" >
          <thead className="text-center">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Especie / Tipo</th>
              <th>Imagen</th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.pets.length > 0 ? (
              props.pets.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.type}</td>
                  <td>{pet.photo}</td>
                  <td>
                    <Link
                      to={`/editPet/${pet.id}`}
                      className="btn btn-link"
                      style={{ margin: "4px" }}
                      data-toggle="tooltip"
                      title="Editar"
                    >
                      <FontAwesomeIcon
                        icon="pencil-alt"
                        style={{ color: "#1982FF" }}
                      />
                    </Link>
                    <Button
                      variant="link"
                      className="m-1"
                      onClick={() => {
                        props.deletePetHandler(pet.id);
                      }}
                      data-toggle="tooltip"
                      title="Eliminar"
                    >
                      <FontAwesomeIcon
                        icon="trash-alt"
                        style={{ color: "#EB0A02" }}
                      />
                    </Button>
                  </td>
                  <td style={{ padding: "4px" }}>
                    <Link to={`/detail/${pet.id}`} className="btn btn-link">
                      Ver detalles
                    </Link>
                  </td>
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
  );
};

export default PetsList;
