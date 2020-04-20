import React from "react";
import { Table, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const PetsList = (props) => {
  return (
    <>
    <Row className="justify-content-center">
    <Col md={10}>
    <h3 className="p-3" style={{ backgroundColor: '#176FA6', color:'white' }}>
      Registro de mascotas 
      {/* <Link to="/addPet" className="btn btn-link" data-toggle="tooltip" title="Nuevo">
        <FontAwesomeIcon icon="plus-circle" style={{ color: 'white' }}/>
      </Link> */}
    </h3>
    <Table striped hover responsive="sm" size="sm">
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
                <Link to={`/editPet/${pet.id}`} className="btn btn-link" style={{margin:'4px'}} data-toggle="tooltip" title="Editar">
                  <FontAwesomeIcon icon="pencil-alt" style={{ color: 'blue' }}/>
                </Link>
                <Button variant="link" className="m-1" onClick={()=>{props.deletePetHandler(pet.id)}} data-toggle="tooltip" title="Eliminar">
                  <FontAwesomeIcon icon="trash-alt" style={{ color: 'red' }}/>
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
