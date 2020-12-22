import React from "react";
import useGetPets from '../hooks/useGetPets';
import { Card, Row, Col } from "react-bootstrap";

const AdoptedList = () => {
  const adopteds = useGetPets();
  let pets = adopteds.filter((pet) => pet.adopted === true);
  return (
    <Row>
      {pets.map((pet) => (
        <Col key={pet.id}>
          <Card style={{ width: "18rem" }} className="adopted-card">
            <Card.Img variant="top" src={pet.photo} className="card-img"/>
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <Card.Text>
                Me llamo {pet.name} y tengo {pet.age}.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AdoptedList;
