import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button,Row,Col } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';

const AddPetForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const savePet = (data, e) => {
    props.addPetHandler(data);
    e.target.reset();
    history.push('/');  };

  return (
    <>
    <Row className="justify-content-center">
    <Col md={6}>
    <h3><strong>Nuevo paciente</strong></h3>
    <Form onSubmit={handleSubmit(savePet)} className="mb-4">
      <Form.Group controlId="inputName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese aquí el nombre del paciente"
          autoFocus
          ref={register({
            required: {
              value: true,
              message: "Su mascota no tiene nombre",
            },
          })}
        />
        <Form.Text className="text-danger mb-3">
          <strong>{errors?.name?.message}</strong>
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="inputAge">
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="text"
          name="age"
          placeholder="Ingrese aquí la edad de la mascota"
          ref={register({
            required: {
              value: true,
              message: "Debe ingresar la edad del animal",
            },
          })}
        />
        <Form.Text className="text-danger mb-3">
          <strong>{errors?.age?.message}</strong>
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="inputType">
        <Form.Label>Especie animal</Form.Label>
        <Form.Control
          as="select"
          name="type"
          ref={register({
            required: {
              value: true,
              message: "Debe seleccionar una especie",
            },
          })}
        >
          <option label="Seleccionar" />
          <option label="Canino" value="Canino" />
          <option label="Felino" value="Felino" />
          <option label="Roedor" value="Roedor" />
          <option label="Reptil" value="Reptil" />
          <option label="Ave" value="Ave" />
          <option label="Otro" value="Otro" />
        </Form.Control>
        <Form.Text className="text-danger mb-3">
          <strong>{errors?.type?.message}</strong>
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit" className="m-1">
        Agregar mascota
      </Button>
      <Link to="/" className="btn btn-danger">Cancelar</Link>
    </Form>
    </Col>
    </Row>
    </>
  );
};

export default AddPetForm;