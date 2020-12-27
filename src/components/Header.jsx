import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <Navbar bg="transparent" expand="lg" variant="light">
      <Link
        to="/"
        style={{ color: "#1697E9", textDecoration: "none", padding: "8px" }}
      >
        <h4>
          <strong>Patitas Suaves Pet Store</strong>
        </h4>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            to="/"
            style={{ color: "#1697E9", textDecoration: "none", padding: "8px" }}
          >
            Inicio
          </Link>
          <Link
            to="/addPet"
            style={{ color: "#1697E9", textDecoration: "none", padding: "8px" }}
          >
            Agregar
          </Link>
          <Link
            to="/listAdopted"
            style={{ color: "#1697E9", textDecoration: "none", padding: "8px" }}
          >
            Adoptados
          </Link>
          <Button variant="link">
            <i class="fas fa-shopping-cart" /> 
            {cart.length > 0 && <span className="cart-header">{cart.length}</span>}
          </Button>
        </Nav>

        {/* <Form inline>
          <Link to="/login" className="btn btn-danger btn-sm">Cerrar Sesión</Link>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
