import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home"><strong>Patitas Suaves Corp.</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Agregar mascota</Nav.Link>
          <NavDropdown title="Acciones" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Item 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant="danger" size="sm">Cerrar Sesión</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;