import React, {useContext} from "react";
import { Redirect, Route } from "react-router-dom";
import { SIGNUP } from "../../config/routes";
import AppContext from '../../context/AppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    state: { isAuthenticated },
  } = useContext(AppContext);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        (isAuthenticated ? <Component {...props} /> : <Redirect to={SIGNUP} />)
      }
    />
  );
};

export default PrivateRoute;
