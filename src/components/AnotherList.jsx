import React,{ useReducer, useState, useMemo, useRef } from "react";
// import useGetPets from '../hooks/useGetPets';
import {
  Table,
  Button,
  Col,
  Row,
  Modal,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Load from "./Load";
import initialState from "../reducers/initialState";
import adoptedsReducer from "../reducers/index";
import Swal from "sweetalert2";

const PetsList = (props) => {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const [{ adopteds, show, petSelected }, dispatch] = useReducer(
    adoptedsReducer,
    initialState
  );
  // const pets = useGetPets();

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  let petsAvailable = props.pets.filter((pet) => pet.adopted === false);
  const petsResultSearch = useMemo(
    () =>
    petsAvailable.filter((pet) => {
        return pet.name.toLowerCase().includes(search.toLowerCase());
      }),
    [petsAvailable, search]
  );

  

  const handleClose = () => dispatch({ type: "CLOSE_MODAL" });

  const handleShowImage = (pet) => {
    dispatch({ type: "SHOW_MODAL", payload: pet });
  };

  const adoptedPet = (adopted) => {
    Swal.fire({
      position: "center",
      text: `Me llamo ${adopted.name}. Adoptar un animal implica compromiso y responsabilidad`,
      imageUrl: `${adopted.photo}`,
      imageHeight: 300,
      // title: "Adoptar",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Deseo adoptar a ${adopted.name}`,
      cancelButtonText: "Volver",
    }).then((result) => {
      if (result.value) {
        props.adoptedHandler(adopted);
      }
    });
    // dispatch({ type: "ADD_TO_ADOPTED", payload: adopted });
  };

  return (
    <>
      {props.loading ? (
        <Load />
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="py-3">
              <h3>
                <strong>REGISTRO DE ANIMALES LISTADO 2</strong>
              </h3>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Buscar animal"
                  value={search}
                  ref={searchInput}
                  onChange={handleSearch}
                ></FormControl>
              </InputGroup>
              {adopteds.map((adopted) => (
                <li key={adopted.id}>{adopted.name}</li>
              ))}
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Foto de {petSelected.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                <Image src={petSelected.photo} width="400px" rounded />
              </Modal.Body>
            </Modal>
            <Table hover bordered responsive="sm" size="sm" variant="light">
              <thead className="text-center">
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Especie</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                  <th>#</th>
                  <th>Adoptar</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {petsResultSearch.map((pet) => (
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
                    <td>
                      <Button
                        variant="link"
                        onClick={() => {
                          adoptedPet(pet);
                        }}
                        data-toggle="tooltip"
                        title="Quiero adoptar"
                      >
                        <FontAwesomeIcon
                          icon="heart"
                          style={{ color: "#F20D79" }}
                        />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default PetsList;
