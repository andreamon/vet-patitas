import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { HOME, SHOP, SIGNUP, CLIENTS } from "../../config/routes";
import AppContext from "../../context/AppContext";

const Header = () => {
  const { state, logout } = useContext(AppContext);
  const { cart, isAuthenticated } = state;

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    setOpenMenu(false);
    logout();
  };

  return (
    <nav className="flex justify-between items-start md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="block">
          <NavLink to={HOME}>
            <img
              src="../img/patitas_logo.png"
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
            to={SHOP}
            onClick={() => {
              setOpenMenu(false);
            }}
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
            activeClassName="menu_active"
          >
            Tienda
          </NavLink>
          <NavLink
            to={CLIENTS}
            onClick={() => {
              setOpenMenu(false);
            }}
            className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
            activeClassName="menu_active"
          >
            Clientes
          </NavLink>
          <NavLink
            to="/checkout"
            onClick={() => {
              setOpenMenu(false);
            }}
            className="block text-indigo-400 hover:text-indigo-600 p-2"
          >
            <i className="fas fa-shopping-cart" />
            {cart.length > 0 && (
              <span className="cart-header">{cart.length}</span>
            )}
          </NavLink>
          {isAuthenticated ? (
            <NavLink
              to={HOME}
              exact
              onClick={handleLogout}
              className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
              
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to={SIGNUP}
              exact
              onClick={() => {
                setOpenMenu(false);
              }}
              className="block transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-600 hover:no-underline transform hover:-translate-y-1 hover:scale-110 p-2"
              activeClassName="menu_active"
            >
              Registrate
            </NavLink>
          )}
        </div>
      </div>
      <div className="block md:hidden text-indigo-400 mt-8 mr-2">
        <button className="menu_burger" onClick={() => setOpenMenu(!openMenu)}>
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
