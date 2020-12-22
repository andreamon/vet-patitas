import React from "react";
import Load from "./Load";
import useGetPets from "../hooks/useGetPets";
// import initialState from "../initialState";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const pets = useGetPets();
  //   const { pets } = initialState;
  // let pets = initialState.pets;
  console.log(pets);
  //   let petsAvailable = pets.filter((pet) => pet.adopted === false);
  return (
    <>
      <Row className="justify-content-center">
        {pets.length !== 0 ? (
          <Col md={12}>
            <div className="py-3">
              <h3>
                <strong>Registro de animales</strong>
              </h3>
            </div>
            <Row>
              {pets.map((pet) => (
                // <Col key={pet.id}>
                  <Col style={{ display: "flex", flexWrap: "wrap" }}>
                  <Card style={{ width: "15rem" }} className="adopted-card" key={pet.id}>
                    <Card.Img
                      variant="top"
                      src={pet.photo}
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title style={{textAlign:"center", fontWeight:"bold"}}>{pet.name}</Card.Title>
                      <Card.Text>
                        Me llamo {pet.name} y tengo {pet.age}.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* <Table hover bordered responsive="sm" size="sm" variant="light">
              <thead className="text-center">
                <tr>
                  <th>Nombre</th>
                  <th>Especie</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {pets.map((pet) => (
                  <tr key={pet.id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table> */}
          </Col>
        ) : (
          <Load />
        )}
      </Row>
    </>
  );
};

export default Home;
