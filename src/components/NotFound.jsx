import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col>
          <h3 style={{ color: "#E82D00" }}>
            <strong>Error 404</strong>
          </h3>
          <h5>La página a la que intenta acceder no existe</h5>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Image src="img/work.jpeg" style={{ height: "250px" }} rounded />
      </Row>
    </div>
  );
};

export default NotFound;
