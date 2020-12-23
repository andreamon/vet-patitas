import React from "react";
import { Link } from "react-router-dom";
import useGetPets from "../hooks/useGetPets";
import Load from "./Load";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  // let pets = useGetPets().filter((pet) => pet.adopted === false);
  let pets = useGetPets();
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
                <Col style={{ display: "flex", flexWrap: "wrap" }} key={pet.id}>
                  <Card style={{ width: "15rem" }} className="card-pets">
                    <Card.Img
                      variant="top"
                      src={`${pet.photo}/100px180`}
                      className="card-img"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {pet.name}
                      </Card.Title>
                      <Link to={`/detail/${pet.id}`} className="btn btn-link">
                        Detalles <i className="fas fa-paw" />
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        ) : (
          <Load />
        )}
      </Row>
    </>
  );
};

export default Home;
