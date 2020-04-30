import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { getPetAction } from "./redux/index";
import { Container, Row, Button, Table, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const PetsList = () => {
  // const dispatch = useDispatch();
  // const pets = useSelector(store => store.pets.array);
  // console.log(pets)
  const [pets, setPets] = useState([]);

  useEffect(() => {
    console.log("Desde useEffect");
    const getAll = () => {
      axios
        .get("/pets.json")
        .then((res) => {
          console.log(res.data);
          setPets(res.data);
          // console.log(pets);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAll();
  }, []);

  const deletePet = () => {
    Swal.fire({
      title: "Seguro desea eliminar este paciente?",
      text: "Esta acción no podrá deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire("Eliminado", "El paciente ha sido eliminado.", "success");
      }
    });
  };
  return (
    <>
      <Container>
        <Row className="my-3">
          <h3>Listado de mascotas</h3>
        </Row>
        <Row className="my-3">
          {/* <Button variant="success" onClick={() => dispatch(getPetAction())}> */}
        </Row>
        <Row>
          <Col md={10}>
            <Table striped hover responsive="sm" size="sm">
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
                      <td>
                        <Button
                          variant="link"
                          className="m-1"
                          data-toggle="tooltip"
                          title="Eliminar"
                          onClick={() => {
                            deletePet();
                          }}
                        >
                          <FontAwesomeIcon
                            icon="trash-alt"
                            style={{ color: "#EB0A02" }}
                          />
                        </Button>
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
      </Container>
    </>
  );
};

export default PetsList;
