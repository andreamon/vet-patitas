import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <Container>
      <Card id="login-card">
        <Row>
          {/* <Col md={{ span: 5 }} >
            <Card.Img
              style={{ height: "200px", padding: "25px", borderRadius:"40px" }}
              className="img-fluid"
              src="img/patitas_logo.png"
            />
          </Col> */}
          <Col md={{ span: 4, offset:4 }} style={{ paddingTop: "30px" }}>
            {/* <Card.Header> */}
              <Card.Img
                style={{ height: "150px", padding: "25px", borderRadius:"40px" }}
                className="img-fluid"
                src="img/patitas_logo.png"
              />
              {/* <h4 style={{ textAlign: "center" }}>
                <strong>Patitas Suaves</strong>
              </h4> */}
            {/* </Card.Header> */}
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresar email" />
                  <Form.Text className="text-danger">
                    <FontAwesomeIcon icon="exclamation-circle" size="lg"/><strong> Campo obligatorio</strong>
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresar contraseña"
                  />
                </Form.Group>

                <Button variant="info" type="submit" block>
                  Acceder
                </Button>
              </Form>
            </Card.Body>
          </Col>
          
        </Row>
      </Card>
    </Container>
  );
};

export default Login;
