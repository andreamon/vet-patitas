import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Link to="/" style={{color:'#fff', textDecoration:'none', padding:'8px'}}>
        <h4><strong>Patitas Suaves</strong></h4>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" style={{color:'#fff', textDecoration:'none', padding:'8px'}}>Inicio</Link>
          <Link to="/addPet" style={{color:'#fff', textDecoration:'none', padding:'8px'}}>Agregar mascota</Link>          
          <NavDropdown title="Acciones" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
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