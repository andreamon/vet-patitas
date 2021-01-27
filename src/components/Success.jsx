import React, { useContext } from "react";
import AppContext from "../context/AppContext";

// import Map from "./Map";
import useGoogleAddress from '../hooks/useGoogleAddress';
import Map from "./MapView";

import { Row, Col } from "react-bootstrap";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].number, buyer[0].address, buyer[0].city, buyer[0].country);
  return (
    <Row>
      <Col>
      {buyer && <div>
        <h5>{`${buyer[0].name}, gracias por tu compra`}</h5>
        
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        {location.length !== 0 && <Map data={location}/>}
        
        </div>}
        {/* <div> */}
          {/* <Map data={location}/> */}
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default Success;
