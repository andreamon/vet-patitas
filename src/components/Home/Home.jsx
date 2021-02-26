import React from "react";
import { Link } from "react-router-dom";
import {SHOP} from '../../config/routes';
import Map from "../Map/MapView";

const Home = () => {
  return (
    <div className="container mx-auto pt-5">
      <div className="flex flex-col-reverse md:flex-row md:justify-evenly text-center">
        <div className="flex flex-col justify-evenly text-gray-600">
          <p className="font-black text-lg md:text-2xl lg:text-4xl tracking-wide">
            Patitas Suaves Pet Store
          </p>
          <p className="text-sm md:text-lg lg:text-xl font-bold tracking-wide leading-loose">
            Tenemos todo lo que buscas para tu mascota! <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit....
          </p>
          <Link
            to={SHOP}
            className="mt-3 px-5 py-2 bg-indigo-400 text-white text-xs md:text-sm font-bold rounded hover:bg-indigo-500 self-center hover:no-underline hover:z-40"
          >
            Nuestros productos
          </Link>
        </div>
        <img
          src="./img/petfriend.svg"
          alt="patitas"
          className="p-4 md:w-1/2 lg:w-1/4"
        />
      </div>
      <section className="mt-5">
        <h3 className="text-xl text-gray-600 font-bold mx-2 mb-3">
          Los más pedidos!
        </h3>
        <div className="md:flex md:justify-between">
          <div className="mb-3 mx-2 flex-1">
            <Link to="/">
              <img
                className="mx-auto"
                src="./img/accesorio.jpg"
                alt=""
                loading="lazy"
              />
            </Link>
            <div className="mt-2 text-center md:text-left leading-relaxed">
              <p className="text-base text-gray-800 font-bold">
                Producto descripción
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Precio: $100
              </p>
            </div>
          </div>
          <div className="mb-3 mx-2 flex-1">
            <Link to="/">
              <img
                className="mx-auto"
                src="./img/accesorio.jpg"
                alt=""
                loading="lazy"
              />
            </Link>
            <div className="mt-2 text-center md:text-left leading-relaxed">
              <p className="text-base text-gray-800 font-bold">
                Producto descripción
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Precio: $100
              </p>
            </div>
          </div>
          <div className="mb-3 mx-2 flex-1">
            <Link to="/">
              <img
                className="mx-auto"
                src="./img/accesorio.jpg"
                alt=""
                loading="lazy"
              />
            </Link>
            <div className="mt-2 text-center md:text-left leading-relaxed">
              <p className="text-base text-gray-800 font-bold">
                Producto descripción
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Precio: $100
              </p>
            </div>
          </div>
          <div className="mb-3 mx-2 flex-1">
            <Link to="/">
              <img
                className="mx-auto"
                src="./img/accesorio.jpg"
                alt=""
                loading="lazy"
              />
            </Link>
            <div className="mt-2 text-center md:text-left leading-relaxed">
              <p className="text-base text-gray-800 font-bold">
                Producto descripción
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Precio: $100
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="about-us my-5 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-xl text-gray-600 font-bold mx-2 mb-3">
            Sobre nosotros
          </h3>
          <p className="mx-2 text-sm md:text-lg font-medium text-gray-500 tracking-wide leading-loose">
            Nuestra dirección es Ciudad de Ctes 0000 <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem
            ipsum dolor sit amet, consectetur adipiscing elit....
          </p>
        </div>
      </div>
      <div className="mb-5">
        <Map />
      </div>
    </div>
  );
};

export default Home;
