import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">
            <img
              src="./img/patitas_logo.png"
              alt="logo de patitas suaves"
              className="w-auto md:w-full h-auto"
            />
          </NavLink>
        </div>

        <div
          className={`${
            openMenu ? "block text-center w-full text-lg" : "hidden"
          } md:flex md:justify-end tracking-wide text-sm font-semibold uppercase`}
        >
          <NavLink
            to="/" exact
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
            activeClassName="menu_active"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
            activeClassName="menu_active"
          >
            Tienda
          </NavLink>
          <NavLink
            to="/adopteds"
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
            activeClassName="menu_active"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/checkout"
            className="block text-indigo-400 hover:text-indigo-600 p-2"
          >
            <i className="fas fa-shopping-cart" />
            {cart.length > 0 && (
              <span className="cart-header">{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>
      <div className="block md:hidden text-indigo-400 mt-8 mr-2">
        <button
          className="menu_burger"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <i className="fas fa-times" style={{ color: "#818CF8" }}></i>
          ) : (
            <i className="fas fa-bars" style={{ color: "#818CF8" }}></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
