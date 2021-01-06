import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "./Map";
import { Row, Col } from "react-bootstrap";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <Row>
      <Col>
        {/* <h5>{`${buyer[0].name}, gracias por tu compra`}</h5> */}
        <h5>Gracias por tu compra</h5>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div>
          <Map />
        </div>
      </Col>
    </Row>
  );
};

export default Success;
