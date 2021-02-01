import React from "react";
import useGetPets from "../hooks/useGetPets";
// import { Card, Row, Col } from "react-bootstrap";

const AdoptedList = () => {
  const pets = useGetPets();
  // let pets = adopteds.filter((pet) => pet.adopted === true);
  return (
    <>
    <div className="my-3 mx-3 text-center">
        <h1 className="text-2xl">
          <strong>Nuestros animalitos</strong>
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
              <p className="text-sm text-gray-500">Edad: {item.age}</p>
            </div>
          </div>
        ))}
      </div>
    </>
    // <Row>
    //   {pets.map((pet) => (
    //     <Col key={pet.id}>
    //       <Card style={{ width: "18rem" }} className="adopted-card">
    //         <Card.Img variant="top" src={pet.photo} className="card-img"/>
    //         <Card.Body>
    //           <Card.Title>{pet.name}</Card.Title>
    //           <Card.Text>
    //             Me llamo {pet.name} y tengo {pet.age}.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
  );
};

export default AdoptedList;
