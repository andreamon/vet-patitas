import React from "react";
import useGetPets from "../../hooks/useGetPets";

const AdoptedList = () => {
  const pets = useGetPets();
  return (
    <>
      <div className="my-3 mx-3 text-center">
        <h1 className="text-2xl">
          <strong>CLIENTES FELICES</strong>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-center">
        {pets.map((item) => (
          <div className="my-3 mx-2 w-auto md:w-1/4" key={item.id}>
            <img className="h-48" src={item.photo} alt="foto de la mascota" />
            <div className="my-2 text-left leading-relaxed">
              <p className="text-sm text-gray-700 font-semibold pb-1">
                {item.name}
              </p>
              <p className="text-sm text-gray-500">Tiene {item.age}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdoptedList;
