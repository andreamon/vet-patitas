import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import {HOME} from "../../config/routes";
import AppContext from "../../context/AppContext";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <>
        {!buyer ? (
          <div>
            <h5>{`${buyer[0].name}, gracias por tu compra`}</h5>
            <span>Tu pedido llegará en 3 días a tu dirección</span>
          </div>
        ) : (
          <Redirect to={HOME} />
        )}
      </>
  );
};

export default Success;
