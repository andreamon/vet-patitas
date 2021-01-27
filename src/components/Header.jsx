import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <nav className="flex justify-between items-start md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="block">
          <Link to="/">
            <img
              src="./img/patitas_logo.png"
              alt="logo de patitas suaves"
              className="w-auto md:w-full h-auto"
            />
          </Link>
        </div>

        <div
          className={`${
            openMenu ? "block text-center w-full" : "hidden"
          } md:flex md:justify-end tracking-wide text-sm font-semibold uppercase`}
        >
          <Link
            to="/"
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
          >
            Tienda
          </Link>
          <Link
            to="/"
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
          >
            Nosotros
          </Link>
          <Link
            to="/checkout"
            className="block text-indigo-400 hover:text-indigo-600 p-2"
          >
            <i className="fas fa-shopping-cart" />
            {cart.length > 0 && (
              <span className="cart-header">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
      <div className="block md:hidden text-indigo-400 mt-8">
        <a
          href="#"
          className="px-3 py-2 border-2 rounded border-indigo-400 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Header;
