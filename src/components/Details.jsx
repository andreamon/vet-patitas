import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import useGetPets from "../hooks/useGetPets";
import AppContext from "../context/AppContext";
import Load from "./Load";
import { Row, Col, Tabs, Tab, Card } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { products } = state;
  let item = products.find((item) => item.id === id);

  return (
    <Row className="justify-content-center">
      <Col md={9}>
        <div className="py-3">
          <Tabs defaultActiveKey="details" id="details-tab">
            <Tab eventKey="details" title="Detalles">
              {item ? (
                <Card style={{ marginTop: "3rem" }}>
                  <Row>
                    <Col md={9}>
                      <Card.Body>
                        <Card.Title>
                          Detalles del producto {item.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {item.price}
                        </Card.Subtitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Body>
                    </Col>
                    <Col md={3}>
                      <Card.Img
                        
                        className="img-fluid"
                        src={item.image}
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
