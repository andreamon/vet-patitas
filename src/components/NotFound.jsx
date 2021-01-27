import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-sm font-bold md:text-lg">Error 404</h3>
      <h5 className="text-base md:text-xl">La página a la que intenta acceder no existe</h5>
      <img src="img/notfound.png" alt="pagina no encontrada" className="w-auto" />
    </div>
  );
};

export default NotFound;
