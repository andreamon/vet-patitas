import React, { useContext } from "react";
import Load from "./Load";
import {Col, Row} from "react-bootstrap";
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
          <h1 className="text-3xl">
            <strong>Nuestros productos</strong>
          </h1>
        </div>
        {products.length !== 0 ? (
          <Col md={12}>
            <Row>
              {products.map((item) => (
                <Col
                  style={{ display: "flex", flexWrap: "wrap" }}
                  key={item.id}
                >
                  <div className="w-60 shadow rounded m-5">
                    {/* <p className="font-bold	text-blue-600">{item.name}</p> */}
                    <img className="w-full" src={item.image} alt="logo" />
                    <div className="mx-12 my-2">
                      {/* <p className="text-sm text-gray-400">{item.description}</p> */}
                      <button
                        className="btn-ok"
                        onClick={handleAddToCart(item)}
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                  {/* <Card style={{ width: "15rem" }} className="card-pets">
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
                      <button className="btn-ok" onClick={handleAddToCart(item)}>Añadir al carrito</button>
                      </Card.Body>
                    </Card> */}
                  {/* <Link to={`/detail/${item.id}`} className="btn btn-link">
                        Añadir al carrito <i class="fas fa-shopping-cart" />
                      </Link> */}
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
