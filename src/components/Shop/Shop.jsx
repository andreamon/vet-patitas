import React, { useContext } from "react";
import Load from "../Spinner/Load";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products, isAuthenticated } = state;
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <>
      <div className="my-3 mx-3 text-center">
        <h1 className="text-2xl">
          <strong>Nuestros productos</strong>
        </h1>
      </div>
      {products.length !== 0 ? (
        <div className="flex flex-col md:flex-row flex-wrap md:justify-center">
          {products.map((item) => (
            <div className="my-3 mx-2 w-auto md:w-1/4" key={item.id}>
              <Link to={`/detail/${item.id}`}>
              <img className="w-auto" src={item.image} alt="producto" loading="lazy" />
              
              <div className="my-2 text-left leading-relaxed">
                <p className="text-sm text-gray-700 font-semibold pb-1">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500">
                  Precio: $100
                </p>
              </div>
              </Link>
              {isAuthenticated && 
              <button
                className="px-5 py-4 md:py-2 w-full bg-indigo-400 text-white text-xs font-semibold rounded hover:bg-indigo-500 self-center hover:no-underline"
                onClick={handleAddToCart(item)}
              >
                Añadir al carrito
              </button>}
            </div>
          ))}
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default Shop;
