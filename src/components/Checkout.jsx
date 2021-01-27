import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Row, Col, Button } from "react-bootstrap";

const Checkout = () => {
  const {
    state: { cart },
    removeToCart,
  } = useContext(AppContext);

  const handleRemove = (product, index) => () => {
    removeToCart(product, index);
  };

  const handleSumAll = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <div>
        {cart.length > 0 ? (
          <h4>
            <strong>Lista de pedidos</strong>
          </h4>
        ) : (
          <h6>
            <strong>Aún no hay elementos en el carrito</strong>
          </h6>
        )}

        {cart.map((item, i) => (
          <Row key={i} style={{ margin: "15px", padding: "15px" }}>
            <Col md={4}>
              <p>Nombre del producto: {item.name}</p>
              <p>Precio del producto ${item.price}</p>
            </Col>
            <Col md={2} style={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="link"
                size="sm"
                title="Eliminar producto"
                style={{ color: "red" }}
                onClick={handleRemove(item, i)}
              >
                <i className="fas fa-trash-alt"></i>
              </Button>
            </Col>
          </Row>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="m-3">
          <p>{`Precio total $${handleSumAll()}`}</p>
          <div className="text-left pt-3">
            <Link to="/info" className="btn btn-pink btn-sm mr-1">
              Continuar pedido
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
