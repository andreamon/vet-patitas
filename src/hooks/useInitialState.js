import { useState } from "react";
import initialState from "../config/initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const loggedIn = () => {
    window.localStorage.setItem('MY_AUTH_APP', true);
    setState({ ...state, isAuthenticated: true });
  };

  const logout = () => {
    window.localStorage.removeItem('MY_AUTH_APP', true);
    setState({ ...state, isAuthenticated: false });
  };

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (items, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    addToCart,
    removeToCart,
    addToBuyer,
    loggedIn,
    logout,
    state,
  };
};

export default useInitialState;
