import React, { useState } from "react";
import {
  Table,
  Button,
  Col,
  Row,
  Modal,
  Image,
  Spinner,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PetsList = (props) => {
  const [show, setShow] = useState(false);
  const [petSelected, setPetSelected] = useState({});

  const handleClose = () => setShow(false);

  const handleShowImage = (pet) => {
    setShow(true);
    setPetSelected(pet);
  };

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <div className="py-3">
          <h3>
            <strong>REGISTRO DE MASCOTAS</strong>
          </h3>
          <hr />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Foto de {petSelected.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image src={petSelected.photo} width="400px" rounded />
          </Modal.Body>
        </Modal>
        <Table hover bordered responsive="sm" size="sm">
          <thead className="text-center">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Especie / Tipo</th>
              <th>Imagen</th>
              <th>Acciones</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.pets.length > 0 ? (
              props.pets.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.type}</td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => handleShowImage(pet)}
                      data-toggle="tooltip"
                      title="Ver foto"
                    >
                      <FontAwesomeIcon
                        icon="camera-retro"
                        style={{ color: "#1982FF" }}
                      />
                    </Button>
                  </td>
                  <td>
                    <Link
                      to={`/editPet/${pet.id}`}
                      className="btn btn-link"
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
                  <td style={{ padding: "4px" }} className="text-right">
                    <Link
                      to={`/detail/${pet.id}`}
                      className="btn btn-link align-right"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">
                      Aún no hay mascotas registradas...
                    </span>
                  </Spinner>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default PetsList;
