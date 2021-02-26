import React from "react";
import {Link} from 'react-router-dom';
import { HOME } from "../config/routes";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-sm font-bold md:text-lg">Error 404</h3>
      <h5 className="text-base md:text-lg">La página a la que intenta acceder no existe</h5>
      <Link to={HOME} className="text-blue-500 font-semibold">Volver al Inicio</Link>
      <img src="img/notfound.png" alt="pagina no encontrada" className="w-auto" />
    </div>
  );
};

export default NotFound;
