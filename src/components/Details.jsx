import React from "react";
import Load from "./Load";
import { Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  const petFind = props.sendPetId(id);
  
  return (
    <Row className="justify-content-center">
      <Col md={9}>
        <div className="py-3">
          <Tabs defaultActiveKey="details" id="details-tab">
            <Tab eventKey="details" title="Detalles">
              {petFind ? (
              <Card style={{ marginTop: "3rem" }}>
                <Row>
                  <Col md={9}>
                    <Card.Body>
                      <Card.Title>
                        Detalles del paciente {petFind.name}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {petFind.type}
                      </Card.Subtitle>
                      <Card.Text>Edad: {petFind.age}</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={3}>
                    <Card.Img
                      style={{ width: "12rem", padding: "1rem" }}
                      className="img-fluid"
                      src={petFind.photo}
                    />
                  </Col>
                </Row>
              </Card>
              ) : (
                <Load />
              )}
            </Tab>
            <Tab eventKey="historial" title="Historia clínica">
              <div style={{ marginTop: "3rem" }}>
                <h4>Historial</h4>
              </div>
            </Tab>
            <Tab eventKey="otros" title="Tratamientos especiales">
              <div style={{ marginTop: "3rem" }}>
                <h4>Otros Detalles por aquí</h4>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Col>
    </Row>
  );
};

export default Detail;
