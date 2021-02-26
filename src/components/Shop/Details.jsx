import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Load from "../Spinner/Load";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { products } = state;
  let item = products.find((item) => item.id === id);

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-center">
        {item ? (
          <>
            <div className="my-3 mx-3 text-center w-auto">
              <h1 className="text-xl">
                <strong>Detalles de {item.name}</strong>
              </h1>
              <img
                className="max-w-full h-auto"
                src={`../${item.image}`}
                alt="producto"
                loading="lazy"
              />

              <div className="my-2 text-left leading-relaxed">
                <p className="text-sm text-gray-700 font-semibold pb-1">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500">Price: {item.price}</p>
              </div>
            </div>
          </>
        ) : (
          <Load />
        )}
      </div>
    </>
  );
};

export default Detail;
