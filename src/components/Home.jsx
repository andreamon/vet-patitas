import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Load from "./Load";
import { Card, Col, Row, Button } from "react-bootstrap";
import AppContext from "../context/AppContext";

const Home = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <>
      <Row className="justify-content-center">
        <div className="py-3">
          <h3>
            <strong>Nuestros productos</strong>
          </h3>
        </div>
        {products.length !== 0 ? (
          <Col md={12}>
            <Row>
              {products.map((item) => (
                <Col
                  style={{ display: "flex", flexWrap: "wrap" }}
                  key={item.id}
                >
                  <Card style={{ width: "15rem" }} className="card-pets">
                    <Card.Img
                      variant="top"
                      // src={`${item.image}/100px180`}
                      src={item.image}
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
                        {item.name}
                      </Card.Title>
                      <Button variant="link" onClick={handleAddToCart(item)}>Añadir al carrito</Button>
                      {/* <Link to={`/detail/${item.id}`} className="btn btn-link">
                        Añadir al carrito <i class="fas fa-shopping-cart" />
                      </Link> */}
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
