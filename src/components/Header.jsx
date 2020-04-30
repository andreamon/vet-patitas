import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
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
        </Nav>
          {/* <NavDropdown title="Nombre del usuario" id="basic-nav-dropdown" style={{color:'white', textDecoration:'none'}}>
            <NavDropdown.Item href="#action/3.1">Cerrar sesión</NavDropdown.Item>
          </NavDropdown> */}
        <Form inline>
          <Button variant="danger" size="sm">Cerrar Sesión</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;