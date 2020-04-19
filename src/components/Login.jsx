import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Card style={{ marginTop: '70px' }}>
            <Card.Header>
              <h4 style={{textAlign: 'center'}}><strong>Patitas Suaves</strong></h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresar email" />
                  <Form.Text className="text-danger">
                    Campo obligatorio
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresar contraseña"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Acceder
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
